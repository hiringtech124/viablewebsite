import Blog from '@/components/about-us/blogs/Blog'
import Founder from '@/components/about-us/founder/Founder'
import Story from '@/components/about-us/story/Story'
import WalkHistory from '@/components/about-us/walkHistory/WalkHistory'
import React from 'react'

function Home() {
  return (
    <>
        <Story/>
        <Blog/>
        <WalkHistory/>
        <Founder/>
    </>
  )
}

export default Home