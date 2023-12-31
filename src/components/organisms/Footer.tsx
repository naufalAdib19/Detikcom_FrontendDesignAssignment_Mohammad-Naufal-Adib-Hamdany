import Logo from '../../assets/white-logo.png'
import './FooterStyle.css'
import SocmedList from '../moleculs/SocmedList'

const Footer = () => {
  return (
    <div className="footer-container bg-green px-5 py-5 text-white">
        <div className='mb-3 mt-2'>
            <img src={Logo} alt="" />
        </div>
        <div className='d-flex flex-column flex-md-row align-items-center'>
            <div>
                <p>Event olahraga lari sejauh 10 kilometer yang diselenggarakan oleh Detikhealth secara gratis untuk masyarakat Indonesia. Ajak keluarga dan kerabat anda untuk ikut keseruan Sudirman Run 2023 lalu menangkan hadiah utama serta doorprize dengan total puluhan juta rupiah</p>
            </div>
            <div>
                <SocmedList/>
            </div>
        </div>
        <hr className='border-3 border-white'/>
        <p className=''>Copyright @ 2023 detikcom. All right reserved</p>
    </div>
  )
}

export default Footer