import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { useStateValue } from './StateProvider'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue()

    const stripe = useStripe()
    const elements = useElements()

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = e=>{
        //do all the stripe fuction
    }

    const handleChange = event =>{
        setDisabled(event.empty)
        setError(event.error ? event.error.message : "")
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>

                {/* Payment Section  -- Delivery Address*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>10 Inverine Road</p>
                        <p>Charlton, London</p>
                    </div>
                </div>

                {/* Payment Section  -- Review Items*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {/* All products in baskets here */}
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment Section  -- Payment Method*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe magic here... */}
                        <form onSubmit={handleSubmit}>
                            <CardElement 
                                onChange={handleChange}
                            />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)} //part of the homework
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"£"}
                                />
                                <button disabled={
                                    processing || disabled || succeeded   
                                }>
                                    <span>
                                        {processing ? <p>Processing</p> :
                                        "Buy Now"
                                        }
                                    </span>
                                </button>
                            </div>

                            {/* ERROR */}
                            {error && <div>{error}</div>}
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
