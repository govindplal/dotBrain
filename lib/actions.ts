'use server'
import { signIn ,signOut } from "@/auth"
export async function signout() {
    await signOut({ redirectTo: "/" })
}
export async function signin() {
    await signIn("google", { redirectTo: "/home" })
}
