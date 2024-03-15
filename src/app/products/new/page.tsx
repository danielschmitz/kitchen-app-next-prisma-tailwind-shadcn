"use server";

import { PrismaClient } from "@prisma/client";
import ProductForm from "../productform";
import { redirect } from "next/navigation";

export default async function Page() {
  const prisma = new PrismaClient();
  const categories = await prisma.category.findMany();

  async function CreateAction(data:any){
    "use server"
    const prisma = new PrismaClient();
    await prisma.product.create({data:data})
    redirect("/products")
  }

  return (
    <div>
      <ProductForm categories={categories}  action={CreateAction}/>
    </div>
  );
}
