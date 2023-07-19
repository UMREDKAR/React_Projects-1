import React, { useState } from 'react';
import { useEffect } from 'react';


function Userdetails(props)
{

    const[productid , setProductId] = useState('');
    const[selling , setSelling] = useState('');
    const[productname , setProductName] = useState('');
    const[choose,setChoose] = useState('Electronics');
    let send;
    const[contain,setContain] = useState('');

    useEffect(() => {
        localStorage.setItem(productid, JSON.stringify(contain));
      }, [contain]);
 
    function idHandler(event)
    {
       setProductId(event.target.value);
    }

    function sellingHandler(event)
    {
        setSelling(event.target.value);
    }

    function nameHandler(event)
    {
        setProductName(event.target.value);
    }

    function chooseHandler(event)
    {
      setChoose(event.target.value);
    }

    function submitHandler(event)
        {
          event.preventDefault();
            const obj={
            expenseamount:selling,
            description:productname,
            category:choose
          }

          send=obj;
          props.onAddList(productid,selling,choose,productname);
          props.onAddSend(send);
          props.onIdSend(productid);
          setContain(obj);
          //console.log(obj.category);
        }


    

    return(
        
        <form onSubmit={submitHandler}>
        <label>Product ID : </label>
        <input type='number' value={productid} onChange={idHandler}></input>

        <label>Selling Price : </label>
        <input type='number' value={selling} onChange={sellingHandler}></input>

        <label>Product Name : </label>
        <input type='text' value={productname} onChange={nameHandler}></input>
  
         <label>Choose a Category </label>
         <select value={choose} onChange={chooseHandler}>
            <option>Electronics</option>
            <option>Food</option>
            <option>Skincare</option>
         </select>

         <button>Add Product</button>
        </form>
        
        
    );
}

export default Userdetails;