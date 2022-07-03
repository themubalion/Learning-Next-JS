import Link from 'next/link'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Home() {
  const [Blog, setBlog] = useState([])
  useEffect(() => {
    fetch('../api/blogs').then((a) => {
      return a.json();
    }).then((parsed) => {
      //Checking if it gets the thing
      // console.log(parsed)

      setBlog(parsed)

    })
  }, [])
  return (
    <div className="relative">

      <div className='flex justify-center'>
        <main className='max-w-[95vw]'>

          <div className='text-center'>
            <h1 className='font-bold text-4xl '>Learning Next JS </h1>
            <div className='my-12 text-lg font-mono'>In this blog I am going to share my progress over next js playlist by harry bhai.</div>
          </div>
            <hr className='bg-black border-0 h-1 w-full absolute left-0' />
          <div className='flex justify-center mt-8'>
            <div className="blog flex flex-col items-center mt-8">
              <h2>Our Popular Posts</h2>
              <div className=''>
                {Blog.map((blogitem) => {
                  return (<Link href={'../blogpost/' + blogitem.slug}>
                    <div className="blogItem cursor-pointer my-6" key={blogitem.slug}>
                      <div>
                        <h3 className=''>{blogitem.title}</h3>
                        <div>{blogitem.previewContent}</div>
                      </div>
                      <button className='bg-black text-white my-2 py-1 px-2 rounded-md'>Read More</button>
                    </div>
                  </Link>)
                }
                )}
              </div>
            </div>

          </div>
        </main>
      </div>


    </div>
  )
}
