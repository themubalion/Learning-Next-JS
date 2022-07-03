import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <footer className='absolute bottom-0 w-full h-30 bg-purple-800'>
            <div className='max-w-[90vw] mx-auto flex justify-center'>
                <div className='flex text-white underline'>
                    <Link href='./'>
                        <span className='cursor-pointer my-3 mr-8'>
                            Home
                        </span>
                    </Link>
                    <Link href='./about'>
                        <span className='cursor-pointer my-3 mr-8'>
                            About
                        </span>
                    </Link>
                    <Link href='./blog'>
                        <span className='cursor-pointer my-3 mr-8'>
                            Blog
                        </span>
                    </Link>
                    <Link href='./contact'>
                        <span className='cursor-pointer my-3 mr-8'>
                            Contact
                        </span>
                    </Link>
                </div>
            </div>
            <div className='max-w-[90vw] mx-auto flex justify-center'>
                <div className='font-semibold text-white mb-2'>
                    Copyright &copy; 2022
                </div>
            </div>
            <div className='max-w-[90vw] mx-auto flex justify-center'>
                <div className='font-semibold text-white mb-2'>
                    Made by Muhammad Mubashshir Ali
                </div>
            </div>
        </footer>
    )
}

export default Footer