import './ButtonTentangAcaraStyle.css';

type propsType = {
  string: string
}

const Button = ({props}: {props: propsType}) => {
  return (
    <div>
        <button 
        className='button-tentang-acara ms-md-5 mt-4 px-4 py-2 rounded-pill border border-button text-white shadow-lg'>
            {props.string}
        </button>
    </div>
  )
}

export default Button