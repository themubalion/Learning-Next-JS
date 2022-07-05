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
        <div className='font-bold py-2 px-8 text-xl'>
          Mubalion
        </div>
        <ul className='flex justify-end w-full font-bold text-center small:sr-only'>
          <Link href="../">
            <a>
              <li className='py-2 px-8 hover:bg-blue-900 hover:text-white' >
                Home
              </li>
            </a>
          </Link>
          <Link href="about">
            <a>
              <li className=' py-2 px-8 hover:bg-blue-900 hover:text-white' >
                About
              </li>
            </a>
          </Link>
          <Link href="blog">
            <a>
              <li className=' py-2 px-8 hover:bg-blue-900 hover:text-white' >
                Blog
              </li>
            </a>
          </Link>
          <Link href="contact">
            <a>
              <li className=' py-2 px-8 hover:bg-blue-900 hover:text-white' >
                Contact
              </li>
            </a>
          </Link>
        </ul>
        <div className='notSmall:sr-only flex justify-end '>
          <FontAwesomeIcon icon={faBars} className="text-2xl hover:bg-purple-800 hover:text-white p-2" />
        </div>
      </nav>
    </div>
  )
}

export default Navbar