import Home from './home.js'
import About from './about.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'C:/Ranjith/ggsh/src/index.css'
import logo from 'C:/Ranjith/ggsh/src/images/logo-2.png'


const Header = () => {
  return(
  <div>
    
    <nav className="navbar">
    <img className='head' src={logo} alt='logo' />
    <div className='tabs'>
    <a href="/home">Home</a>
    <a href="/about">About Us</a>
    <a href="/home">Services</a>
    <a href="/about">Our Culture</a>
    <a href="/about">Careers</a>
    <a href="/home">Insights</a>
    <a href="/about">Contact Us</a>
    </div>

    <div className='consultnow'><i class="fa-solid fa-calendar-days"></i><a href="#">Consult Now</a></div>
    </nav>
   
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />

      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default Header;