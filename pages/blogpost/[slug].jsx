import React from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { useEffect } from 'react';

const Slug = (props) => {
  const [Blog, setBlog] = useState(props.blogData)

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

export async function getServerSideProps(context) {
  // var Router = useRouter();
  // if (!Router.isReady) return;
  // const { slug } = (Router.query)

  console.log(context.req)

  let newData = await fetch(`http://localhost:3000/api/getblogs?slug=${context.query.slug}`)
  let blogData = await newData.json()

  return {
    props: { blogData }, // will be passed to the page component as props
  }
}


export default Slug