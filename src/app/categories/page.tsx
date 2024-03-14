import { Category, PrismaClient } from "@prisma/client";
import Link from "next/link";

export const getData = async (): Promise<Category[]> => {
  const prisma = new PrismaClient();
  return await prisma.category.findMany();
};

const page = async () => {
  const data = await getData();
  return (
    <div>
      <ul>
        {data.map((category) => (
          <li key={category.id}>
            <Link href={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <Link href="/categories/new">create new</Link>
    </div>
  );
};

export default page;
