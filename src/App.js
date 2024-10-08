import React,{createContext} from 'react';
import Child1 from './Child1';
const NameContext=createContext();
const AgeContext=createContext();
function App(){
  const name="Satakratu";
  const age=28;
  return (
    <NameContext.Provider value={name}>
      <AgeContext.Provider value={age}>
        <Child1/>
      </AgeContext.Provider>
      </NameContext.Provider>
  )
}
export default App;