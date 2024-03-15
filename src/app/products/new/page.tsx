import { PrismaClient } from "@prisma/client";
import ProductForm from "./productform";
import { redirect } from "next/navigation";


export default async function Page() {
    const prisma = new PrismaClient()
    async function createProduct(formData: FormData) {
        'use server'
        console.log(formData)
        redirect('/products')
        
    }

    const categories = await  prisma.category.findMany()

    return (
        <div>
            <ProductForm formAction={createProduct}  categories={categories} />
        </div>
    );
}


