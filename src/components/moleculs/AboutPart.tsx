import './AboutPartStyle.css'

type propsType = {
    img?: string,
    title: string,
    desc: string
}

const AboutPart = ({props}: {props: propsType}) => {
  return (
    <div>
        <div className='about-part-container px-4 pb-3 pt-4 rounded-4 text-white d-flex flex-column flex-lg-row gap-3 align-items-center'>
            <div>
                {
                    props.img != null ? <img src={props.img} alt="" className='ratio tatio-1x1'/> : ''
                }
                
            </div>
            <div className="">
                <h1 className="fs-2 fw-bold fst-italic">{props.title}</h1>
                <p className="">{props.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default AboutPart