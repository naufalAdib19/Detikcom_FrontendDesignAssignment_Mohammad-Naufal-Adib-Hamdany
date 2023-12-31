import Navbar from './components/organisms/Navbar'
import eventLogo from './assets/logo-event.png'
import Button from './components/atoms/ButtonTentangAcara'
import About from './components/organisms/About'
import SponshorshipList from './components/moleculs/SponshorshipList'
import Galeri from './components/organisms/Galeri'
import ArticleList from './components/organisms/ArticleList'
import ArticleType from './components/moleculs/ArticleType'
import Footer from './components/organisms/Footer'
import decoration from './assets/bg-2.jpg'

function App() {
  return (
    <>
      <div className='navbar-section'>
        <Navbar/>
      </div>
      <div className='hero-image vh-100 ps-5 d-flex align-items-start align-items-md-center '>
        <div>
        <img src={eventLogo} alt="" className='logo-hero ps-md-5'/><br />
          <Button props={{
            string: 'Tentang Acara'
          }}/>
        </div>
      </div>
      <div className="about-section d-flex flex-column align-items-center py-5">
        <About/>
        <Button props={{
            string: 'Daftar Sekarang'
          }}/>
      </div>
      <div className='sponsorship-section py-5 mb-5 overflow-hidden'>
        <p className='fs-1 fw-bold text-center text-white mb-4'>DIDUKUNG OLEH</p>
        <SponshorshipList/>
      </div>
      <div className="galeri-section">
        <Galeri/>
      </div>
      <div className="article-section mb-5 position-relative">
        <h1 className='fs-1 fw-bold text-center'>ARTIKEL TERKAIT</h1>
        <ArticleType/>
          <ArticleList/>
          <div className='text-center'>
            <div className='position-relative z-2'>
            <Button props={{
              string: 'Lihat Lebih Banyak'
            }}/>
            </div>
            
          </div> 
      </div>
      <div className='footer-section position-relative bg-green'>
        <div className='position-relative'>
            <img src={decoration} alt="" className='w-100'/>
            <Footer/>
        </div>
      </div>
      
    </>
  )
}

export default App
