import React from 'react'
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import LearnSection from './pages/LearnSection';

const App = () => {
  return (
    <div>
      <NavBar/>
     < Home/>
     <LearnSection/>
     <Contact/>
    </div>
  )
}

export default App
