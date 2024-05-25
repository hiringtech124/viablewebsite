import Catalog from '@/components/articles/catalogue/Catalog'
import Header from '@/components/articles/header/Header'
import Material from '@/components/articles/materials/Material'
import React from 'react'

function Home() {
  return (
    <>
        <Header/>
        <Material/>
        <Catalog/>
    </>
  )
}

export default Home