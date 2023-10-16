import { useState } from 'react'
import Navbar from './components/Navbar'
import Aside from './components/Aside';
import CardList from './components/CardList';
import Footer from './components/Footer';
import './App.css'


function App (){
  
  return (
    <div className='page'>
      <Navbar/>
      <Aside/>
      <CardList/>
      <Footer/>
    </div>
  )
}
export default App
