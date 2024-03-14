'use client'

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function Submit({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const status = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={status.pending}
      aria-disabled={status.pending}
    >
      {children}
    </Button>
  );
}
