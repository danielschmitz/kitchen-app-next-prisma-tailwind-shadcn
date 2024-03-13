import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Topheader = (props: any) => {
  return (
    <div className="bg-black text-slate-50 font-semibold text-lg p-5 shadow-lg flex flex-row justify-between items-center">
      <h1>{props.title}</h1>
      <div className="flex flex-row gap-2">
        <Link href="/">
          <Button variant="secondary">Home</Button>
        </Link>
        <Link href="/categories">
          <Button variant="secondary">Categories</Button>
        </Link>
        <Link href="/suppliers">
          <Button variant="secondary">Suppliers</Button>
        </Link>
      </div>
    </div>
  );
};

export default Topheader;
