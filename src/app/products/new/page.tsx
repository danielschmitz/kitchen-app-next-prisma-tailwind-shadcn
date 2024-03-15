"use server";

import { PrismaClient } from "@prisma/client";
import ProductForm from "./productform";
import { redirect } from "next/navigation";

export default async function Page() {
  const prisma = new PrismaClient();
  const categories = await prisma.category.findMany();

  return (
    <div>
      <ProductForm categories={categories} />
    </div>
  );
}
