"use server"

import { PrismaClient, Product, Stock } from "@prisma/client";

const prisma = new PrismaClient();

export async function FindStock(): Promise<Stock[]> {
    return prisma.stock.findMany({include: {product: true}});
};

export async function FindProducts(): Promise<Product[]> {
    return prisma.product.findMany();
}

export async function CreateStock(stock: Stock): Promise<Stock> {
    return prisma.stock.create({data: stock});
}