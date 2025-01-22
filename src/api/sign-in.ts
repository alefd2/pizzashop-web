import { api } from "@/lib/axios";

export interface SignInFormData {
  email: string;
}

export const signIn = async ({ email }: SignInFormData) => {
  await api.post("/authenticate", { email });
};
