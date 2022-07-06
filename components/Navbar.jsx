import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className=''>
      <nav className='flex justify-between '>
        <div className='font-bold py-2 px-2 text-xl'>
          Mubalion
        </div>
        <ul className='flex justify-end w-full font-bold text-center small:sr-only'>
          <Link href="../">
            <a>
              <li className='py-2 px-8 hover:bg-blue-900 hover:text-white h-full' >
                Home
              </li>
            </a>
          </Link>
          <Link href="about">
            <a>
              <li className=' py-2 px-8 hover:bg-blue-900 hover:text-white h-full' >
                About
              </li>
            </a>
          </Link>
          <Link href="blog">
            <a>
              <li className=' py-2 px-8 hover:bg-blue-900 hover:text-white h-full' >
                Blog
              </li>
            </a>
          </Link>
          <Link href="contact">
            <a>
              <li className=' py-2 px-8 hover:bg-blue-900 hover:text-white h-full' >
                Contact
              </li>
            </a>
          </Link>
        </ul>
        <div className='notSmall:sr-only flex justify-end '>
          <FontAwesomeIcon icon={faBars} className="text-2xl hover:bg-blue-900 hover:text-white active:bg-blue-900 active:text-white p-2 h-full transition" />
        </div>
      </nav>
    </div>
  )
}

export default Navbar