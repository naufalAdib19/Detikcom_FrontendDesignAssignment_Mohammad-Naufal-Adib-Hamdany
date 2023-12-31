import './ButtonSliderGaleriStyle.css'
import { useContext } from 'react';
import { Context } from '../../helper/context';

const ButtonSliderGaleri = () => {
    const {galeriIndex, setGaleriIndex} = useContext(Context);
    
    return (
        <div>
            <div className="button-slider-container d-flex justify-content-between position-absolute z-3 w-100 top-50 start-50 translate-middle px-4">
                <div onClick={() => {
                    galeriIndex > 0 ? setGaleriIndex(prev => prev-1) : null
                }}>
                    <h1>&lt;</h1>
                </div>
                <div onClick={() => {
                   galeriIndex < 3 ? setGaleriIndex(prev=>prev+1) : null
                }}>
                    <h1>&gt;</h1>
                </div>
            </div>
        </div>
  )
}

export default ButtonSliderGaleri