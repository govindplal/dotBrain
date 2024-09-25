"use client"
import { Button } from "./ui/button"
import { signout } from "@/lib/actions"
 
export function SignOut() {
  const handleSignOut = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission
    await signout(); // Call the signout function
  };

  return (
    <form onSubmit={handleSignOut}>
      <Button type="submit" size='sm' variant='ghost'>Sign Out</Button>
    </form>
  );
}