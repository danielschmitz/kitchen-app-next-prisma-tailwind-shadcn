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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react";

export default async function page() {
  const prisma = new PrismaClient();
  const products = await prisma.product.findMany({
    include: { category: true },
  });

  return (
    <div>
      <Table>
        <TableCaption>A list of your products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="w-[100px] text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="w-full">{product.name}</TableCell>
              <TableCell>{product.category.name}</TableCell>
              <TableCell className="text-center">
              <div className="hidden md:flex flex-row gap-2">
                  <Button asChild variant="link">
                    <Link href={`/products/edit/${product.id}`}>Edit</Link>
                  </Button>
                  <Button asChild variant="link">
                    <Link href={`/products/del/${product.id}`}>Delete</Link>
                  </Button>
                </div>
                <div className="md:hidden">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem><Link href={`/products/edit/${product.id}`}>Edit</Link></DropdownMenuItem>
                      <DropdownMenuItem><Link href={`/products/del/${product.id}`}>Delete</Link></DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
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
}
