import { api } from "@/lib/axios";

export interface GetManagedRestaurantResponse {
  id: string;
  name: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  description: string | null;
  managerId: string | null;
}

export const getManagedRestaurant = async () => {
  return await api.get<GetManagedRestaurantResponse>("/managed-restaurant");
};
