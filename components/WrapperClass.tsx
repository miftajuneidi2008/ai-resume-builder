import { cn } from '@/lib/utils'
import { ClassValue } from 'clsx'
import React from 'react'

type WrapperType = {
    children: React.ReactNode,
    className?: ClassValue,
}
const WrapperClass = ({children,className}:WrapperType) => {
  return (
    <div className={cn('max-w-[1340px] mx-auto', className)}>
        {children}
    </div>
  )
}

export default WrapperClass