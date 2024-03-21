'use server'

import { Category, PrismaClient, Product } from '@prisma/client'
import { redirect } from 'next/navigation'

const prisma = new PrismaClient()

type ProductWithCategory = Product & { category: Category }

export async function FindProducts(): Promise<ProductWithCategory[]> {
  return await prisma.product.findMany({
    include: { category: true }
  })
}

export async function FindCategories(): Promise<Category[]> {
  return await prisma.category.findMany()
}

export async function FindProduct(id: string): Promise<Product> {
  return await prisma.product.findUniqueOrThrow({
    where: { id },
    include: { category: true }
  })
}

export async function CreateProduct(product: Product): Promise<Product> {
  await prisma.product.create({ data: product })
  redirect('/products')
}

export async function UpdateProduct(data: Product) {
  await prisma.product.update({ where: { id: data.id }, data })
  redirect('/products')
}

export async function DeleteProduct(id: string) {
  await prisma.product.delete({ where: { id } })
  redirect('/products')
}
