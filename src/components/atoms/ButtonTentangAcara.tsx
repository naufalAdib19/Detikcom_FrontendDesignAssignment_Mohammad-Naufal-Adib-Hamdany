import './ButtonTentangAcaraStyle.css';

type propsType = {
  string: string,
  url?: string
}

const Button = ({props}: {props: propsType}) => {

  function onClick() {
    if(props.url != null)
    window.open(props.url)
  }

  return (
    <div>
        <button
        onClick={onClick}
        className='button-tentang-acara ms-md-5 mt-4 px-4 py-2 rounded-pill border border-button text-white shadow-lg'>
            {props.string}
        </button>
    </div>
  )
}

export default Button