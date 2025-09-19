import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full z-50 sticky top-0 h-20 shadow-sm backdrop-blur-sm'>
    <nav className='max-w-[1340px] mx-auto h-full'>
        {/* large scree */}
        <div className='w-full h-full flex items-center justify-between gap-4'>
            <Link href={`/`} className='text-xl md:text-2xl font-bold text-blue-600'>LemaResume</Link>
            <div className='flex  gap-4 items-center font-[450] h-full'>
                <Link href={`/create-resume`} className='text-slate-600 hover:text-slate-700'>Create Resume</Link>
                <Link href={`/check-resume`} className='text-slate-600 hover:text-slate-700'>Check Resume</Link>

            </div>
        </div>
    </nav>
    </header>
  )
}

export default Navbar