import React, { useState } from "react";
import Userdetails from "./Userdetails";
import DisplayItems from "./DisplayItems";

function App() {

  const[userList,setUserList] = useState([]);
  const[sends,setSends] = useState('');
  const[ide,setIde] = useState('');
  
  function addlistHandler(uId,uPrice,uCategory,uName)
  {
     setUserList((prevList)=>{
        return[...prevList,{id:uId , price: uPrice , category: uCategory , name: uName}];
     });
  }

  function sendHandler(curr)
  {
     setSends(curr)
  }

  function idHandler(any)
  {
   setIde(any)
  }


  return (
    <>
    <Userdetails onAddList={addlistHandler} onAddSend={sendHandler} onIdSend={idHandler}/>
    <DisplayItems lists={userList} sending={sends} ids={ide}/>
    </>
  );
}

export default App;
