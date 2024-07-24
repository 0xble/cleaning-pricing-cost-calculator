import { cn } from '@/lib/utils'
import Link from 'next/link'
import { NAME } from '@/lib/globals'

type BrandProps = {
  className?: string
}

export default function Brand({ className }: BrandProps) {
  return (
    <Link
      href='/'
      className={cn(
        'flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white',
        className
      )}
    >
      <svg
        width='23.041'
        height='23.041'
        viewBox='0 0 23 23'
        className='mr-2 h-10 w-10 text-primary-700 md:h-12 md:w-12'
      >
        <circle fill='currentColor' cx='11.5205' cy='11.5205' r='11.5205' />
      </svg>
      {NAME}
    </Link>
  )
}
