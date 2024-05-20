import { Link } from "react-router-dom";



function  Invaild(){
    return(
        <>
        <br></br> <br></br> <br></br> 
        <button><Link to={"/"} style={{textDecoration:"none",fontSize:"30px",color:"black"}}>Back to Home</Link></button><br></br>
        <img src="https://image.freepik.com/free-vector/404-error-abstract-concept-illustration_335657-2243.jpg" alt="Invaild page" style={{marginLeft:"30%"}}></img>
        </>
        )
}
export default Invaild