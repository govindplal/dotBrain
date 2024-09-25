import { auth } from '@/auth'
import { SignOut } from '@/components/signout'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default async function home() {
    const session = await auth()
    console.log(session?.user)
    console.log(session?.user?.image)
    const dp = session?.user?.image
    if(!session?.user)
        return(
            <div className='flex absolute bg-gradient-to-r from-blue-200 to-blue-50 h-screen w-screen items-center justify-center font-bold text-2xl'>
                You should log in to use the platform. We're working on improving the product to allow usage without signing in
                
            </div>
        )
  return (
    <div>
        <nav className="flex justify-between items-center py-4 px-16 bg-transparent">
        <div>
          <h1 className="text-2xl font-bold text-black">dotBrain</h1>
        </div>
        <div>
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar className='h-8 w-8'>
                    <AvatarImage src={dp ?? undefined} />
                    <AvatarFallback><Skeleton className="w-[30px] h-[30px] rounded-full" />
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><SignOut/></DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </div>
      </nav>
      <div>
        
      </div>
    </div>
  )
}