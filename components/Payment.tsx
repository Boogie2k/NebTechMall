import React, { useState } from "react";
import emailjs from '@emailjs/browser'
import { usePaystackPayment } from "react-paystack";

const Payment = ({cart}:any) => {
let warn ='Field cannot be empty'

    let amount =0;
  let totalQty=0


    cart.map((item:any)=>{
        console.log(item)
        amount += item.total
        totalQty +=item.qty
    })
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
   const [num, setNum] = useState("");
    const [city, setCity] = useState("");
  const [state, setState] = useState("");
   const [address, setAddress] = useState("");

   const[isCity, setIsCity]= useState(true)
   const[isName, setIsName]= useState(true)
   const[isNum, setIsNum]= useState(true)
   const[isState, setIsState]= useState(true)
   const[isAddress, setIsAddress]= useState(true)
   const[isEmail, setIsEmail]= useState(true)
   



   const sendEmail=()=>{
var templateParams=  {
  name,
  email,
  num,
  city,
  state, 
  address,

   item: cart.map((item:any) => {
        return `${item.product} x ${item.qty} $${item.price}`;
      }),
  total:amount,
itemsAmount: `${totalQty} items`
  
}

emailjs
      .send(
        "service_anfskt6",
        "template_ob4rxws",

        templateParams,
        "rN075nTbsHHFAVFog"
      )
      .then(
        (result:any) => {
          console.log(result.text);
        },
        (error:any) => {
          console.log(error.text);
        }
      )
      .catch((err:any) => console.log(err));

}

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    name: name,
    amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    phoneNumber:num,
    publicKey: "pk_test_d0725f67a2558608e3a5cb2d22d197d2eeb3cc5c",
  };

  // you can call this function anything
  const onSuccess = (reference:any) => {

    sendEmail()
    // Implementation for whatever you want to do with reference and after success call.
    alert(reference);
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  console.log(amount)
  const initializePayment = usePaystackPayment(config);

const validate=()=>{
  name? setIsName(true):setIsName(false)
  email?setIsEmail(true):setIsEmail(false)
   num?setIsNum(true):setIsNum(false)
    address?setIsAddress(true):setIsAddress(false)
     state?setIsState(true):setIsState(false)
      city?setIsCity(true):setIsCity(false)
   }

  const concludeCheckout=()=>{

    if(name&&email){
      initializePayment(onSuccess, onClose)}
    else {
     validate()
    }
  }
  return (
    <div className="my-10 ">
      <form className="flex flex-col">
        <div className="mb-5">
 <h4 className="mb-4 text-xl underline decoration-orange-400 ">Delievery Details</h4>

<div>
     <p className="text-slate-400 " >State*</p> 
    <input className={ `${isState?' bg-blue-200':'bg-red-200'} ${'border-b-2 border-gray-950 mt-4'}`} type='text'  value={state}
          onChange={(e) => {
            setState(e.target.value);
            setIsState(true)
          }}/>
           {isState?'':<p className="text-red-300"> {warn}</p>} 
          </div>
    <div>
         <p className="text-slate-400 ">City*</p> 
    <input  className={ `${isCity?'bg-blue-200':'bg-red-200'} ${'border-b-2 border-gray-950   my-4'}` }  type='text' value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setIsCity(true)
          }}/>
           {isCity?'':<p className="text-red-300"> {warn}</p>} </div>
             <div>
     <p className="text-slate-400 " >Address*</p> 
    <input  className={ `${  isAddress?' bg-blue-200':'bg-red-200'} ${'border-b-2 border-gray-950 mt-4'}`}  type='text'  value={address}
          onChange={(e) => {
            setAddress(e.target.value);
            setIsAddress(true)
          }}/>
           {isAddress?'':<p className="text-red-400"> {warn}</p>} 
          </div> 
    </div>

        <div>
        <h4 className=" mb-4 text-xl underline decoration-orange-400 ">Contact Details</h4>
        <div>
            <p className="text-slate-400">Name*</p>
        <input
         className={` ${isName?"bg-blue-200":"bg-red-200 "} ${' mt-2'}`}
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setIsName(true)
          }}
       
        />  {isName?'':<p className="text-red-300"> {warn}</p>} </div>
        
        <div>
             <p className="text-slate-400 ">Email*</p> 
            <input
         className={ `${isEmail?' bg-blue-200':'bg-red-200'} ${'border-b-2 border-gray-950 mt-4'}`}
          type="Email"
          value={email}
     
          onChange={(e) => {
            setEmail(e.target.value);
            setIsEmail(true)
          }}
        /> {isEmail?'':<p className="text-red-400"> {warn}</p>} </div>
        <div>
              <p className="text-slate-400">Phone Number*</p>
         <input
          className={ `${ isNum?' bg-blue-200':'bg-red-200'} ${'border-b-2 border-gray-950 mt-4'}`}
          type="number"
          value={num}
         
          onChange={(e) => {
            setNum(e.target.value);
            setIsNum(true)
          }}
          
        />  {isNum?'':<p className="text-red-400"> {warn}</p>}</div></div>
      </form>

      <button
      className="bg-orange-400 text-slate-200 p-2 rounded-xl my-2 mx-10"
        onClick={concludeCheckout}
      >
        Checkout
      </button>
    </div>
  );
};

export default Payment;
