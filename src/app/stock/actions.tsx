"use server"

import { Category, PrismaClient, Product, Stock } from "@prisma/client";
import { redirect } from "next/navigation";

export interface CategoryWithProducts extends Category {
    products: Product[]
}

export interface StockWithProduct extends Stock {
    product: Product
}

const prisma = new PrismaClient();

export async function FindStock(): Promise<StockWithProduct[]> {
    return prisma.stock.findMany({include: {product: true}});
};

export async function FindProducts(): Promise<Product[]> {
    return prisma.product.findMany();
}

export async function FindCategoriesWithProducts(): Promise<CategoryWithProducts[]> {
    return prisma.category.findMany({
        where: {
            products: {
                some: {}
            }
        },
        include: {
            products: true
        }
    })
}

export async function CreateStock(stock: Stock): Promise<Stock> {
    await prisma.stock.create({data: stock});
    redirect('/stock')
}
