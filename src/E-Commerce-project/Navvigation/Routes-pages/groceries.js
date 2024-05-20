



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { ADD_TO_CART } from '../../Redux/Action/Action';
import { Link } from 'react-router-dom';
import { BasicExample } from '../../Spinners/Spinner';
import "./groceries.css";

function Groceries() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(response => {
                setProducts(response.data.products);
                setFilteredProducts(response.data.products);
            });
    }, []);

    // Function to handle adding a product to the cart
    const addToCart = (product) => {
        dispatch(ADD_TO_CART(product));
    };

    // Function to filter products based on search term
    const handleSearch = () => {
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    };



    const filterProduct = (cat) => {
        if (cat === "all") {
            setFilteredProducts(products); // Show all products
        } else {
            const updatedProducts = products.filter((item) => item.category === cat);
            setFilteredProducts(updatedProducts);
        }
    };

    return (
        <div style={{ padding: '20px'}}>
            <h2 style={{ marginLeft: "40%" }}>Latest Products</h2>
            <hr />
            <div style={{ marginLeft: "15%" }}>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{borderRadius:"30px",width:"50%",marginLeft: "8%"}}
                />
                <button onClick={handleSearch} style={{borderRadius:"30px"}}>Search</button>
                <br></br>
                <button className='but' onClick={() => filterProduct("all")}>ALL</button>
                <button className='but' onClick={() => filterProduct("laptops")}>Laptops</button>
                <button className='but' onClick={() => filterProduct("smartphones")}>Smart Phones</button>
                <button className='but' onClick={() => filterProduct("fragrances")}>Fragrances</button>
                <button className='but' onClick={() => filterProduct("skincare")}>Skin care</button>
            </div>
            <hr />
            {
                filteredProducts.length > 0 ?
                    filteredProducts.map((product) => (
                        <Card className="Card" key={product.id} style={{ width: '18rem' }}>
                            <Link to={`/${product.category}/${product.id}`}>
                                <Card.Img className="Image" variant="top" src={product.images[0]} />
                            </Link>
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <div style={{ fontSize: "20px", color: "black" }}>
                                    <span style={{ fontWeight: "bold", fontSize: "25px" }}>Price :</span> ₹ {product.price}
                                </div>
                                <br />
                                <Button variant="primary" style={{ width: "150px", margin: "2px" }} onClick={() => addToCart(product)}>Add to cart</Button>
                                <Link to={`/productdetails/buy/${product.id}`} style={{ textDecoration: "none", color: "white" }}>
                                    <Button variant="primary" style={{ width: "100px" }}>Buy Now</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    )) :
                    <div style={{ textAlign: 'center' }}><h4>No results found......</h4></div>
            }
        </div>
    );
}

export default Groceries;







