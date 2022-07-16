import React, { useEffect } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';
import { data } from 'autoprefixer';

function Blog(props) {
  const [Blog, setBlog] = useState(props.allBlogs);
  const [Count, setCount] = useState(1)

  const fetchMoreData = async() => {
    let d = await fetch(`/api/blogs/?count=${Count + 2}`);
    setCount(Count + 2)
    data = await d.json();
    setBlog(data)
  };


  
  return (
    <>
      <div className='flex justify-center'>
        <div className="blog">
          <h2 className='my-2'>Our Latest Posts</h2>


          <InfiniteScroll
  dataLength={Blog.length} //This is important field to render the next data
  next={fetchMoreData}
  hasMore={Blog.length !== props.allCount}
  loader={<h4>Loading...</h4>}


  // // below props only if you need pull down functionality


  // refreshFunction={this.refresh}
  // pullDownToRefresh
  // pullDownToRefreshThreshold={50}
  // pullDownToRefreshContent={
  //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
  // }
  // releaseToRefreshContent={
  //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
  // }
>
  {/* {Blog} */}
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
</InfiniteScroll>





        </div>
      </div>
    </>
  )
}

export async function getStaticProps(context) {

  let data = await fs.promises.readdir('blog-posts');
  let allCount = data.length;
  let myFile;
  let allBlogs= [];
  for (let index = 0; index < 2; index++) {
    const item = data[index];
    myFile = await fs.promises.readFile(`blog-posts/${item}`,'utf-8')
    allBlogs.push(JSON.parse(myFile))
  }

  return {
    props: { allBlogs , allCount}, // will be passed to the page component as props
  }
}
export default Blog

