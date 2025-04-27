import { AuthContext } from '@/context/auth-context'
import React, { useContext } from 'react'
import { Button } from '../ui/button'
import { User, LogOut } from 'lucide-react'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Separator } from '../ui/separator'

const CommonHeader = () => {
  const { resetCredentials, auth } = useContext(AuthContext)

  const handleLogout = () => {
    resetCredentials()
    sessionStorage.clear()
  }

  return (
    <header className='p-4 md:px-6 flex items-center justify-between border-b shadow-sm bg-white sticky top-0 z-10'>
      <div className='flex items-center gap-3'>
        <div className='bg-primary/10 p-2 rounded-full'>
          <User className='h-5 w-5 text-primary' />
        </div>
        <h1 className='text-lg font-semibold'>Blog Platform</h1>
      </div>

      <div className='flex items-center gap-4'>
        {auth?.authenticate && (
          <div className='hidden md:flex items-center gap-2'>
            <Avatar className='h-8 w-8 bg-primary/10'>
              <AvatarFallback className='text-primary font-medium'>
                {auth.user?.userName?.charAt(0).toUpperCase() || 'U'}
              </AvatarFallback>
            </Avatar>
            <span className='font-medium'>{auth.user?.userName || 'User'}</span>
          </div>
        )}
        
        <Separator orientation="vertical" className='h-6 hidden md:block' />
        
        <Button
          className="text-sm gap-2"
          variant="outline"
          onClick={handleLogout}
        >
          <LogOut className='h-4 w-4' />
          <span>Logout</span>
        </Button>
      </div>
    </header>
  )
}

export default CommonHeader