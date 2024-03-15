"use server";

import { PrismaClient } from "@prisma/client";
import ProductForm from "../../productform";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const prisma = new PrismaClient();
  const categories = await prisma.category.findMany();
  const  id  = params.id;
  const product = await prisma.product.findUniqueOrThrow({ where: { id } });

  async function UpdateAction(data: any) {
    "use server"
    const prisma = new PrismaClient();
    await prisma.product.update({ where: { id }, data })
    redirect("/products")
  }

  return (
    <div>
      <ProductForm categories={categories} initialData={product} action={UpdateAction} />
    </div>
  );
}