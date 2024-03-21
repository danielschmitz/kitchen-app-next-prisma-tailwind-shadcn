import Submit from '@/app/categories/Submit'
import { PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation'

export default async function page() {
  async function createCategory(formData: FormData) {
    'use server'

    const formObject = Object.fromEntries(formData)

    if (!formObject.name) {
      throw new Error('Name is required')
    }

    const prisma = new PrismaClient()
    await prisma.category.create({
      data: {
        name: formObject.name as string
      }
    })

    redirect('/categories')
  }
  return (
    <div>
      <div className="flex flex-row w-full">
        <form action={createCategory}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-w-[300px]"
              id="name"
              name="name"
              type="text"
              placeholder="Category name"
            />
          </div>
          <div className="flex items-center justify-between">
            <Submit>Save</Submit>
          </div>
        </form>
      </div>
    </div>
  )
}
