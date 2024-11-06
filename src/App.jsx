import './App.css'
import About from './componants/About'
import Campus from './componants/Campus'
import Contact from './componants/Contact'
import Footer from './componants/Footer'
import Hero from './componants/Hero'
import Navbar from './componants/Navbar'
import Programs from './componants/Programs'
import Testimonials from './componants/Testimonials'
import Title from './componants/Title'

function App() {
  
  

  return (
    <div className="App font-[Anzo2] ">
  
  <div className="home w-full">
    <Navbar/>
  <Hero/>
  </div>
  <div className='container'>
  
  <Title subtitle="OUR PROGRAM" title="WHAT WE OFFER"/>
  <Programs/>
  <About/>
  <Title subtitle="Gallary" title="Campus Photos"/>
  <Campus/>
  <Title subtitle="TESTIMONIALS" title="WHAT STUDENT SAYS"/>
  <Testimonials/>
  <Title subtitle="Contact Us" title="Get In Touch"/>
  <Contact/>
  <Footer/>
  </div>
  
  
    </div>
  )
}

export default App
