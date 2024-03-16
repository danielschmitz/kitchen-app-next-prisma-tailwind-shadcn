import Submit from "@/app/categories/Submit";
import { Category, PrismaClient, Product } from "@prisma/client";
import { redirect } from "next/navigation";

interface PageParams {
  params: {
    id: string;
  };
}

interface CategoryWithProducts extends Category {
  products: Product[];
}

export default async function page({ params }: PageParams) {
  async function deleteCategory(formData: FormData) {
    "use server";
    const formObject = Object.fromEntries(formData);
    const id = formObject.id as string;
    const prisma = new PrismaClient();

    const myCategory: CategoryWithProducts =
      await prisma.category.findFirstOrThrow({
        where: { id },
        include: { products: true },
      });
      
    if (myCategory.products.length > 0) {
      throw new Error("Cannot delete a category that has products");
    }

    await prisma.category.delete({
      where: { id },
    });

    redirect("/categories");
  }

  const id = params.id;
  const prisma = new PrismaClient();
  const category = await prisma.category.findUniqueOrThrow({ where: { id } });

  return (
    <div>
      <div className="flex flex-row w-full">
        <form className="" action={deleteCategory}>
          <input type="hidden" name="id" defaultValue={category.id} />

          <div className="flex items-center justify-between">
            {/* <Button type="submit">Confirm Delete '{category.name}' ?</Button> */}
            <Submit>Confirm Delete {category.name} ?</Submit>
          </div>
        </form>
      </div>
    </div>
  );
}
