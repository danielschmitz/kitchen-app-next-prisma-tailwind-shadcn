'use server'

import { redirect } from 'next/dist/server/api-utils'
import StockForm from '../StockForm'
import { CreateStock, FindCategoriesWithProducts, FindProducts } from '../actions'

export default async function Page() {
  const categoriesWithProducts = await FindCategoriesWithProducts()
  return (
    <div>
      <StockForm categoriesWithProducts={categoriesWithProducts} action={CreateStock} />
    </div>
  )
}
