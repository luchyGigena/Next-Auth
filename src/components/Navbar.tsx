'use client'
import Link from 'next/link'
import {signIn ,signOut, useSession} from 'next-auth/react'


function NavBar(){
   const {data:session} = useSession()

   
    return(
       <nav className='bg-slate-900 flex items-center py-3 justify-between px-40 text-white'>
        <Link href='/'>
        <h1>NextLuchy</h1>
        </Link>
        
        {session?.user ? (
               <div className='flex gap-x-2 items-center'>
               <Link href='/dashboard'>
                   Dashaboard
               </Link>
               <p>{session.user.name} {session.user.email}</p>
               <img src={session.user.image} alt='' className='w-10 h-10 rounded-full cursor-pointer'/>
                <button onClick={async ()=> await  signOut({callbackUrl: '/'})} className='bg-red-400 px-3 py-2 rounded'>
                    LogOut
                </button>
           </div>
        ): (
            <button onClick={()=> signIn()} className='bg-sky-400 px-3 py-2 rounded'>
            Sign In
        </button>
        ) }
       </nav>
       
    )
}

export default NavBar