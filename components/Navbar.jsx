import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='flex justify-center mb-4'>
        <nav className=' flex justify-center'>
        <ul className='flex justify-start w-full font-bold text-center '>
          <Link href="../">
            <a>
            <li className='py-2 px-8 hover:bg-purple-800 hover:text-white' >
              Home
            </li>
            </a>
          </Link>
          <Link href="../about">
            <a>
            <li className=' py-2 px-8 hover:bg-purple-800 hover:text-white' >
              About
            </li>
            </a>
          </Link>
          <Link href="../blog">
            <a>
          <li className=' py-2 px-8 hover:bg-purple-800 hover:text-white' >
            Blog
          </li>
            </a>
          </Link>
          <Link href="../contact">
            <a>
          <li className=' py-2 px-8 hover:bg-purple-800 hover:text-white' >
            Contact
          </li>
            </a>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar