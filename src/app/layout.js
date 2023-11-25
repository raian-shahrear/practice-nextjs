import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js Practice',
  description: '',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='w-6/12 mx-auto py-3'>
          <ul className='flex justify-center gap-16'>
            <li>
              <a href='#' className='hover:text-teal-600 duration-300 transition-all ease-linear'>Home</a>
            </li>
            <li>
              <a href='#' className='hover:text-teal-600 duration-300 transition-all ease-linear'>Blog</a>
            </li>
            <li>
              <a href='#' className='hover:text-teal-600 duration-300 transition-all ease-linear'>Contact</a>
            </li>
          </ul>
        </nav>
        <div>
          {children}
        </div>
        <footer>
          <p className='text-center'>&copy; Copyright 2023, All right reserved</p>
        </footer>
      </body>
    </html>
  )
}

export default RootLayout;