import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import { toast } from 'sonner'
import { z } from 'zod'

import { registerRestaurant } from '@/api/register-restaurant'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const SignUp = () => {
  const signUpFormSchema = z.object({
    restaurantName: z.string(),
    managerName: z.string(),
    phone: z.string(),
    email: z.string().email(),
  })

  type SignUpFormData = z.infer<typeof signUpFormSchema>
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormData>()

  const { mutateAsync: registerRestaurantFn } = useMutation({
    mutationFn: registerRestaurant,
  })

  const handleSignUp = async (data: SignUpFormData) => {
    try {
      await registerRestaurantFn({
        email: data.email,
        managerName: data.managerName,
        phone: data.phone,
        restaurantName: data.restaurantName,
      })

      toast.success('Restaurante cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in?email=' + data.email),
        },
      })
    } catch (error) {
      toast.error('Erro ao cadastrar.')
    }
  }

  return (
    <>
      <Helmet title="Login" />

      <div>
        <div className="p-8">
          <Button variant={'ghost'} asChild className="absolute right-8 top-8">
            <Link to="/sign-in">Fazer login</Link>
          </Button>
          <div className="flex w-[350px] flex-col justify-center gap-6">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Criar conta grátis
              </h1>
              <p className="text-sm text-muted-foreground">
                Seja um parceiro e comece a vender seus produtos.
              </p>
            </div>

            <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="restaurantName">Nome estabelecimento</Label>
                <Input
                  {...register('restaurantName')}
                  required
                  id="restaurantName"
                  placeholder="Nome do restaureante"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="managerName">Seu nome</Label>
                <Input
                  {...register('managerName')}
                  required
                  id="managerName"
                  placeholder="nome"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Seu email</Label>
                <Input
                  {...register('email')}
                  required
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Seu celular</Label>
                <Input
                  {...register('phone')}
                  required
                  id="phone"
                  type="tel"
                  placeholder="Seu celular"
                />
              </div>

              <p className="px-6 text-center text-sm text-muted-foreground">
                Ao continuar, você concorda com os{' '}
                <a className="underline underline-offset-4">termos de uso</a> e{' '}
                <a className="underline underline-offset-4">
                  privacidade da nossa plataforma.
                </a>
              </p>
              <Button disabled={isSubmitting} className="w-full" type="submit">
                Finalizar cadastro
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
