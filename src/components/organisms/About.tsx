import AboutPart from "../moleculs/AboutPart";
import image from '../../assets/special-perfomance-image.png'
import mapImage from '../../assets/map.png'
import './AboutStyle.css'

const About = () => {
  return (
    <div className="mt-2 d-flex justify-content-center">
        <div className="py-2 d-flex flex-column flex-md-row gap-4 align-items-center px-4">
            <div className="map-container px-4 py-4 rounded-3 d-flex flex-column">
                <div className="overflow-hidden rounded-4">
                    <img src={mapImage} alt="" className="ration ratio-4x3 mx-auto w-auto overflow-hidden" width={420}/>
                </div>
                <h1 className="text-white fw-bold fst-italic mt-3">10K FUN RUN</h1>
                <p className="text-white">Dimulai pukul 6 pagi, nikmati pemandangan kota di pagi hari dimulai dari Bundaran HI hingga Patung Pemuda Membangun di Senayan lalu kembali lagi ke Bundaran HI!</p>
            </div>
            <div className="d-flex flex-column gap-4 mt-0 mt-md-0 mt-lg-0">
                <AboutPart props={{
                        title: 'GRATIS DAN BERHADIAH',
                        desc: 'Pendaftaran gratis! Ajak keluarga anda dan menangkan hadiah total puluhan juta rupiah doorprize menarik!',
                }}/>
                <AboutPart props={{
                    title: '50+ TENANT BAZZAR',
                    desc: 'Dapatkan promo menarik pada booth-booth tenant bazzar Sudirman Run 2023 mulai dari F&B hingga fashion',
                }}/>
                <AboutPart props={{
                    title: 'SPESIAL PERFORMANCE',
                    desc: 'Saksikan penampilan dari RAN, Ayu Ting Ting, Diskoria, serta hiburan lainnya!',
                    img: image
                }}/>
            </div>
        </div>
    </div>
  )
}

export default About