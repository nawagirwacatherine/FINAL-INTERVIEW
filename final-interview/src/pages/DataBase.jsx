
// function DataBase () {

  

//  return(
//       <>
//       <div className="container">
//        <div className="skills" >
//       <h1> <input type="radio" /><span> Database configuration </span></h1>
//       <div className="configuration"> <span>86%</span></div>

//       <button style={{ 
      
//                 width: "60px",
//                  color: "white",
//                   backgroundColor:"red",
//                   borderRadius: "2px",
                 
//                    }}>failed</button>
//                    </div>
//                    <div className="configuration"> <span>86%</span></div>
   

//         <div  style={{display: "flex"}}>

//       <button style={{ 
//                 width: "85px",
//                  color: "white",
//                   backgroundColor:"orange",
//                   borderRadius: "2px",
                 
//                    }}>Progressing</button>
//                    </div>
//                    <input type="range" />
        


                   
//         <div  style={{display: "flex"}}>
//       <h1> <input type="radio" /> <span> Internet configuration </span></h1>

//       <button style={{ 
//                 width: "85px",
//                  color: "white",
//                   backgroundColor:"green",
//                   borderRadius: "2px",
                 
//                    }}>Progressing</button>
//                    </div>
//                    <input type="range" />
            

                   
//         <div  style={{display: "flex"}}>
//       <h1><input type="radio" /> <span> Banner completation</span></h1>

//       <button style={{ 
                
//                 width: "85px",
//                  color: "white",
//                   backgroundColor:"light-blue",
//                   borderRadius: "2px",
                 
//                    }}>Progressing</button>
//                    </div>
//                    <input type="range" />
                 

                   
//         <div  style={{display: "flex"}}>
//       <h1> <input type="radio" /><span> IT solution </span></h1>

//       <button style={{ 
//                 width: "60px",
//                  color: "white",
//                   backgroundColor:"green",
//                   borderRadius: "2px",
                 
//                    }}>Success</button>
//                    </div>

//                    <input type="range" />
                 

//         </div>
//       </>

//  )

// }

// export default DataBase;

function DataBase () {

 return (
 <>
 <div className="container">
 <div className="skills">
     <h3> <input type="radio" /><span> Database configuration </span></h3>
  <div className="progress-bar" >
     <div className="configuration"> <span></span></div>
     </div>


 <h3> <input type="radio" /><span> Design tool </span></h3>
  <div className="progress-bar" >
     <div className="tool"> <span></span></div>
     </div>

     <h3> <input type="radio" /><span> Internet configuration</span></h3>
  <div className="progress-bar" >
     <div className="internet"> <span></span></div>
     </div>

     <h3> <input type="radio" /><span> Banner Completation </span></h3>
  <div className="progress-bar" >
     <div className="banner"> <span></span></div>
     </div>

     <h3> <input type="radio" /><span> IT Solution </span></h3>
  <div className="progress-bar" >
     <div className="solution"> <span></span></div>
     </div>

     </div>

 </div>
 
 </>

 )

}

export default DataBase;