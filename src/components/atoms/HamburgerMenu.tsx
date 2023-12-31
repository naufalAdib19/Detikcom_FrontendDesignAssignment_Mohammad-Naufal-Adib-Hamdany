import { Context } from "../../helper/context"
import { useContext } from 'react'
import './HamburgerMenuStyle.css'

export const HamburgerMenu = () => {
    const { isNavbarActive, setIsNavbarActive } = useContext(Context)

    function hamburgerButtonOnClick() {
        setIsNavbarActive(!isNavbarActive)
    }

    return (
        <div className="" role="button">
            <div className="hamburger-container d-flex flex-wrap bg-white justify-content-center align-items-center gap-1 rounded-circle" onClick={hamburgerButtonOnClick}>
                {
                    isNavbarActive ? 
                    <div className="d-flex flex-column justify-content-center active">
                        <div className="bg-dark-blue"/>
                        <div className="bg-dark-blue"/>   
                    </div>
                    :
                    <div className="d-flex flex-wrap gap-1 justify-content-center ">
                        <div className="bg-dark-blue rounded-1"/>
                        <div className="bg-dark-blue rounded-1"/>
                        <div className="bg-dark-blue rounded-1"/>
                    <div className="bg-dark-blue rounded-1"/> 
                </div>
                }
                
                
            </div>                
        </div>
    )
}