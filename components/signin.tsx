import { signIn } from "@/auth"
import { Button } from "./ui/button"
import Image from "next/image"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google", { redirectTo: "/home" })
      }}
    >
        <Button 
            variant="ghost" size="sm"
            className="w-full items-center justify-start"
            type="submit"
        >
            <Image src="/google.png" alt="Google" width={15} height={15} className="mr-2" />
            Continue with Google
        </Button>

    </form>
  )
} 