import React, { useEffect } from 'react'
import Link from 'next/link'
import { useState } from 'react'

function Blog(props) {
  console.log(props)
  const [Blog, setBlog] = useState(props.allBlogs);
  return (
    <>
      <div className='flex justify-center'>
        <div className="blog">
          <h2 className='my-2'>Our Latest Posts</h2>

          {Blog.map((blogitem)=>{
            return (<div key={blogitem.slug}>
            <Link href={'./blogpost/'+blogitem.slug}>
            <div className="blogItem cursor-pointer my-6">
              <div>
                <h3 className=''>{blogitem.title}</h3>
                <div>{blogitem.previewContent}</div>
              </div>
              <button className='bg-black text-white my-2 py-1 px-2 rounded-md'>Read More</button>
            </div>
          </Link>
          </div>
          )
          }
          )}

          <div>
            {/* <Link href='./blogpost/learn-javascript'>
              <div className="blogItem cursor-pointer my-6">
                <div>
                  <h3 className=''>How to learn JavaScript in 2022?</h3>
                  <p>JavaScript is a language used to design logic for your website</p>
                </div>
              </div>
            </Link>

            <Link href='./blogpost/learn-javascript'>
              <div className="blogItem cursor-pointer my-6">
                <div>
                  <h3 className=''>How to learn JavaScript in 2022?</h3>
                  <p>JavaScript is a language used to design logic for your website</p>
                </div>
              </div>
            </Link>

            <Link href='./blogpost/learn-javascript'>
              <div className="blogItem cursor-pointer my-6">
                <div>
                  <h3 className=''>How to learn JavaScript in 2022?</h3>
                  <p>JavaScript is a language used to design logic for your website</p>
                </div>
              </div>
            </Link> */}
          </div>

        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  let newData = await fetch('http://localhost:3000/api/blogs')
  let allBlogs = await newData.json();

  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}
export default Blog

