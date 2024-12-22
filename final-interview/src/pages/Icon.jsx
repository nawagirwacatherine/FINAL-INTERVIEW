import { FiSearch, FiShoppingCart,  FiMail,  FiClock,  } from "react-icons/fi";
import { TfiBell } from "react-icons/tfi";
import { TbClipboardText } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

function Icon () {

    return (
   <div className="icon">
     <div className="icon1"> 
        <FiClock />
        <FiSearch />
        </div>
        <div className="icon2">
          <FiShoppingCart />
          <FiMail />
          <TfiBell />
          < TbClipboardText/>
          <IoIosSettings/>
          <CgProfile />
          </div>
   </div>
    )
  }
  
  export default Icon;