import React from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { useEffect } from 'react';
import * as fs from 'fs';
import { data } from 'autoprefixer';

const Slug = (props) => {
  const [Blog, setBlog] = useState(props.data)
  console.log(Blog)
  function createMarkup(h){
    return{__html:h}
  }

  return (
    <div className='my-8'>

      <div className='text-center my-4 max-w-[60%] mx-auto'>
        <h1 className='text-4xl font-bold my-4'>
          {Blog && Blog[0].title}
        </h1>

        <hr className='my-4' />

        <div className='my-4 text-xl'>
          {Blog &&<div dangerouslySetInnerHTML={createMarkup(Blog[0].content)} />}
          </div>
      </div>

    </div>
  )
}

export async function getServerSideProps(context) {
  
  // console.log(context)

  // Fetch data from external API

  let data = []

  let filedata = await fs.promises.readFile(`blog-posts/${context.query.slug}.json`,'utf-8')
  data.push(JSON.parse(filedata))
  console.log(data)


  // Pass data to the page via props
  return { props: { data } }
}


export default Slug