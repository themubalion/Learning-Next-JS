import React, { useEffect } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import * as fs from 'fs';

function Blog(props) {


  const [Blog, setBlog] = useState(props.allBlogs);
  return (
    <>
      <div className='flex justify-center'>
        <div className="blog">
          <h2 className='my-2'>Our Latest Posts</h2>

          {Blog.map((blogitem) => {
            return (<div key={blogitem.slug}>
              <Link href={'./blogpost/' + blogitem.slug}>
                <div className="blogItem cursor-pointer my-6">
                  <div>
                    <h3 className=''>{blogitem.title}</h3>
                    <div>{blogitem.metadesc}</div>
                  </div>
                  <button className='bg-black text-white my-2 py-1 px-2 rounded-md'>Read More</button>
                </div>
              </Link>
            </div>
            )
          }
          )}


        </div>
      </div>
    </>
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
export default Blog

