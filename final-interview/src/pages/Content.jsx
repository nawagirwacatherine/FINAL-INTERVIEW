import Clients from "./Clients.jsx"
import Events from "./Events.jsx"

function Content () {

    return (
    
   <div className="content">
    <div className="client1">
     <Clients name="Active Client" />
     <Clients name="Active Admin" />
     <Events  name="Upcoming Events"/>
     <Events  name="Marketing policy "/>
     
     </div>
  <div className="event1">
  <div className="event2">
  <Clients name="Total expenses"/>
  <Clients name="Running Projects" />
  <Events  name="Running Projects"/>
  <Events  name="Database configuration"/>
     </div>
     <div  className="event3">
     </div>
     </div>
   </div>
  
    )
  }
  
  export default Content ;