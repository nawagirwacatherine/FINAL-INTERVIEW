import Clients from "./Clients.jsx"
import Events from "./Events.jsx"

function Content () {

    return (
    
   <div className="content">
     <Clients name="Active Client" />
     <Clients name="Active Admin" />
     <Clients name="Total expenses"/>
     <Clients name="Running Projects" />

     <Events />
   </div>
  
    )
  }
  
  export default Content ;