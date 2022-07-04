import React from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { useEffect } from 'react';
import * as fs from 'fs';

const Slug = (props) => {
  const [Blog, setBlog] = useState(props.blogData)
  function createMarkup(h){
    return{__html:h}
  }

  return (
    <div className='my-8'>

      <div className='text-center my-4 max-w-[60%] mx-auto'>
        <h1 className='text-4xl font-bold my-4'>
          {Blog && Blog.title}
        </h1>

        <hr className='my-4' />

        <div className='my-4 text-xl'>
          {Blog &&<div dangerouslySetInnerHTML={createMarkup(Blog.content)} />}
          </div>
      </div>

    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug:"Learn-NodeJS" } },
      { params: { slug:"learnJavascript" } }
    ],
    fallback: true // false or 'blocking'
  };
}


export async function getStaticProps(context) {

  let {slug} =  context.params;

  let a = await fs.promises.readFile(`./blog-posts/${slug}.json`,'utf-8',
    )
  let blogData =  await JSON.parse(a)

  return {
    props: { blogData }, // will be passed to the page component as props
  }
}


export default Slug