import React, {useState} from 'react'

export default function Registration() {
  const [name,setName]=useState('');
  const [age,setAge]=useState('');
  const handleSubmit =()=>{alert(`Name: ${name}, age: ${age}`);};
  
  return (<>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        NAME:
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name='name'/>
      </label>
      <label htmlFor="age">
        AGE:
        <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} name='age'/>
      </label>
    </form>
  </>);
};
