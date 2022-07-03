import React, { useEffect } from 'react'
import Link from 'next/link'
import { useState } from 'react'

function Blog() {
  const [Blog, setBlog] = useState([]);
  useEffect(() => {
    console.log('use effect is working');
    fetch('http://localhost:3000/api/blogs').then((a) => {
      return a.json();
      }).then((parsed)=>{
        console.log(parsed)
        setBlog(parsed)
      })
    },[])
  //     .then((parsed)=>{
  //       console.log(Blog)
  //       setBlog(...Blog,parsed)
  //     })
  // },[])
  return (
    <>
      <div className='flex justify-center'>
        <div className="blog">
          <h2 className='my-2'>Our Latest Posts</h2>

          {Blog.map((blogitem)=>{
            return (<Link href='./blogpost/learn-javascript'>
            <div className="blogItem cursor-pointer my-6" key={blogitem.title}>
              <div>
                <h3 className=''>{blogitem.title}</h3>
                <div>{blogitem.previewContent}</div>
              </div>
            </div>
          </Link>)
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

export default Blog