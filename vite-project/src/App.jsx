import { useState } from 'react';
import {Routes, Route } from 'react-router-dom';

import Header from './components/Header'

import AboutMe from './pages/About';
import ContactMe from './pages/Contact';
import HomePage from './pages/Home';

function App() {
  const title = 'My Portfolio'
  const [page, setPage] = useState('Home')


   const renderPage = (pageName) => {
    switch(pageName) {
      case 'Home':
        return <HomePage/>
      case 'About':
        return <AboutMe/>
      case 'Contact':
        return <ContactMe/>
    }
   }




  return (
    <>
    <Header title={title} setPage={setPage}/>

    {renderPage(page)}

    {/* <button onClick={handleClick}>See Projects</button> */}
  </>
  )
}

export default App

// const handleClick = (event) => {
//   console.log(event)
//   console.log('event')
// }