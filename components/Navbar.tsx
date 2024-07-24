'use client'
import Link from 'next/link'
import Brand from './Brand'
import { usePathname } from 'next/navigation'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { cn } from '@/lib/utils'

type NavbarLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
}

function NavbarLink({ href, children, className, ...props }: NavbarLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={cn(
        'block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-primary-700 md:dark:hover:bg-transparent md:dark:hover:text-primary-500 ',
        pathname === href ? 'text-primary-700' : '',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}

export default function Navbar() {
  return (
    <nav className='fixed start-0 top-0 z-50 h-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        <Brand />
        <div className='flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse'>
          <button
            type='button'
            className='rounded-lg bg-primary-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
          >
            Button
          </button>
          <button
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
            aria-controls='navbar-sticky'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' />
          </button>
        </div>
        <div
          className='hidden w-full items-center justify-between md:order-1 md:flex md:w-auto'
          id='navbar-sticky'
        >
          <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse'>
            <li>
              <NavbarLink href='/'>Home</NavbarLink>
            </li>
            <li>
              <NavbarLink href='#'>About</NavbarLink>
            </li>
            <li>
              <NavbarLink href='#'>Services</NavbarLink>
            </li>
            <li>
              <NavbarLink href='#'>Contact</NavbarLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
