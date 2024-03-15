import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import UpdateForm from "./form";

export default async function page ({ params }: { params: { id: string } }) {
  async function saveCategory(formState: any, formData: FormData) {
    "use server";
    
    const id = formData.get('id')
    const name = formData.get('name')

    // validate data
    if (!formData.get('name')) {
      return {
        errors: {
          name: 'Name is required',
        },
      };
    }

    // mutate data
    const prisma = new PrismaClient();
    await prisma.category.update({
      where: { id: id as string },
      data: { name: name as string },
    });

    redirect("/categories");
  }

  const  id  = params.id;
  const prisma = new PrismaClient();
  const category = await prisma.category.findUniqueOrThrow({ where: { id } });

  return (
    <div>
      <div className="flex flex-row w-full">
          <UpdateForm formAction={saveCategory} initialData={category} />
      </div>
    </div>
  );
};

