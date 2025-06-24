import Link from "next/link";

export default function Footer(){
    return <footer className="bg-light py-1.5">
        <div className="container">
            <p className="text-center">
                All Right Reserved <Link href={'/'}>Task Manager</Link>
            </p>
        </div>
    </footer>
}