"use server";

import ProductForm from "@/app/products/ProductForm";
import { FindCategories, FindProduct, UpdateProduct } from "../../actions";

interface PageParams {
  params: {
    id: string;
  };
};

export default async function Page({ params }: PageParams) {
  const categories = await FindCategories();
  const product = await FindProduct(params.id);

  return (
    <div>
      <ProductForm categories={categories} initialData={product} action={UpdateProduct} />
    </div>
  );
}