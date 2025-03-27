import { db } from '@/lib/db'
import { NextResponse } from 'next/server'
import { hash } from 'bcrypt'
import * as z from 'zod'

// Define schema for input validation
const userSchema = z
    .object({
        username: z.string().min(1, "Username is required").max(100),
        email: z.string().min(1, "Email is required").email("Invalid email"),
        password: z
            .string()
            .min(1, "Password is required")
            .min(8, "Password must be at least 8 characters long"), 
    })

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { email, username, password } = userSchema.parse(body)
        
        // Check if an email is already in use
        const existingUserByEmail = await db.user.findUnique({
            where: { email: email }
        })

        if (existingUserByEmail) {
            return NextResponse.json({ 
                user: null, 
                error: "Email already in use" 
            }, { status: 409 })
        }

        // Check if a username already exists
        const existingUserByUsername = await db.user.findUnique({
            where: { username: username }
        })

        if (existingUserByUsername) {
            return NextResponse.json({ 
                user: null, 
                error: "Username already exists" 
            }, { status: 409 })
        }
        
        // Create the user
        const hashedPassword = await hash(password, 10)
        const newUser = await db.user.create({
            data: {
                email,
                username,
                password: hashedPassword
            }
        })
        const { password: newUserPassword, ...rest } = newUser

        return NextResponse.json({ 
            user: newUser, 
            message: "User created successfully" 
        }, { status: 201 })
        
    } catch (error) {
        return NextResponse.json({
            message: "An error occurred while creating the user",
        }, { status: 500 })
    }
}