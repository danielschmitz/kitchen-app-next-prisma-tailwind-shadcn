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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const getData = async (): Promise<Category[]> => {
  const prisma = new PrismaClient();
  return await prisma.category.findMany();
};

const page = async () => {
  const data = await getData();
  return (
    <div>
      <Table>
        <TableCaption>A list of your categories.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="w-[100px] text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((category) => (
            <TableRow key={category.id}>
              <TableCell className="font-medium">{category.id}</TableCell>
              <TableCell>{category.name}</TableCell>
              <TableCell className="text-right">
                <div className="flex flex-row gap-2">
                  <Button asChild variant="link">
                    <Link href={`/categories/edit/${category.id}`}>Edit</Link>
                  </Button>
                  <Button asChild variant="link">
                    <Link href={`/categories/del/${category.id}`}>Delete</Link>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Button asChild>
        <Link href="/categories/new">New Category</Link>
      </Button>
    </div>
  );
};

export default page;
