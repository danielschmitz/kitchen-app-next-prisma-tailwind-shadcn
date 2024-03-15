'use server'

import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";


export async function CreateProduct(data:any) {
    const prisma = new PrismaClient();
    await prisma.product.create({
        data: {
            name: data.name,
            supplier: data.supplier,
            categoryId: data.categoryId
        }
    })
}

export async function RedirectTo(path:string) {
    redirect(path)
}