import Submit from "@/components/Submit";
import { Button } from "@/components/ui/button";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { number } from "zod";

const page = async ({ params }: { params: { id: string } }) => {
  async function saveCategory(formData: FormData) {
    "use server";
    const formObject = Object.fromEntries(formData);
    const prisma = new PrismaClient();
    await prisma.category.delete({
      where: { id: parseInt(formObject.id as string) },
    });
    redirect("/categories");
  }

  const id = parseInt(params.id);
  const prisma = new PrismaClient();
  const category = await prisma.category.findFirstOrThrow({ where: { id } });

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

export default page;
