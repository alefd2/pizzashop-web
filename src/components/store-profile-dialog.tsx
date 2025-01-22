import { Button } from "./ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { getManaged } from "@/api/get-managed-restaurant";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfile } from "@/api/update-profile";
import { toast } from "sonner";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { describe } from "node:test";

export const StoreProfileDialog = () => {
  const queryClient = useQueryClient();

  const { data: managedRestaurant } = useQuery({
    queryKey: ["managed-restaurant"],
    queryFn: getManaged,
  });

  type StroreProfileSchema = z.infer<typeof storeProfileSchema>;

  const storeProfileSchema = z.object({
    name: z.string().min(1),
    description: z.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StroreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.data.name ?? "",
      description: managedRestaurant?.data.description ?? "",
    },
  });

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onSuccess(_, { name, description }) {
      const cached = queryClient.getQueryData(["managed-restaurant"]);
      if (cached) {
        queryClient.setQueryData(["managed-restaurant"], {
          ...cached,
          name,
          description,
        });
      }
    },
  });

  const handleUpdateProfile = async (data: StroreProfileSchema) => {
    try {
      await updateProfileFn({
        description: data.description,
        name: data.name,
      });

      toast.success("Perfil atualizado com sucesso");
    } catch (error) {
      toast.error("Falha ao atualizar, tente novamente!");
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelescimento visíveis ao seu
          cliente
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit(handleUpdateProfile)} action="">
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input className="col-span-3" id="name" {...register("name")} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Descrição
            </Label>
            <Textarea
              className="col-span-3"
              id="description"
              {...register("description")}
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancelar
            </Button>
          </DialogClose>
          <Button disabled={isSubmitting} variant="success" type="submit">
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};
