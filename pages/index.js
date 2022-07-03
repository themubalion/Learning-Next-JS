import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="relative">

      <div className='flex justify-center'>
        <main className='max-w-[95vw]'>

          <div className='text-center'>
            <h1 className='font-bold text-4xl mt-8 '>Learning Next JS </h1>
            <div className='my-12 text-lg font-mono'>In this blog I am going to share my progress over next js playlist by harry bhai.</div>
          </div>
          <div className='flex justify-center'>
            <div className="blog">
              <h2>Our Popular Posts</h2>
              <div>
                <div className="blogItem">
                  <h3 className=''>How to learn JavaScript in 2022?</h3>
                  <p>JavaScript is a language used to design logic for your website</p>
                </div>

                <div className="blogItem">
                  <h3 className=''>How to learn JavaScript in 2022?</h3>
                  <p>JavaScript is a language used to design logic for your website</p>
                </div>
              </div>

              <div className="blogItem">
                <h3 className=''>How to learn JavaScript in 2022?</h3>
                <p>JavaScript is a language used to design logic for your website</p>
              </div>
            </div>

          </div>
        </main>
      </div>


    </div>
  )
}
