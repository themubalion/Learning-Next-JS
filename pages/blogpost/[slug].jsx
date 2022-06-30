import React from 'react'
import {useRouter} from 'next/router'
const slug = () => {
    var Router = useRouter();
    const {slug} = (Router.query)
  return (
    <div>
        {slug}
        </div>
  )
}

export default slug