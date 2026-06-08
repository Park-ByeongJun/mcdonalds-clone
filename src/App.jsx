import { useState, useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'

import Lottie from "lottie-react";
import Intro from './pages/intro'
import Home from './pages/Home'
import Header from './pages/Header'
import Footer from './pages/Footer'
import NewOpen from './pages/New'
import NewMenu from './pages/NewMenu'
import NewNotice from './pages/NewNotice'
import MenuBurger from './pages/MenuBurger'
import MenuSides from './pages/MenuSides'
import MenuDrink from './pages/MenuDrink'
import EventEvent from './pages/Event'
import EventCoupon from './pages/EventCoupon'
import OneToOne from './pages/OneToOne';
import Qna from './pages/Qna';
import QnaQuestion from './pages/QnaQuestion';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer =setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      <BrowserRouter>
        {loading && <Intro />}
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new/open' element={<NewOpen />} />
            <Route path='/new/menu' element={<NewMenu />} />
            <Route path='/new/notice' element={<NewNotice />} />

            <Route path='/menu/burger' element={<MenuBurger />} />
            <Route path='/menu/sides' element={<MenuSides />} />
            <Route path='/menu/drink' element={<MenuDrink />} />

            <Route path='/event/event' element={<EventEvent />} />
            <Route path='/event/coupon' element={<EventCoupon />} />
            
            <Route path='/qna/oneToOne' element={<OneToOne />} />
            <Route path='/qna/qna' element={<Qna />} />  
            <Route path='/qna/qna/question' element={<QnaQuestion />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>

  )
}

export default App;