"use server";

import { PrismaClient } from "@prisma/client";
import ProductForm from "../productform";
import { CreateProduct, FindCategories } from "../actions";

export default async function Page() {
  const categories = await FindCategories()

  return (
    <div>
      <ProductForm categories={categories}  action={CreateProduct}/>
    </div>
  );
}
