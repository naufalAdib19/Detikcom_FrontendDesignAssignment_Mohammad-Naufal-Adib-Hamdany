import Logo from '../atoms/Logo'
import { HamburgerMenu } from '../atoms/HamburgerMenu'
import './NavbarStyle.css'
import { useMediaQuery } from 'react-responsive'
import { NavigationMenu } from '../atoms/NavigationMenu'

const Navbar = () => {
    const styles = {
        'top': '8%',
        'width': '87%'
    }

    const isDekstop = useMediaQuery({
        query: '(min-width: 768px)'
    })

    return(
        <div className=''>
            <div style={styles} className='position-fixed start-50 translate-middle z-3 navbar-container'>
                <div className='relative'>
                    <div className='blur-bg position-absolute z-1 shadow w-100 px-4 rounded-pill'/>
                    <div className='navbar-content px-4 px-md-5 w-100 position-relative z-2 d-flex align-items-center justify-content-between'>
                        <div>
                            <Logo/>
                        </div>
                        <div className=''>
                            {
                                isDekstop  ? <NavigationMenu/> : <HamburgerMenu/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar