import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    console.log('clicked')
  }
  return (
    <div className=''>
      <nav className='flex justify-between '>
        <div className='font-bold py-2 px-2 text-xl'>
          Mubalion
        </div>
        <ul className='flex justify-end w-full font-bold text-center small:sr-only'>
          <Link href="../">
            <a>
              <li className='py-2 px-8  hover:bg-blue-900 hover:text-white h-full' >
                Home
              </li>
            </a>
          </Link>
          <Link href="about">
            <a>
              <li className=' py-2 px-8  hover:bg-blue-900 hover:text-white h-full' >
                About
              </li>
            </a>
          </Link>
          <Link href="blog">
            <a>
              <li className=' py-2 px-8  hover:bg-blue-900 hover:text-white h-full' >
                Blog
              </li>
            </a>
          </Link>
          <Link href="contact">
            <a>
              <li className=' py-2 px-8  hover:bg-blue-900 hover:text-white h-full' >
                Contact
              </li>
            </a>
          </Link>
        </ul>
        <div className='notSmall:hidden flex justify-end '>
          <FontAwesomeIcon icon={faBars} className="text-2xl hover:bg-blue-900 hover:text-white active:bg-blue-900 active:text-white p-2 h-full" onClick={openNav} />
        </div>
      </nav>
      <div className='notSmall:hidden relative'>
        <div id="mySidenav" className="sidenav h-full w-0 fixed right-0 top-0 z-10 bg-blue-800 overflow-x-hidden transition-all delay-[200ms]">
          <a href="" className='my-2 block text-white ml-8 transition delay-300 text-xl font-bold absolute top-3 right-3' onClick={closeNav}>&times;</a>

          <div className='absolute top-8'>
            <Link href={'../'}>
              <a className='my-2 block text-white ml-8 transition delay-300 text-xl font-bold ' onClick={closeNav}>Home</a></Link>
            <Link href={'about'}>
              <a className='my-2 block text-white ml-8 transition delay-300 text-xl font-bold ' onClick={closeNav}>About</a></Link>
            <Link href={'contact'}>
              <a className='my-2 block text-white ml-8 transition delay-300 text-xl font-bold ' onClick={closeNav}>Contact</a></Link>
            <Link href={'blog'}>
              <a className='my-2 block text-white ml-8 transition delay-300 text-xl font-bold ' onClick={closeNav}>Blog</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar