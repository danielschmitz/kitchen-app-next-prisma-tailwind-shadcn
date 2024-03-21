'use client'

import { ColumnDef } from '@tanstack/react-table'
import { StockWithProduct } from './actions'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowUpDown } from 'lucide-react'

export const DataColumnsStock: ColumnDef<StockWithProduct>[] = [
  {
    accessorKey: 'product.name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Produto
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
  {
    accessorKey: 'quantity',
    header: () => <div className="text-center">Quantity</div>,
    cell: ({ row }) => {
      const value = row.getValue('quantity') as number
      return <div className="text-center font-medium">{value}</div>
    }
  },
  {
    accessorKey: 'added',
    header: () => <div className="text-right">Added</div>,
    cell: ({ row }) => {
      const value = row.getValue('added') as Date
      const formatted = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).format(value)
      return <div className="text-right font-medium">{formatted}</div>
    }
  },
  {
    accessorKey: 'price',
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => {
      const valueToFormat = parseFloat(row.getValue('price'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(valueToFormat)

      return <div className="text-right font-medium">{formatted}</div>
    }
  },
  {
    accessorKey: 'expires',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Expires
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const value = row.getValue('expires') as Date
      const formatted = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).format(value)
      const thirtyDaysFromNow = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
      const thirtyDaysAgo = new Date(Date.now() - 1000 * 60 * 60 * 24 * 30)
      const isNearExpiration =
        thirtyDaysAgo < new Date(formatted) && new Date(formatted) < thirtyDaysFromNow

      return (
        <div
          className="text-right font-medium"
          style={{ color: isNearExpiration ? 'red' : 'black' }}
        >
          {formatted}
        </div>
      )
    }
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const idStock = row.original.id
      return (
        <div className="text-right font-medium">
          <Button variant="ghost">
            <Link href={`/stock/edit/${idStock}`}>Edit</Link>
          </Button>
        </div>
      )
    }
  }
]
