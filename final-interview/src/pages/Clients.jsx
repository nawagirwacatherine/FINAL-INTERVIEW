import { IoTriangleOutline } from "react-icons/io5";

function Clients (prop) {

    return (
      <>
   <div className="clients">
    <h1>{prop.icon}</h1>
    <p>{prop.name}</p>

    <div className="triangle"> {prop.number} < IoTriangleOutline /> </div>
   </div>

   </>
    )
  }
  
  export default Clients ;