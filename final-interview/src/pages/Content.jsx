import Clients from "./Clients.jsx"
import DataBase from "./DataBase.jsx"
import Events from "./Events.jsx"
import  MarketingPolicy from "./MarketingPolicy.jsx"

import { FiUserPlus } from "react-icons/fi";
 import {GiLabradorHead } from "react-icons/gi";
 import { FaRegMoneyBill1 } from "react-icons/fa6";
 import { AiOutlineFile } from "react-icons/ai";


function Content () {

    return (
    
   <div className="content">
    <div className="client1">
    <Clients name="Active Client" icon={< FiUserPlus/>}  number="11"/>
     <Clients name="Active Admin" icon={< GiLabradorHead />} number="4"/>
     <Clients name="Total expenses" icon={< FaRegMoneyBill1 />} number="965"/>
     <Clients name="Running Projects" icon={< AiOutlineFile/>} number="11"/>
     </div>
  <div className="event1">
    <div className="event2">
      <div className="up-coming">
       <Events  name="Upcoming Events"/>
        </div>

        <div className="last-content">
         <MarketingPolicy />
       </div>
    
     </div>
       <div  className="event3">
        <div className="up-coming">
         <Events  name="Running Projects"/>
     </div>
       <div>
        <div className="last-content">
         <DataBase />
        </div>
      </div>
    </div>
  </div>
</div>
  
    )
  }
  
  export default Content ;