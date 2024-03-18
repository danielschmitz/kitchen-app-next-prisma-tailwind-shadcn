"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormState } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Category, Product } from "@prisma/client";
import { CategoryWithProducts } from "./actions";

interface FormProps {
  categoriesWithProducts?: CategoryWithProducts[];
  initialData?: any;
  action: any;
}

const FormSchema = z.object({
  id: z.string().optional(),
  productId: z.string(),
  price: z.coerce.number(),
  expires: z.date(),
  quantity: z.coerce.number(),
});

export default function StockForm({
  categoriesWithProducts,
  initialData,
  action,
}: FormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: initialData?.id,
      productId: initialData?.productId,
      price: initialData?.price || 1.0,
      expires: initialData?.expires || new Date(),
      quantity: initialData?.quantity || 1,
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true);
    if (action) {
      await action(data);
    }
    setIsSubmitting(false);
  }
  
  return (
    <Form {...form}>
      <div className="text-md mb-5">Add Product to Stock</div>
      <div className="m-5">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="productId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product:</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a product" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    {categoriesWithProducts && categoriesWithProducts.map((category: CategoryWithProducts) => {
                      return ( 
                        <SelectGroup key={category.id}>
                          <SelectLabel className="bg-secondary">
                            {category.name}
                          </SelectLabel>
                          {category.products.map((product: Product) => (
                            <SelectItem key={product.id} value={product.id}>
                              {product.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      );
                    })}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Price:</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormDescription>Insert the product price</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Quantity:</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormDescription>How many items of this product will be added to stock?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="expires"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Expires At:</FormLabel>
                <br />
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Save"}
          </Button>
        </form>
      </div>
    </Form>
  );
}
