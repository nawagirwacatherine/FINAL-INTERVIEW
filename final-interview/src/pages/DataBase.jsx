
import { LuCircleDot } from "react-icons/lu";
import RatingBar from "./RatingBar";

function DataBase () {

 return(
      <>
      <div style={{padding: "3px" ,  border:"0",}}>
       <div  style={{display: "flex"}}>
      <h1> <span style={{Color: "green"}}>< LuCircleDot /></span> <span> Database configuration </span></h1>

      <button style={{ 
      
                width: "60px",
                 color: "white",
                  backgroundColor:"red",
                  borderRadius: "2px",
                 
                   }}>failed</button>
                   </div>
        < RatingBar />

        <div  style={{display: "flex"}}>
      <h1> <span style={{Color: "green"}}>< LuCircleDot /></span> <span> Design tool</span></h1>

      <button style={{ 
                width: "85px",
                 color: "white",
                  backgroundColor:"orange",
                  borderRadius: "2px",
                 
                   }}>Progressing</button>
                   </div>
                   < RatingBar />


                   
        <div  style={{display: "flex"}}>
      <h1> <span style={{Color: "green"}}>< LuCircleDot /></span> <span> Internet configuration </span></h1>

      <button style={{ 
                width: "85px",
                 color: "white",
                  backgroundColor:"green",
                  borderRadius: "2px",
                 
                   }}>Progressing</button>
                   </div>
                   < RatingBar />

                   
        <div  style={{display: "flex"}}>
      <h1> <span style={{Color: "green"}}>< LuCircleDot /></span> <span> Banner completation</span></h1>

      <button style={{ 
                
                width: "85px",
                 color: "white",
                  backgroundColor:"light-blue",
                  borderRadius: "2px",
                 
                   }}>Progressing</button>
                   </div>
                   < RatingBar />

                   
        <div  style={{display: "flex"}}>
      <h1> <span style={{Color: "green"}}>< LuCircleDot /></span> <span> IT solution </span></h1>

      <button style={{ 
                width: "60px",
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