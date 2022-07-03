import React from 'react'
import { useRouter } from 'next/router'
const slug = () => {
  var Router = useRouter();
  const { slug } = (Router.query)
  return (
    <div className='my-8'>

      <div className='text-center my-4 max-w-[60%] mx-auto'>
        <h1 className='text-4xl font-bold my-4'>
          Title of the post is {slug}
        </h1>

        <hr className='my-4' />
        
        <p className='my-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora consectetur nam architecto? Sit adipisci sapiente, sequi ipsum doloremque odio temporibus dolores laudantium? Facere exercitationem voluptate officiis natus tempora vitae accusamus totam, cumque iure sed, ad consequatur, at commodi repellendus nulla dolore et expedita a recusandae similique rerum. Cupiditate quaerat quis animi a laboriosam doloremque repellat!</p>
      </div>

    </div>
  )
}

export default slug