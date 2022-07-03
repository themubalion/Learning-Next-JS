import React from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { useEffect } from 'react';

const Slug = () => {
  var Router = useRouter();
  const [Blog, setBlog] = useState([])
  useEffect(() => {
    if(!Router.isReady) return;
    else{

      const {slug} = (Router.query)
      fetch(`../api/getblogs?slug=${slug}`).then((a) => {
        return a.json();
      }).then((parsed) => {
        setBlog(parsed)
      })
    }
  }, [Router.isReady])
  return (
    <div className='my-8'>

      <div className='text-center my-4 max-w-[60%] mx-auto'>
        <h1 className='text-4xl font-bold my-4'>
          {Blog && Blog.title}
        </h1>

        <hr className='my-4' />
        
        <p className='my-4'>{Blog && Blog.content}</p>
      </div>

    </div>
  )
}

export default Slug