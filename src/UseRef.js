import React, {useState,useEffect,useRef} from 'react';
const UseRef=()=>{
  const[myData, setMyData]=useState("");
  // const [count,setCount]=useState(0);
  const count=useRef(10);
  const inputRef = useRef(null); 
  console.log(count);
  const changeStyle = () => {
    inputRef.current.style.backgroundColor = 'lightblue'; 
  };
  useEffect(()=>{
    count.current=count.current+1;
  },[myData])
  return (
    <>
    <input ref={inputRef} type="text" value={myData} onChange={(e)=>setMyData(e.target.value)}></input>
    <p> The number of times renderd: {count.current}</p>
    <button onClick={changeStyle}>Submit</button>
    </>

  )
}
export default UseRef;