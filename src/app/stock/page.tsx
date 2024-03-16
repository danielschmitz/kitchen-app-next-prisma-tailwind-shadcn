import Link from "next/link";

export default function Page({params}:any) {

    return (
        <div>
            <Link href="/stock/new">
                New Stock
            </Link>
        </div>
    );
};
