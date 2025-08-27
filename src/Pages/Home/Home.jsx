import React from 'react'
import './home.css'
import Sidebar from '../../Layout/Sidebar/Sidebar'
import ProductList from '../../components/ProductList/ProductList'

function Home() {
  
  
  return (
    <div className='container'>
      <Sidebar />
      <ProductList />
    </div>
  )
}

export default Home