"use client"
import { Button } from "./ui/button"
import Image from "next/image"
import { signin } from "@/lib/actions"

export default function SignIn() {
  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission
    await signin(); // Call the signin function
  };

  return (
    <form onSubmit={handleSignIn}>
      <Button 
          variant="ghost" size="sm"
          className="w-full items-center justify-start"
          type="submit"
      >
          <Image src="/google.png" alt="Google" width={15} height={15} className="mr-2" />
          Continue with Google
      </Button>
    </form>
  );
}