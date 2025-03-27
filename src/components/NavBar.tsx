import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options"
import Link from "next/link"
import LoggedNavBar from "./LoggedNavBar"

export default async function NavBar() {
    const session = await getServerSession(options)
    
    return (
        <nav className="p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-2xl font-bold">
                    <Link href="/">TCG-MIND!</Link>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-6 text-white text-lg font-medium">
                    <li><Link href="/server">Server</Link></li>
                    <li><Link href="/client">Client</Link></li>
                    <li><Link href="/extra">Extra</Link></li>
                </ul>

                {/* Actions */}
                <div className="flex items-center space-x-4">
                    {session?.user ? (
                        <LoggedNavBar />
                    ) : (
                        <Link href="/sign-in" className="text-white hover:underline">Login</Link>
                    )}
                    <Link href="/sign-up" className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    )
}