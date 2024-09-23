import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import SignIn from '@/components/signin'

const Landing = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-50 h-screen">
      <nav className="flex justify-between items-center py-4 px-16 bg-transparent">
        <div>
          <h1 className="text-2xl font-bold text-black">dotBrain</h1>
        </div>
        <div>
        <Dialog>
          <DialogTrigger asChild><Button>Login</Button></DialogTrigger>
          <DialogContent className="bg-white">
            <DialogHeader className="items-center justify-center">
              <DialogTitle>Login to dotBrain</DialogTitle>
            </DialogHeader>
            <SignIn/>
          </DialogContent>
          </Dialog>

          
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center mt-40">
        <h1 className="text-4xl font-bold text-black">THINK. CREATE. GROW</h1>
      </div>
    </div>
  )
}

export default Landing