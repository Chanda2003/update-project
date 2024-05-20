import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import  { BasicExample } from '../../Spinners/Spinner';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { ADD_TO_CART } from '../../Redux/Action/Action';
import { Link } from 'react-router-dom';

function Smartphone(){

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
    const filteredData = product.filter(product => product.category === "smartphones");
    setFilter(filteredData);
}, [product]);


    return(
        <>
<div style={{ padding: '20px', background: "linear-gradient(#EEE0DE, #D9E9E8)" }}>
         <Link to={"/"} style={{color:"black",fontSize:"50px",marginLeft:"20px"}}><i class="fa-solid fa-arrow-left"></i></Link>
 
         <h2 style={{marginLeft:"40%"}}>Smart Phones</h2>
 
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
  
}</div>
        </>
    )
}
export default Smartphone



// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { BasicExample } from '../../Spinners/Spinner';
// import { Card } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import { ADD_TO_CART } from '../../Redux/Action/Action';
// import { Link } from 'react-router-dom';

// function Smartphone() {
//     const dispatch = useDispatch();

//     const send = (eachObject) => {
//         dispatch(ADD_TO_CART(eachObject));
//     };

//     const [product, setProducts] = useState([]);
//     const [filter, setFilter] = useState([]);

//     useEffect(() => {
//         axios.get('https://dummyjson.com/products')
//             .then(response => {
//                 setProducts(response.data.products);
//             });
//     }, []);

//     useEffect(() => {
//         // Filter products by category
//         const filteredData = product.filter(product => product.category === 'smartphones');
//         setFilter(filteredData);
//     }, [product]);

//     return (
//         <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}> {/* Inline style for the container */}
//             <Link to="/products" style={{ color: 'black', fontSize: '30px', marginBottom: '20px' }}>
//                 <i className="fa-solid fa-arrow-left"></i>
//             </Link>
//             <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Smart Phones</h2>

//             {filter.length > 0 ? (
//                 filter.map((eachObject) => (
//                     <Card key={eachObject.id} style={{ width: '18rem', margin: '10px auto' }}>
//                         <Link to={`/${eachObject.category}/${eachObject.id}`}>
//                             <Card.Img variant="top" src={eachObject.images[0]} />
//                         </Link>
//                         <Card.Body>
//                             <Card.Title>{eachObject.title}</Card.Title>
//                             <div style={{ fontSize: '20px', color: 'black' }}>
//                                 <span style={{ fontWeight: 'bold', fontSize: '25px' }}>Price:</span> ₹ {eachObject.price}
//                             </div>
//                             <br />
//                             <Button variant="primary" style={{ width: '150px', margin: '2px' }} onClick={() => send(eachObject)}>
//                                 Add to cart
//                             </Button>
//                             <Link to={`/productdetails/buy/${eachObject.id}`} style={{ textDecoration: 'none', color: 'white' }}>
//                                 <Button variant="primary" style={{ width: '100px' }} onClick={() => send(eachObject)}>
//                                     Buy Now
//                                 </Button>
//                             </Link>
//                         </Card.Body>
//                     </Card>
//                 ))
//             ) : (
//                 <BasicExample />
//             )}
//         </div>
//     );
// }

// export default Smartphone;


