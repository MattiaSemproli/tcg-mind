import Link from "next/link"

export default function NavBar() {
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
                    <Link href="/api/auth/signin" className="text-white hover:underline">Login</Link>
                    <Link href="/api/auth/signout" className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    )
}