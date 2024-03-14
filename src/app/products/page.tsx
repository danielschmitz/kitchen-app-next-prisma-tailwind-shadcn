import { product, PrismaClient, Product } from "@prisma/client";
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

export const getData = async (): Promise<Product[]> => {
  const prisma = new PrismaClient();
  return await prisma.product.findMany();
};

const page = async () => {
  const data = await getData();
  return (
    <div>
      <Table>
        <TableCaption>A list of your products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="w-[100px] text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell className="text-right">
                <div className="flex flex-row gap-2">
                  <Button asChild variant="link">
                    <Link href={`/products/edit/${product.id}`}>Edit</Link>
                  </Button>
                  <Button asChild variant="link">
                    <Link href={`/products/del/${product.id}`}>Delete</Link>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Button asChild>
        <Link href="/products/new">New product</Link>
      </Button>
    </div>
  );
};

export default page;
