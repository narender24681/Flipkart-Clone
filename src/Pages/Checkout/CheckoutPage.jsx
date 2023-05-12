import { Input, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import "./Checkout.css";

export function CheckoutPage() {
    const navigate = useNavigate();
    return (
        <div id="checkout-container">
            <Text className="checkout-h2">Secure Checkout</Text>

            <div className="checkout-hr"></div>

            <Text className="checkout-h3">Delivery</Text>

            <Input borderColor="lightgrey" marginTop="15px" type="email" placeholder="Email" />

            <div className="checkout-two-input">
                <Input borderColor="lightgrey" width="48%" type="text" placeholder="First Name" />
                <Input borderColor="lightgrey" width="48%" type="text" placeholder="Last Name" />
            </div>

            <Input borderColor="lightgrey" marginTop="25px" type="text" placeholder="Address" />

            <div className="checkout-two-input">
                <Input borderColor="lightgrey" width="48%" type="text" placeholder="Address 2 (Optional)" />
                <Input borderColor="lightgrey" width="48%" type="text" placeholder="Postal Code" />
            </div>

            <div className="checkout-two-input">
                <Input borderColor="lightgrey" width="48%" type="text" placeholder="City" />
                <Input borderColor="lightgrey" width="48%" type="text" placeholder="Region (Optional)" />
            </div>

            <div className="checkout-two-input">
                <Input borderColor="lightgrey" width="48%" type="number" placeholder="Phone" />
                <Input borderColor="lightgrey" width="48%" type="text" placeholder="Location" />
            </div>

            <div className="checkout-hr"></div>

            <Text className="checkout-h3">Payment</Text>
            <Input borderColor="lightgrey" marginTop="15px" type="number" placeholder="Card Number" />

            <div className="checkout-two-input">
                <Input borderColor="lightgrey" width="48%" type="text" placeholder="MM/YY" />
                <Input borderColor="lightgrey" width="48%" type="text" placeholder="Security Code" />
            </div>

            <button onClick={() => {
                localStorage.removeItem("items1");
                navigate("/placeorder")}} id="checkout-place-order">Place Order</button>

            <Text textAlign="center">This order total is 100% guaranteed. There will be no additional charges due upon receipt.</Text>
        </div>
    )
}




export function Placeorder() {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setRedirect(true);
        }, 1500);
    }, []);

    if(redirect) {
        return <Navigate to="/"/>
    }

  return (
    <div id="placeholer-container">
        <h1 id="placeorder-h1">Your order is completed!</h1>
        <p id="placeorder-h3">You will be receiving a confirmation email with order details.</p>
    </div>
  )
}
