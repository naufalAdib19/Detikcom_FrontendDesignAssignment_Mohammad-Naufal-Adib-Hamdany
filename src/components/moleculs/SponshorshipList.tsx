import image1 from '../../assets/sponsor-logo/Frame 12320.png'
import image2 from '../../assets/sponsor-logo/Frame 12321.png'
import image3 from '../../assets/sponsor-logo/Frame 12322.png'
import image4 from '../../assets/sponsor-logo/Frame 12323.png'
import image5 from '../../assets/sponsor-logo/Frame 12324.png'
import image6 from '../../assets/sponsor-logo/Frame 12325.png'
import image7 from '../../assets/sponsor-logo/Frame 12326.png'
import image8 from '../../assets/sponsor-logo/Frame 12327.png'
import './SponshorshipListStyle.css'

const data = [image1, image2, image3, image4, image5, image6, image7, image8]

const SponshorshipList = () => {
  return (
    <div className='d-flex gap-5'>
        <div className='sponsor-container d-flex gap-5 overflow-visible'>
            {
                data.map((data, index) => {
                    return(
                        <div className='bg-white rounded-3' key={index}>
                            <img src={data} alt="" />
                        </div>
                        
                    )
                })
            }
        </div>
        <div className='sponsor-container d-flex gap-5 overflow-visible'>
            {
                data.map((data, index) => {
                    return(
                        <div className='bg-white rounded-3' key={index}>
                            <img src={data} alt="" />
                        </div>
                        
                    )
                })
            }
        </div>
    </div>
  )
}

export default SponshorshipList