import { NavigationMenu } from "../atoms/NavigationMenu"
import './DropDownStyle.css'

const DropDown = () => {
  return (
    <div className="w-100 ">
        <div className="drop-down-container">
            <div>
                <NavigationMenu/>
            </div>
        </div>
    </div>
  )
}

export default DropDown