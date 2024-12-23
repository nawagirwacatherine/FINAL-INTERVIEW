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
     <Events  name="Upcoming Events"/>
     <Events  name="Running Projects"/>
     </div>
     <div  className="event3">
     <Events  name="Marketing policy "/>
     <Events  name="Database configuration"/>
     </div>
     </div>
   </div>
  
    )
  }
  
  export default Content ;