import Clients from "./Clients.jsx"
import Events from "./Events.jsx"
import { FiUserPlus } from "react-icons/fi";

import { IoTriangleOutline } from "react-icons/io5";
 import {GiLabradorHead } from "react-icons/gi";
 import { FaRegMoneyBill1 } from "react-icons/fa6";
 import { AiOutlineFile } from "react-icons/ai";

 import { GoDash } from "react-icons/go";
import { BsArrowsMove } from "react-icons/bs";
import { BsArrowsFullscreen } from "react-icons/bs";

function Content () {

    return (
    
   <div className="content">
    <div className="client1">
    <Clients name="Active Client" icon={< FiUserPlus/>} icon1={< IoTriangleOutline/>}  />
     <Clients name="Active Admin" icon={< GiLabradorHead />} icon1={< IoTriangleOutline/>}   />
     <Clients name="Total expenses" icon={< FaRegMoneyBill1 />} icon1={< IoTriangleOutline/>}  />
     <Clients name="Running Projects" icon={< AiOutlineFile/>} icon1={< IoTriangleOutline/>}   />
     </div>
  <div className="event1">
    <div className="event2">
      <div className="up-coming">
       <Events  name="Upcoming Events" icon={<GoDash />} icon1={< BsArrowsMove/>} icon2={<BsArrowsFullscreen/>}/>
        </div>

        <div className="last-content">
         <Events  name="Marketing policy "/>
       </div>
    
     </div>
       <div  className="event3">
        <div className="up-coming">
         <Events  name="Running Projects"  icon={<GoDash />} icon1={< BsArrowsMove/>} icon2={<BsArrowsFullscreen/>}/>
     </div>
       <div>
        <div className="last-content">
         <Events  name="Database configuration"/>
        </div>
      </div>
    </div>
  </div>
</div>
  
    )
  }
  
  export default Content ;