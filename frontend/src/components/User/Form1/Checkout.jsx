import React, { useEffect } from "react";
import Header from "../Header/Header";
import OrderDatatable from "./OrderDatatable";
import { API } from '../../../api/user'
import { useDispatch, useSelector } from 'react-redux';
import { orders,getOrder } from '../../../features/auth/user/orderSlice'
import { Container } from "react-bootstrap";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { createRazorOrder, verifyAndPay } from "../../../api/user";
import { notification } from "../../../utils/notification";

import './OrderPage.scss'
import { toast } from 'react-toastify'
// import { checkout } from "../../../../../backend/routes/userRoutes";
function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams()
  const {orders} =useSelector((state)=> state.allorder);
  const { user } = useSelector((state) => state.auth)
   useEffect(() => {
   dispatch(getOrder(id))
  },[]);


  //  console.log("order",orders.bride);
  const loadRazorpay = async () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => {
      alert("Razorpay failed to loaddd");
    };

    script.onload = async () => {
      try {

        const result = await API.post("/create-order", {
          amount: 100,
        })
        const { amount, id: order_id, currency } = result.data;
        const { data: { key: razorpaykey },
        } = await API.get("/get-razor-key")
        const options = {
          key: razorpaykey,
          amount: amount.toString(),
          currency: currency,
          name: "wedeve",
          description: "booking payment",
          order_id: order_id,
          handler: async function (response) {
            const result = await API.post("/verify-payment", {
              amount: amount,

              user: user._id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaysignature: response.razorpay_signature,
            });

            toast.success("Payment was Successfull")
            navigate('/photos')


          },
          prefill: {
            name: "WEDEVE",
            email: "wedeveofficial@gmail.com",
            contact: "9999999999",
          },
          notes: {
            address: "wedeve"
          },
          theme: {
            color: "#80c0f0"
          }
        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open();
      } catch (error) {
        console.log("error", error);

      }
    }
    document.body.appendChild(script)
  }
  return (
    <>

      <Header />
      <div className="col-full">
        <div className="col-half">
            <button onClick={loadRazorpay}>Proceed to Payment</button>



        </div>



        <div className="col-half">
          <OrderDatatable />
        </div>
        </div>
      </>
      );
}

      export default Checkout;
