import Link from "next/link";



const page = () => {
    return (
        <div>
            categories list
            <br/><br/>
            <Link href="/categories/new">create new</Link>
        </div>
    );
}

export default page