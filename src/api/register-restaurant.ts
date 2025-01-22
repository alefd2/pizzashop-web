import { api } from "@/lib/axios";

export interface RegisterRestaltantBody {
  restaurantName: string;
  managerName: string;
  email: string;
  phone: string;
}

export const registerRestaurant = async ({
  email,
  managerName,
  phone,
  restaurantName,
}: RegisterRestaltantBody) => {
  await api.post("/restaurants", { email, managerName, phone, restaurantName });
};
