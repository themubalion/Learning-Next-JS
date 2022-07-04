import Link from 'next/link'
import { useEffect } from 'react'
import { useState } from 'react'
import * as fs from 'fs'

export default function Home(props) {
  const [Blog, setBlog] = useState(props.allBlogs)
  useEffect(() => {
    fetch('./api/blogs').then((a) => {
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
            <h1 className='font-bold text-4xl mt-8 '>Learning Next JS </h1>
            <div className='my-12 text-lg font-mono'>In this blog I am going to share my progress over next js playlist by harry bhai.</div>
          </div>
          <div className='flex justify-center'>
            <div className="blog">
              <h2>Our Popular Posts</h2>
              {Blog.map((blogitem) => {
                return (
                <div key={blogitem.slug}>
                <Link href={'./blogpost/' + blogitem.slug}>
                  <div className="blogItem cursor-pointer my-6" >
                    <div>
                      <h3 className=''>{blogitem.title}</h3>
                      <div>{blogitem.metadesc}</div>
                    </div>
                    <button className='bg-black text-white my-2 py-1 px-2 rounded-md'>Read More</button>
                  </div>
                </Link>
                </div>)
              }
              )}
            </div>

          </div>
        </main>
      </div>


    </div>
  )
}

export async function getStaticProps(context) {

  let data = await fs.promises.readdir('blog-posts');
  let myFile;
  let allBlogs= [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myFile = await fs.promises.readFile(`blog-posts/${item}`,'utf-8')
    allBlogs.push(JSON.parse(myFile))
  }

  return {
    props: { allBlogs }, // will be passed to the page component as props
  }
}