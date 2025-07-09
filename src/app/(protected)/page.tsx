
import Hero from '@/components/home/Home'
import Navbar from '@/components/home/Navbar'
import TopArticles from '@/components/home/Toparticles'
import React from 'react'


function page() {
  return (
   <>
   <div >
    <Navbar/>
    <Hero/>
    <TopArticles/>
    
   </div>
   </>
  )
}

export default page
