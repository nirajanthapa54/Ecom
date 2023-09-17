import React, { useEffect } from 'react'
import "./style.css";
const UseEffect = () => {
const initialData=15;
const[myNum, setMyNum]=React.useState(initialData);

useEffect(()=>{
document.title=`chats(${myNum})`  
});
  return (
    <>
      <div className="center_div">
       <p>{myNum}</p>
        <div class="button2" onClick={()=>setMyNum(myNum+1)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      Increment
     </div>
     </div>
    </>
  );
};

export default UseEffect;
