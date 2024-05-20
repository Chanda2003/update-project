

import React, { useState } from "react";
import "./Buying.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Card from "react-bootstrap/Card";
import { CLEAR_ALL } from '../../Redux/Action/Action';

function Buying() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNo: '',
        alternatePhoneNo: '',
        emailId: '',
        pinCode: '',
        state: '',
        city: '',
        houseNo: '',
        roadName: '',
        landmark: '',
        paymentMethod: 'cash_on_delivery',
        cardNumber: '',
        cardHolderName: '',
        expiryDate: '',
        cvv: ''
    });

    const [purchaseSuccess, setPurchaseSuccess] = useState(false);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(CLEAR_ALL());
        // Set the success state to true
        setPurchaseSuccess(true);
    };

    const handleClose = () => {
        setPurchaseSuccess(false);
        navigate("/");
    };
    
    return (
        <div className="buying-container">
            <Card className="buying-card">
                <Card.Body className="Body">
                    <h4 className="title">Delivery Address</h4>
                    <form onSubmit={handleSubmit} className="buying-form">
                   <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="form-input"
                            required
                        /><br />
                        <input
                            type="tel"
                            name="phoneNo"
                            placeholder="Phone No"
                            value={formData.phoneNo}
                            onChange={handleInputChange}
                            className="form-input"
                            required
                        /><br />
                        <input
                            type="tel"
                            name="alternatePhoneNo"
                            placeholder="Alternate Phone No"
                            value={formData.alternatePhoneNo}
                            onChange={handleInputChange}
                            className="form-input"
                            required
                        /><br />
                        <input
                            type="email"
                            name="emailId"
                            placeholder="Email Id"
                            value={formData.emailId}
                            onChange={handleInputChange}
                            className="form-input"
                            required
                        /><br />
                        <input
                            type="text"
                            name="pinCode"
                            placeholder="Pin Code"
                            value={formData.pinCode}
                            onChange={handleInputChange}
                            className="form-input"
                            required
                        /><br />
                        <input
                            type="text"
                            name="state"
                            placeholder="State"
                            value={formData.state}
                            onChange={handleInputChange}
                            className="form-input"
                            required
                        /><br />
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="form-input"
                            required
                        /><br />
                        <input
                            type="text"
                            name="houseNo"
                            placeholder="House No"
                            value={formData.houseNo}
                            onChange={handleInputChange}
                            className="form-input"
                            required
                        /><br />
                        <input
                            type="text"
                            name="roadName"
                            placeholder="Road Name"
                            value={formData.roadName}
                            onChange={handleInputChange}
                            className="form-input"
                            required
                        /><br />
                        <input
                            type="text"
                            name="landmark"
                            placeholder="Landmark"
                            value={formData.landmark}
                            onChange={handleInputChange}
                            className="form-input"
                            required
                        /><br />

                        {/* Payment Method Selection */}
                        <h4 className="title">Payment Method</h4>
                        <div className="payment-options">
                            <div className="payment-option">
                                <input
                                    type="radio"
                                    id="cash_on_delivery"
                                    name="paymentMethod"
                                    value="cash_on_delivery"
                                    checked={formData.paymentMethod === "cash_on_delivery"}
                                    onChange={handleInputChange}
                                    required
                                />
                                <label htmlFor="cash_on_delivery" className="payment-label">Cash on Delivery</label>
                            </div>
                            <div className="payment-option">
                                <input
                                    type="radio"
                                    id="credit_card"
                                    name="paymentMethod"
                                    value="credit_card"
                                    checked={formData.paymentMethod === "credit_card"}
                                    onChange={handleInputChange}
                                    required
                                />
                                <label htmlFor="credit_card" className="payment-label">Credit/Debit Card</label>
                            </div>
                        </div>

                        {/* Credit Card Details Inputs */}
                        {formData.paymentMethod === "credit_card" && (
                            <div className="card-details">
                                <input
                                    type="text"
                                    name="cardNumber"
                                    placeholder="Card Number"
                                    value={formData.cardNumber}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    required
                                /><br />
                                <input
                                    type="text"
                                    name="cardHolderName"
                                    placeholder="Card Holder Name"
                                    value={formData.cardHolderName}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    required
                                /><br />
                                <input
                                    type="text"
                                    name="expiryDate"
                                    placeholder="Expiry Date (MM/YY)"
                                    value={formData.expiryDate}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    required
                                /><br />
                                <input
                                    type="password"
                                    name="cvv"
                                    placeholder="CVV"
                                    value={formData.cvv}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    required
                                /><br />
                            </div>
                        )}

                        <button type="submit" className="submit-button">Buy Now</button>
                    </form>
                    {purchaseSuccess && (
                        <div className="popup">
                            <div className="popup-content">
                                <p>Your Order is Placed successfully!</p>
                                <button onClick={handleClose}>Close</button>
                            </div>
                        </div>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
}

export default Buying;













































