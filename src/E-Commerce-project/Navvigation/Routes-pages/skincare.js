
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import  { BasicExample } from '../../Spinners/Spinner';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { ADD_TO_CART } from '../../Redux/Action/Action';
import { Link } from 'react-router-dom';

function Skincare(){

    const dispatch=useDispatch()

    const send=(eachobject)=>{
         dispatch(ADD_TO_CART(eachobject))
    }
    
    const [product,setProducts]=useState([])
    const [filter,setFilter]=useState([])
    console.log(filter)
   useEffect(()=>{
    axios.get("https://dummyjson.com/products")
    .then(response=>
        {
        setProducts(response.data.products)
        }
        )
   },[])

   useEffect(() => {
    // Filter products by category
    const filteredData = product.filter(product => product.category === "skincare");
    setFilter(filteredData);
}, [product]);


    return(
        <>
        <div style={{ padding: '20px', background: "linear-gradient(#EEE0DE, #D9E9E8)" }}>
         <Link to={"/"} style={{color:"black",fontSize:"50px",marginLeft:"20px"}}><i class="fa-solid fa-arrow-left"></i></Link>
 
        <h2 style={{marginLeft:"40%"}}>Skincare</h2>
 
   {
    filter.length>0
    ?        
    filter.map((eachobject)=>{
    return(
        <>
<Card className="Card" style={{ width: '18rem' }}>
<Link to={`/${eachobject.category}/${eachobject.id}`}>
  <Card.Img className="Image" variant="top" src={eachobject.images[0]} />
  </Link>
  <Card.Body>
    <Card.Title>{eachobject.title}</Card.Title>
    <div style={{fontSize:"20px",color:"black"}}><span style={{fontWeight:"bold",fontSize:"25px"}}>Price :</span> ₹  {eachobject.price}</div>
    <br></br>
    <Button variant="primary" style={{width:"150px",margin:"2px"}} onClick={()=>send(eachobject)}>Add to cart</Button>
    <Link to={`/productdetails/buy/${eachobject.id}`} style={{textDecoration:"none",color:"white"}}><Button variant="primary" style={{width:"100px"}} onClick={()=>send(eachobject)}>Buy Now</Button></Link>

  </Card.Body>
</Card>
        </>
    )
})
    :
    <BasicExample/>
  
}
</div>
        </>
    )
}
export default Skincare