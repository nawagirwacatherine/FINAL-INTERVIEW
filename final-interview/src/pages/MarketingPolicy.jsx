function MarketingPolicy  (prop) {
    return (
        <div className="marketing-policy">
        
             <section>
            <div className="date-month">
            <div className="date">{prop.date}</div>
            <div className="month">{prop.month}</div>
            </div>
            <h1>
            {prop.name} 
            {prop.description} 
            <button style={{width:"40px", backgroundColor:"green" ,border:"0",  color: "white", borderRadius: "2px"}}>{prop.buttonName}</button>
        </h1>
         <hr style={{ border: "1px solid grey" , width: "95%", margin: "1px", color: "white",borderRadius: "2px"}}/>
         </section>
        </div>
       

    )
  }

  
  export default  MarketingPolicy;