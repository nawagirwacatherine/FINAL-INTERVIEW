import { GoDash } from "react-icons/go";
import { BsArrowsMove } from "react-icons/bs";
import { BsArrowsFullscreen } from "react-icons/bs";
function Events (prop) {

    return (
      <>
   <div className="events">
    <h1>{ prop.name} </h1>
   
   </div>
   <div className="upcoming-icon"> < GoDash/> <BsArrowsMove /> < BsArrowsFullscreen/> </div>
   </>
    )
  }
  
  export default Events ;