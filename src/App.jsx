import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main'
import Presentation from './components/presentation/Presentation'
import Footer from './components/footer/Footer'
import Whoiam from './components/whoiam/Whoiam'

function App() {
  const [count, setCount] = useState(0)



  return (
    <div >
      <Navbar />
      <Main />
      <Whoiam />
      <Presentation />
      <Footer />
    </div>
  )
}

export default App
