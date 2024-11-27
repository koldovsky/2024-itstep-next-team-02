import { Product } from "@prisma/client";
import { axiosInstance } from "./axios-instance";
export const search = async (query: string): Promise<Product[]> => {
  const { data } = await axiosInstance.get<Product[]>("goods/search", { params: { query } });

  return data;
};
