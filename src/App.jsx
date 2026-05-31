import { useState, useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'

import Lottie from "lottie-react";
import Intro from './pages/intro'
import Board from './pages/Board'
import Home from './pages/Home'
import Header from './pages/Header'
import Footer from './pages/Footer'

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
        <Home />
        <Footer />
      </BrowserRouter>
    </>

  )
}

export default App;