import { Category, PrismaClient } from "@prisma/client";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const getData = async (): Promise<Category[]> => {
  const prisma = new PrismaClient();
  return await prisma.category.findMany();
};

const page = async () => {
  const data = await getData();
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
          <CardDescription>List Categories</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            <ul>
              {data.map((category) => (
                <li key={category.id}>
                  <Link href={`/categories/${category.id}`}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </p>
        </CardContent>
        <CardFooter>
          <Link href="/categories/new">
            <Button>create new</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
