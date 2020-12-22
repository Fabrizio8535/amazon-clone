import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from "./reducer"
import { useHistory } from 'react-router-dom'

function Subtotal() {
    //Gives us the browser history
    const history = useHistory()
    const [{basket, user}, dispatch] = useStateValue()

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* part of homework */}
                            Subtotal ({basket?.length} items): 
                            <strong>
                                {value}
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
                value={getBasketTotal(basket)} //part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"£"}
            />
            <button
                onClick={e => user? history.push('/payment') : history.push('/login')}>
                Proceed to Checkout
            </button>
        </div>
    )
}

export default Subtotal
