"use server";

import StockForm from "../StockForm";
import { CreateStock, FindProducts } from "../actions";

export default async function Page() {
  const products = await FindProducts();
  return (
    <div>
      <StockForm products={products} action={CreateStock} />
    </div>
  );
}
