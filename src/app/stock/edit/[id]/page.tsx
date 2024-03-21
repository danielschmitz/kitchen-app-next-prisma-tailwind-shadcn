'use server'

import StockForm from '../../StockForm'
import { EditStock, FindCategoriesWithProducts, FindStock } from '../../actions'

interface PageParams {
  params: {
    id: string
  }
}

export default async function Page({ params }: PageParams) {
  const categoriesWithProducts = await FindCategoriesWithProducts()
  const stock = await FindStock(params.id)
  return (
    <div>
      <StockForm
        categoriesWithProducts={categoriesWithProducts}
        action={EditStock}
        initialData={stock}
      />
    </div>
  )
}
