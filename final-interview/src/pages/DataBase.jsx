
function DataBase () {

 return (
 <>
 <div className="container">
 <div className="skills">
     <h3> <input type="radio" /><span> Database configuration </span>
     <span>
     <button style={{ 
        position:"absolute",
        top:"66%",
        right:"-445px",
        transform:"translateY(-50%)",

                      width: "60px",
                       color: "white",
                        backgroundColor:"red",
                        borderRadius: "2px",
                       
                         }}>failed</button> </span>
     </h3>
  <div className="progress-bar" >
     <div className="configuration"> <span></span></div>
     </div>


 <h3> <input type="radio" /><span style={{  }} > Design tool </span><span>
 <button style={{ 
  
                width: "85px",
                 color: "white",
                  backgroundColor:"orange",
                  borderRadius: "2px",
                 
                   }}>Progressing</button>
 </span>
 </h3>
  <div className="progress-bar" >
     <div className="tool"> <span></span></div>
     </div>

     <h3> <input type="radio" /><span> Internet configuration</span> 
     
     <span>

     <span>
     <button style={{ 
      
                      width: "80px",
                       color: "white",
                        backgroundColor:"green",
                        borderRadius: "2px",
                       
                         }}>progressing</button> </span>
     </span>
     </h3>
  <div className="progress-bar" >
     <div className="internet"> <span></span></div>
     </div>

     <h3> <input type="radio" /><span> Banner Completation </span>
     <span>
     <button style={{ 
      
                      width: "80px",
                       color: "white",
                        backgroundColor:"blue",
                        borderRadius: "2px",
                       
                         }}>Progressing</button> </span>
     
     </h3>
  <div className="progress-bar" >
     <div className="banner"> <span></span></div>
     </div>

     <h3> <input type="radio" /><span> IT Solution </span>
     
     <span>
     <button style={{ 
      
                      width: "70px",
                       color: "white",
                        backgroundColor:"green",
                        borderRadius: "2px",
                       
                         }}>success</button> </span>
     </h3>
  <div className="progress-bar" >
     <div className="solution"> <span></span></div>
     </div>

     </div>

 </div>
 
 </>

 )

}

export default DataBase;