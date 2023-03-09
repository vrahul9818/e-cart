import React, { useContext, useCallback } from "react";
import { CartContext } from "./cont";
import "./cart.css";
import useRazorpay from "react-razorpay";

const Cart = () => {
  const { cartData } = useContext(CartContext);

  // razorPay display 

  
  const Razorpay = useRazorpay();
  const RazorPayDisp = useCallback(async(total) => {
    const options = {
      key: "rzp_test_dYfvheZpx3IoPD", 
      amount: `${total}`,
      currency: "INR",
      name: "E- cart",
      description: "Test Transaction",
      handler: function (res) {
        console.log(res)
      },
      prefill: {
        name: "Rahul Verma",
        email: "vrahul9818@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new Razorpay(options);
    rzp1.open();
  },[Razorpay])

 
  

  // calculate total price using reduce method
  const totalPrice = cartData.reduce(
    (acc, curr) => acc + parseInt(curr.price),
    0
  );

  return (
    <div className="cart-container">
      {cartData.map((cartItem) => {
        return (
          <div className="cart-item" key={cartItem.id}>
            <p>{cartItem.game_name}</p>
            <img
              src={`http://localhost:1337${cartItem?.game_image?.data?.attributes?.formats?.small?.url}`}
              alt={cartItem?.attributes?.game_name}
            />
            <span>
              <p className="price">{cartItem?.price}</p>
            </span>
          </div>
        );
      })}
      <p>grand total : {totalPrice}</p>
      <button onClick={()=>{RazorPayDisp(`${totalPrice+1}`)}}>amount : {totalPrice}</button>
    </div>
  );
};

export default Cart;
