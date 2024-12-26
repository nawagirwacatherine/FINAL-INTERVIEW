// import propTypes from "proptypes";
import PropTypes from "prop-types";

const RatingBar = ({label,value,max}) => {
    const percentage = (value / max) * 100;

    return (
        <div style={{ marginBottom: "16px"}}>
            <div style={{marginBottom:"4px", fontWeight: "bold"}}>{label}</div>
            <div style={{height:"20px",
                        background:"#e0e0e0",
                        borderRadius: "4px",
                        overflow: "hidden"
            }}>
                <div style={{
                    height: "100%",
                    width: `${percentage}%`,
                    background: "#76c7c0",
                     transition: "width 0.3s ease-in-out",
                }}>

                </div>

                <div style= {{ marginTop: "4px", fontSize:"12px", color:"#666"}}> {value} / {max} </div>

            </div>
        </div>

    )
}

RatingBar.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,

}

export default RatingBar;