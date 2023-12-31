import ButtonSliderGaleri from "../moleculs/ButtonSliderGaleri"
import mainPict1 from '../../assets/galeri-image/main-pic/main-picture.png'
import mainPict2 from '../../assets/galeri-image/main-pic/main-picture-3.png'
import mainPict3 from '../../assets/galeri-image/main-pic/main-picture-4.png'
import mainPict4 from '../../assets/galeri-image/main-pic/main-picture-2.png'
import './GaleriStyle.css'
import thumb1 from '../../assets/galeri-image/thumbnail/thumb1.png'
import thumb2 from '../../assets/galeri-image/thumbnail/thumb4.png'
import thumb3 from '../../assets/galeri-image/thumbnail/thumb2.png'
import thumb4 from '../../assets/galeri-image/thumbnail/thumb3.png'
import { Context } from "../../helper/context"
import { useContext } from 'react'

const dataThumbail = [thumb1, thumb2, thumb3, thumb4];
const dataMainImage = [mainPict1, mainPict2, mainPict3, mainPict4]

const Galeri = () => {

    const { galeriIndex, setGaleriIndex } = useContext(Context);

    return (
        <div className='px-3 py-3 mb-5'>
            <div className="container-lg d-flex justify-content-center">
                <div>
                    <div className="title">
                        <h1 className="text-center fw-bold fs-3 py-3">GALERI SUDIRMAN RUN 2022</h1>
                    </div>
                    <div className="photo">
                        <div className="big-pic position-relative mb-3 mb-md-4">
                            <div>
                                <ButtonSliderGaleri/>
                            </div>
                            <img src={dataMainImage[galeriIndex]} alt="" className='ratio ratio-16x9'/>
                        </div>
                        <div className="thumbnail d-flex justify-content-between">
                            {
                                dataThumbail.map((data, index) => {
                                    return(
                                        <img 
                                        key={index}
                                        src={data} 
                                        alt="" 
                                        className={`${galeriIndex != index ? 'black-and-white' : ''}`}
                                        onClick={() => {
                                            setGaleriIndex(index)
                                        }}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Galeri