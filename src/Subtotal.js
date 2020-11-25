import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'

function Subtotal() {
    const [{basket}, dispatch] = useStateValue()
    const totalPriceOfBasket = basket.reduce((currentTotal, basketItem)=>{
        return basketItem.price + currentTotal
    }, 0)
    
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* part of homework */}
                            Subtotal ({basket?.length} items): 
                            <strong>
                                £{totalPriceOfBasket}
                            </strong>
                        </p>
                        <small className="subtotal__gift">
                            <input
                                type="checkbox" 
                            />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0} //part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"£"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
