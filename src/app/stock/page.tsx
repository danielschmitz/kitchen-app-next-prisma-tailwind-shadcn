import Link from 'next/link'
import { FindStocks } from './actions'
import { DataTableStock } from './DataTableStock'
import { DataColumnsStock } from './DataColumnsStock'

export default async function Page({ params }: any) {
  const columns = DataColumnsStock
  const data = await FindStocks()

  return (
    <div>
      <DataTableStock columns={columns} data={data} />
    </div>
  )
}
