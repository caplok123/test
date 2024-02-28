import { useState } from 'react'
import './App.css'
import Header from './Header/Header.jsx'
import Above from './Above/Above.jsx'
import Page from './Page/Page.jsx'
import Pagination from './Pagination/Pagination.jsx'
import Footer from './Footer/Footer.jsx'






function App() {


  return (
    <>
      <Header />
      <Above />
      <Page />
      <Pagination totalPages={3} />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  )
}

export default App
