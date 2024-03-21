'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, useFormState } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

interface UpdateFormProps {
  categories?: any
  initialData?: any
  action: any
}

const FormSchema = z.object({
  id: z.string().optional(),
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.'
    })
    .max(50, {
      message: 'Name must be less than 50 characters.'
    }),
  supplier: z.string().optional(),
  categoryId: z.string()
})

export default function ProductForm({ categories, initialData, action }: UpdateFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: initialData?.id,
      name: initialData?.name,
      supplier: initialData?.supplier,
      categoryId: initialData?.categoryId
    }
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true)
    if (action) {
      await action(data)
    }
    setIsSubmitting(false)
  }
  return (
    <Form {...form}>
      <div className="text-md mb-5">Create product</div>
      <div className="m-5">
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Product Name" {...field} />
                </FormControl>
                <FormDescription>Insert the product name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="supplier"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Supplier</FormLabel>
                <FormControl>
                  <Input placeholder="Product Supplier" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select onValueChange={field.onChange} {...field}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((category: any) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Save'}
          </Button>
        </form>
      </div>
    </Form>
  )
}
