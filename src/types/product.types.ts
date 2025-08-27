import { TCategory } from "./category.types";

export type TProduct = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: TCategory;
  images: string[];
  creationAt?: string;
  updatedAt?: string;
};
