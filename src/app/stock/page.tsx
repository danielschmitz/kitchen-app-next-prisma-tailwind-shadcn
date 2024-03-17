import Link from "next/link";
import DataTableStock from "./DataTableStock";
import { FindStock } from "./actions";

export default async function Page({params}:any) {

    const data = await FindStock();

    return (
        <div>
            <Link href="/stock/new">
                New Stock
            </Link>
            <DataTableStock data={data} />
        </div>
    );
};
