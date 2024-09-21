import React from 'react'
import { Button } from '@/components/ui/button'
const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-50 h-screen">
      <nav className="flex justify-between items-center py-4 px-16 bg-transparent">
        <div>
          <h1 className="text-2xl font-bold text-black">dotBrain</h1>
        </div>
        <div>
          <Button>Login</Button>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center mt-40">
        <h1 className="text-4xl font-bold text-black">THINK. CREATE. GROW</h1>
      </div>
    </div>
  )
}

export default Home