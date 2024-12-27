import 'bootstrap/dist/css/bootstrap.min.css';
function RatingBar (prop) {

    return(
         <>
         <div>
        <h1>
        <span className="lucir">
         </span>
     {prop.name}
      <button style={{width: prop.buttonWidth,backgroundColor: prop.buttonbackgroundColor,color:"white" ,border: "0" , borderRadius: "2px"}}>{prop.buttonName}</button>
      </h1>
     <hr style={{ border: "1px solid grey" , width: "85%", padding: "5px", margin: "8px"}}/>

    </div>

</>
    )


}



export default RatingBar;