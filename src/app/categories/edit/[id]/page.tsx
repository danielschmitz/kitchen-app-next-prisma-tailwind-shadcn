import { Button } from "@/components/ui/button";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { number } from "zod";

const page = async ({ params }: { params: { id: string } }) => {
  async function saveCategory(formData: FormData) {
    "use server";

    const formObject = Object.fromEntries(formData);

    // validate data
    if (!formObject.name) {
      throw new Error("Name is required");
    }

    // mutate data
    const prisma = new PrismaClient();
    await prisma.category.update({
      where: { id: parseInt(formObject.id as string) },
      data: { name: formObject.name as string },
    });

    redirect("/categories");
  }

  const  id  = parseInt(params.id);
  const prisma = new PrismaClient();
  const category = await prisma.category.findFirstOrThrow({ where: { id } });

  return (
    <div>
      <div className="flex flex-row w-full">
        <form
          action={saveCategory}
        >
          <input type="hidden" name="id" defaultValue={category.id} />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-w-[300px]"
              id="name"
              name="name"
              type="text"
              placeholder="Category name"
              defaultValue={category.name}
            />
          </div>
          <div className="flex items-center justify-between">
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
