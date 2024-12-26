
import { LuCircleDot } from "react-icons/lu";
import RatingBar from "./RatingBar";

function DataBase () {

 return(
      <>
      <div style={{padding: "5px"}}>
       <div  style={{display: "flex"}}>
      <h1> <span style={{Color: "green"}}>< LuCircleDot /></span> <span> Database configuration </span></h1>

      <button style={{ 
                width: "55px",
                 color: "white",
                  backgroundColor:"red",
                  borderRadius: "2px",
                 
                   }}>failed</button>
                   </div>
        < RatingBar />

        <div  style={{display: "flex"}}>
      <h1> <span style={{Color: "green"}}>< LuCircleDot /></span> <span> Database configuration </span></h1>

      <button style={{ 
                width: "55px",
                 color: "white",
                  backgroundColor:"green",
                  borderRadius: "2px",
                 
                   }}>Progressing</button>
                   </div>
                   < RatingBar />


                   
        <div  style={{display: "flex"}}>
      <h1> <span style={{Color: "green"}}>< LuCircleDot /></span> <span> Database configuration </span></h1>

      <button style={{ 
                width: "55px",
                 color: "white",
                  backgroundColor:"green",
                  borderRadius: "2px",
                 
                   }}>Progressing</button>
                   </div>
                   < RatingBar />

                   
        <div  style={{display: "flex"}}>
      <h1> <span style={{Color: "green"}}>< LuCircleDot /></span> <span> Database configuration </span></h1>

      <button style={{ 
                width: "55px",
                 color: "white",
                  backgroundColor:"green",
                  borderRadius: "2px",
                 
                   }}>Progressing</button>
                   </div>
                   < RatingBar />

                   
        <div  style={{display: "flex"}}>
      <h1> <span style={{Color: "green"}}>< LuCircleDot /></span> <span> Database configuration </span></h1>

      <button style={{ 
                width: "55px",
                 color: "white",
                  backgroundColor:"green",
                  borderRadius: "2px",
                 
                   }}>Success</button>
                   </div>
                   < RatingBar />

        </div>
      </>

 )

}

export default DataBase;