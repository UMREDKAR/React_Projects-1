import React, { useState } from "react";
import { useEffect } from "react";

function DisplayItems(props)
{
       const take = props.sending;
       const[del,setDel] = useState('');    
       
       useEffect(() => {
          localStorage.removeItem(props.ids, JSON.stringify(del));
        },[del]);

       //console.log();
       
       let first;
       let sec;
       let third;
       let uid= props.ids;
       console.log(uid);
       function delHandler(event)
       {
        setDel(take);
       }

          // let store = props.lists.map((list)=>(
          //   <li key={list.id}>
          //    {list.price} - {list.category} - {list.name}
          //    <button>Delete Product</button>
          //   </li>
          // ))
          first = props.lists.filter(lis => lis.category=='Electronics').map(filteredList => (
                <li key={filteredList.id}>
                {filteredList.price} - {filteredList.category} - {filteredList.name}
                <button onClick={delHandler}>Delete Product</button>
                </li>
           ))
         
          sec = props.lists.filter(lis => lis.category=='Food').map(filteredList => (
                <li key={filteredList.id}>
                {filteredList.price} - {filteredList.category} - {filteredList.name}
                <button onClick={delHandler}>Delete Product</button>
                </li>
           ))
         
          third = props.lists.filter(lis => lis.category=='Skincare').map(filteredList => (
                <li key={filteredList.id}>
                {filteredList.price} - {filteredList.category} - {filteredList.name}
                <button onClick={delHandler}>Delete Product</button>
                </li>
           ))
         
    return(
        <>
        <h1>Products</h1>
        <div>
            <h4>Electronic Items</h4>
            <p>{first}</p>
        </div>

        <div>
          <h4>Food Items</h4>
          <p>{sec}</p>
        </div>

        <div>
          <h4>Skincare Items</h4>
          <p>{third}</p>
        </div>
        </>
    );
}

export default DisplayItems;