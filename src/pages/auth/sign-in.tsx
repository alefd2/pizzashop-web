import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormData>();

  type SignInFormData = z.infer<typeof signInFormSchema>;

  const signInFormSchema = z.object({
    email: z.string().email(),
  });

  const handleSignIn = async (data: SignInFormData) => {
    console.log(data);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Enviamos um link de autenticação para seu e-mail.", {
        action: {
          label: "Reenviar email",
          onClick: () => handleSignIn(data),
        },
      });
    } catch (error) {
      toast.error("Credenciais inválidas.");
    }
  };

  return (
    <>
      <Helmet title="Login" />
      <div>
        <div className="p-8">
          <Button variant={"ghost"} asChild className="absolute right-8 top-8">
            <Link to="/sign-up">Novo estabelescimento</Link>
          </Button>
          <div className="flex w-[350px] flex-col justify-center gap-6">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Acessar painel
              </h1>
              <p className="text-sm text-muted-foreground">
                Acompanha suas vendas pelo painel do parceiro
              </p>
            </div>

            <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Acessar painel</Label>
                <Input
                  {...register("email")}
                  required
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <Button disabled={isSubmitting} className="w-full" type="submit">
                Entrar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
