import { signOut } from "@/auth"
import { Button } from "./ui/button"
 
export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut({ redirectTo: "/" })
      }}
    >
      <Button type="submit" size= 'sm' variant='ghost'>Sign Out</Button>
    </form>
  )
}