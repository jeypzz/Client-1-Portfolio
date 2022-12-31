import {
  About,
  Contact,
  Header,
  Portfolio,
  Qualification,
} from './container'
import { Navbar, Footer, ParticleBackground } from './components'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ParticleBackground />
      <About />
      <Portfolio />
      <Qualification />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
