

// import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Table from 'react-bootstrap/Table';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { REMOVE_CART_ITEMS,CLEAR_ALL } from '../../Redux/Action/Action';

// function Cardbuy(){
//     const [price,setPrice]=useState(0)

//     const getdata=useSelector((state)=>state.ReducerAction.card)
  
//   console.log(getdata)
//   const Back=useNavigate()
  
//   const dispatch=useDispatch()
  
//   const [cartOpen, setCartOpen] = useState(false);
  

  
//   const closeCart = () => {
//     setCartOpen(false);
//   };
  
//   const del=(id)=>{
//     dispatch( REMOVE_CART_ITEMS(id))
//   }

  
//   const total=()=>{
//     let Price=0
//     getdata.map((ele,k)=>{
//      Price=ele.price * ele.quantity+Price
//     })
//     setPrice(Price)
//   }
  
//   useEffect(()=>{
//     total()
//   },[total])
//     return(
//         <>
//         <h1>Buy card Items</h1>


//         <div style={{marginLeft:"30%"}}>
//            {
//           getdata.length
//           ?
//           <div className='card_details'style={{width:"340px",padding:10}}  >
//             <Table >
//               <thead>
//                 <tr>
//                   <th>Photo</th>
//                   <Link to={"/productdetails/:id"}> <th>Details</th></Link>
                 
//                 </tr>
//               <tr></tr>
//               </thead>           
//               <tbody>
//                 {
//                   getdata.map((eachobject)=>{
//                     return(
//                       <>
//                       <tr key={eachobject.id}>
//                        <td >
//                        <Link to={`/productdetails/${eachobject.id}`} > <img src={eachobject.images[0]} alt='Card' style={{height:"90px",width:"90px"}}></img>   </Link>
//                   </td>
//                   <td >
//                  <p> <strong>Brand</strong> : {eachobject.brand} </p>
//                  <p> <strong>Category</strong> : {eachobject.category} </p>
//                  <p> <strong>Price</strong> : ₹ {eachobject.price} </p>
//                  <p> <strong>Quantity</strong> : {eachobject.quantity}</p>
//                  <p style={{color:"red",cursor:"pointer",fontSize:20}} onClick={()=>del(eachobject.id)} > <i className='fas fa-trash ' ></i></p>
//                 </td>
//                 </tr>
//                       </>
//                     )
//                   })
//                 }
//                 <p><strong>Total</strong> : ₹ {price}</p>
//                 {/* <button onClick={del1}>Buy Now</button> */}
//                 <Link to={"/Buying"}><button>Buy Now</button></Link>
//               </tbody>
//             </Table>
//             </div>
//             :
//             <div>
//             <Button variant="light" className="close-button" onClick={closeCart}> <i className="fas fa-close smallclose" style={{cursor:"pointer"}} ></i></Button>
//             <p>Your card is empty</p>
//             </div>
//         }
//         </div>


//         </>
//     )
// }
// export default Cardbuy

import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link ,useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_CART_ITEMS } from '../../Redux/Action/Action';

function Cardbuy() {
    const [price, setPrice] = useState(0);
    const getData = useSelector((state) => state.ReducerAction.card);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const del = (id) => {
        // dispatch(REMOVE_CART_ITEMS(id));
        const isConfirmed = window.confirm("Are you sure you want to remove this item from the cart?");
        if (isConfirmed) {
            dispatch(REMOVE_CART_ITEMS(id));
            navigate("/");
        }
    };

    const total = () => {
        let Price = 0;
        getData.map((ele) => {
            Price += ele.price * ele.quantity;
        });
        setPrice(Price);
    };

    useEffect(() => {
        total();
    }, [total]);

    // Inline styles for the container and card details
    const containerStyle = {
        backgroundImage: "url('https://forms.atechnologies.com/wp-content/uploads/2019/01/Forms_Background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height:"100%"
    };

    const cardDetailsStyle = {
        width: "60%", // Adjust the width
        padding: "20px", // Add padding around the details
        backgroundColor: "#A295C9", // Light background with opacity
        borderRadius: "8px", // Rounded corners
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Box shadow
        marginBottom: "20px", // Margin at the bottom\
        // backgroundColor:"#8bc0ca"
            backgroundColor:"#8398ff91"
    };
  

    return (
        <div style={containerStyle}>
            <h1 style={{color:"white"}}>Buy Card Items</h1>
            <div style={cardDetailsStyle}>
                {getData.length ? (
                    <table >
                        <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <hr></hr>
                        <tbody>
                            {getData.map((eachObject) => (
                                <tr key={eachObject.id}>
                                    <td>
                                        <Link to={`/productdetails/${eachObject.id}`}>
                                            <img src={eachObject.images[0]} alt="Card" style={{ height: "90px", width: "90px" }} />
                                        </Link>
                                    </td>
                                    
                                    <td>
                                        <p><strong>Brand:</strong> {eachObject.brand}</p>
                                        <p><strong>Category:</strong> {eachObject.category}</p>
                                        <p><strong>Price:</strong> ₹{eachObject.price}</p>
                                        <p><strong>Quantity:</strong> {eachObject.quantity}</p>
                                        <p style={{ color: "red", cursor: "pointer", fontSize: 20 }} onClick={() => del(eachObject.id)}>
                                            <i className="fas fa-trash"></i>
                                        </p>
                                        <hr></hr>
                                    </td>
                                </tr>
                            ))}
                            <p><strong>Total:</strong> ₹{price}</p>
                            <Link to="/Buying">
                                <button className="but">Buy Now</button>
                            </Link>
                        </tbody>
                    </table>
                ) : (
                    <div>
                        <Button variant="light" className="close-button">
                            <i className="fas fa-close smallclose" style={{ cursor: "pointer" }}></i>
                        </Button>
                        <p>Your cart is empty</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cardbuy;




