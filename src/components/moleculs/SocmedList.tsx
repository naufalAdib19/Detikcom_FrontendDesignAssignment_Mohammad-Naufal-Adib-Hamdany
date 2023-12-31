import instagram from '../../assets/sosmed-logo/instagram.png'
import facebook from '../../assets/sosmed-logo/facebook.png'
import linkedin from '../../assets/sosmed-logo/linkedin.png'
import twitter from '../../assets/sosmed-logo/twitter.png'
import youtube from '../../assets/sosmed-logo/youtube.png'

const data: Array<string> = [instagram, facebook, linkedin, twitter, youtube]

function SocmedList() {
  return (
    <div className='d-flex flex-column align-items-center'>
        <p>Connect with us</p>
        <ul className='d-flex gap-1'>
            {
                data.map((data, index) => {
                    return(
                        <img src={data} alt="" key={index}/>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default SocmedList