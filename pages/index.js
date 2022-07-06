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
    <div className='relative'>
      <div className="bg-titleBG bg-cover">
        <div className='bg-gray-800 bg-opacity-80'>
      <div className='text-center text-white '>
              <h1 className='font-bold text-4xl pt-4'>Learning Next JS </h1>
              <div className=' py-4 text-lg font-mono'>In this blog I am going to share my progress over next js playlist by harry bhai.</div>
            </div>
            <div className='flex small:justify-center justify-start notSmall:pl-12'>
          <main className='max-w-[95vw]'>

            <div className='flex justify-start'>
              <div className="blog border-gray-600 border-[2px] mb-8 p-8 rounded-md bg-gray-300 notSmall:w-[50vw]">
                <h2>Our Popular Posts</h2>
                {Blog.map((blogitem) => {
                  return (
                    <div key={blogitem.slug} className=" ">
                      <Link href={'./blogpost/' + blogitem.slug}>
                        <div className="blogItem cursor-pointer bg-gray-400 bg-opacity-60 rounded-md p-4 my-2" >
                          <div>
                            <h3 className=''>{blogitem.title}</h3>
                            <div>{blogitem.metadesc}</div>
                          </div>
                          <button className='bg-blue-800 text-white mt-2 py-1 px-2 rounded-md'>Read More</button>
                        </div>
                      </Link>
                    </div>)
                }
                )}
                <Link href={'/blog'}>
                  <button className='ml-4 font-bold bg-black text-white py-1 px-2 rounded-md'>Show All</button>
                </Link>
              </div>

            </div>
          </main>
          </div>
        </div>
      </div>

        

      
    </div>
  )
}

export async function getStaticProps(context) {

  let data = await fs.promises.readdir('blog-posts');
  let myFile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myFile = await fs.promises.readFile(`blog-posts/${item}`, 'utf-8')
    allBlogs.push(JSON.parse(myFile))
  }

  return {
    props: { allBlogs }, // will be passed to the page component as props
  }
}