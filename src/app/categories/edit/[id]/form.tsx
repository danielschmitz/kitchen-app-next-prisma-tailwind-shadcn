"use client";

import Submit from "@/components/Submit";
import { useFormState, useFormStatus } from "react-dom";

// Form Errors interface
interface FormErrors {
  name?: string,
}

// FormState interface
interface FormState {
  errors: FormErrors
}

// Define the props that the PostForm component expects
interface UpdateFormProps {
  formAction: any, // The action to perform when the form is submitted
  initialData: { // The initial data for the form fields
      id: number,
      name: string
  },
}

export default function UpdateForm({ formAction, initialData }: UpdateFormProps) {
  const [formState, action] = useFormState<FormState>(formAction, {
    errors: {},
  });
  
  return (
    <form action={action}>
      <input type="hidden" name="id" defaultValue={initialData.id} />
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
          defaultValue={initialData.name}
        />
        {formState.errors.name && (
          <p className="text-red-500 text-xs italic">{formState.errors.name}</p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <Submit>Save</Submit>
      </div>
    </form>
  );
}
