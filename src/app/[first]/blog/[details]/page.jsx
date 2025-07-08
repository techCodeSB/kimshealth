import BlogDetails from '@/app/blog/[details]/page'
import React from 'react'

const Page = ({params}) => {
  return <BlogDetails params={params}/>
}

export default Page