"use server";

import ProductForm from "../../productform";
import { FindCategories, FindProduct, UpdateProduct } from "../../actions";

export default async function Page({ params }: { params: { id: string } }) {
  const categories = FindCategories();
  const product = await FindProduct(params.id);

  return (
    <div>
      <ProductForm categories={categories} initialData={product} action={UpdateProduct} />
    </div>
  );
}