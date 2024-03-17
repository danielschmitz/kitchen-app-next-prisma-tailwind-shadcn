"use server";

import StockForm from "../StockForm";
import { CreateStock, FindCategoriesWithProducts, FindProducts } from "../actions";

export default async function Page() {
  const categoriesWithProducts = await FindCategoriesWithProducts();
  return (
    <div>
      <StockForm categoriesWithProducts={categoriesWithProducts} action={CreateStock} />
    </div>
  );
}
