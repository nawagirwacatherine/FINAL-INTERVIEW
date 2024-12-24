import Clients from "./Clients.jsx"
import Events from "./Events.jsx"

function Content () {

    return (
    
   <div className="content">
    <div className="client1">
     <Clients name="Active Client" />
     <Clients name="Active Admin" />
     <Clients name="Total expenses"/>
     <Clients name="Running Projects" />
     </div>
  <div className="event1">
  <div className="event2">
    <div className="up-coming">
     <Events  name="Upcoming Events"/>
     </div>
     <Events  name="Marketing policy "/>
    
     </div>
     <div  className="event3">
     <div className="up-coming">
     <Events  name="Running Projects"/>
     </div>
     <div>
     <Events  name="Database configuration"/>
     </div>
     </div>
     </div>
   </div>
  
    )
  }
  
  export default Content ;