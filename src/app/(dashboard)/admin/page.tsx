import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options"

const page = async () => {
    const session = await getServerSession(options)
    
    if(session?.user) {
        return <h2 className="text-2xl">Admin page - welcome back {session?.user.username}</h2>
    }

    return <h2 className="text-2xl">Admin page - please login to see this page!</h2>
}

export default page