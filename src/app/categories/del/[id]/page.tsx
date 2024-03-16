import Submit from "@/components/Submit";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

interface PageParams {
  params: {
    id: string;
  };
}

export default async function page ({ params }: PageParams) {
  async function saveCategory(formData: FormData) {
    "use server";
    const formObject = Object.fromEntries(formData);
    const prisma = new PrismaClient();
    await prisma.category.delete({
      where: { id: formObject.id as string },
    });
    redirect("/categories");
  }

  const id = params.id;
  const prisma = new PrismaClient();
  const category = await prisma.category.findUniqueOrThrow({ where: { id } });

  return (
    <div>
      <div className="flex flex-row w-full">
        <form
          className=""
          action={saveCategory}
        >
          <input type="hidden" name="id" defaultValue={category.id} />

          <div className="flex items-center justify-between">
            {/* <Button type="submit">Confirm Delete '{category.name}' ?</Button> */}
            <Submit>Confirm Delete {category.name} ?</Submit>
          </div>
        </form>
      </div>
    </div>
  );
};

