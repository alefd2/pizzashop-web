import { api } from "@/lib/axios";

export interface GetOrderDetailsParams {
  orderId: string;
}

export interface GetOrderDetailsResponse {
  id: string;
  createdAt: string;
  status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
  totalInCents: number;
  customer: {
    name: string;
    email: string;
    phone: string | null;
  };
  orderItems: {
    id: string;
    priceInCents: number;
    quantity: number;
    product: {
      name: string;
    };
  }[];
}

export const getOrdersDetails = async ({ orderId }: GetOrderDetailsParams) => {
  const reponse = await api.get<GetOrderDetailsResponse>(`/orders/${orderId}`);
  return reponse.data;
};
