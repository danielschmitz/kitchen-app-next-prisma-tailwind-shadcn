"use server"

import { Category, PrismaClient, Product, Stock } from "@prisma/client";

export interface CategoryWithProducts extends Category {
    products: Product[]
}

const prisma = new PrismaClient();

export async function FindStock(): Promise<Stock[]> {
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
    return prisma.stock.create({data: stock});
}