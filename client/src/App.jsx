// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import Dashboard from './Pages/Dashboard';
import Blog from './Pages/Blog';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}
