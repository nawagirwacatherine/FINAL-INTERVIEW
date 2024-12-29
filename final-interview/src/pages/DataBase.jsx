
function DataBase () {

 return (
 <>
 <div className="container">
 <div className="skills">
     <h3> <span><input type="radio" /> Database configuration </span>
     <span>
     <button style={{ 
      
                     border:"none",
                      width: "60px",
                       color: "white",
                        backgroundColor:"red",
                        borderRadius: "2px",
                       
                         }}>failed</button> </span>
     </h3>
  <div className="progress-bar" >
     <div className="configuration"> <span></span></div>
     </div>


 <h3> <span ><input type="radio" /> Design tool </span><span>
 <button style={{ 
                border:"none",
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

     <h3> <span> <input type="radio" /> Internet configuration</span> 
     
     <span>

     <span>
     <button style={{ 
                     border:"none",
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

     <h3> <span><input type="radio" /> Banner Completation </span>
     <span>
     <button style={{ 
                     border:"none",
                      width: "80px",
                       color: "white",
                        backgroundColor:"blue",
                        borderRadius: "2px",
                       
                         }}>Progressing</button> </span>
     
     </h3>
  <div className="progress-bar" >
     <div className="banner"> <span></span></div>
     </div>

     <h3> <span> <input type="radio" /> IT Solution </span>
     
     <span>
     <button style={{ 
                      border:"none",
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