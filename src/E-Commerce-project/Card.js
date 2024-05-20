import axios from "axios"
import React,{ useEffect,useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Card-style.css"
import SizesExample from "./Spinners/Spinner";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "./Redux/Action/Action";
import { Link } from "react-router-dom";
import { REMOVE_CART_ITEMS } from "./Redux/Action/Action";
import { useNavigate } from "react-router-dom";


function ReactCard(){
    const dispatch=useDispatch()
    const Back=useNavigate()

    const send=(eachobject)=>{
         dispatch(ADD_TO_CART(eachobject))
    }

    const send1=(id)=>{
      dispatch(REMOVE_CART_ITEMS(id))
      alert("Product is sucessfully")
      Back("/products")
  }

   const[products,setProducts]=useState([])
   console.log(products)


  
    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
    
            // Check if data.products is an array
            if (Array.isArray(data.products)) {
              // Update the data to include "quantity: 0" for each product
              const updatedProducts = data.products.map(product => ({
                ...product,
                quantity: 0
              }));
              setProducts(updatedProducts);
            } else {
              console.error('Products array not found in response:', data);
            }
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchProducts();
      }, []);

    // console.log(products)




    return(
        <>
        <div>
         {/* <div style={{ padding: '20px', background: "linear-gradient(#766A9C, #628B64)" }}> */}
         {/* linear-gradient(#f8f9fa, #adb5bd) */}
{
    products.length>0
    ?        
products.map((eachobject)=>{
    return(
        < React.Fragment key={eachobject.id}>
<Card className="Card" style={{ width: '18rem' }}>
  <Link to={`/${eachobject.category}/${eachobject.id}`}>
  <Card.Img className="Image" variant="top" src={eachobject.images[0]} />
  </Link>
  <Card.Body>
    <Card.Title>{eachobject.title}</Card.Title>
    <div style={{fontSize:"20px",color:"black"}}><span style={{fontWeight:"bold",fontSize:"25px"}}>Price :</span> ₹  {eachobject.price}</div>
    <br></br>
    <Button variant="primary" style={{width:"150px",margin:"2px"}} onClick={()=>send(eachobject)}>Add to cart</Button>
    {/* <br></br>  */}
    <Link to={`/productdetails/buy/${eachobject.id}`} style={{textDecoration:"none",color:"white"}}><Button variant="primary" style={{width:"100px"}} onClick={()=>send(eachobject)}>Buy Now</Button></Link>
  </Card.Body>
</Card>
        </React.Fragment>
    )
})
    :
    <SizesExample />
  
}
</div>
        </>
    )
}

export default ReactCard


