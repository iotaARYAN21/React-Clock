import React from "react";
import {useState,useEffect} from "react";
import "./App.css" 
function App(){
  const [time , setTime] = useState(new Date());
  useEffect(()=>{
    const interval = setInterval(()=>{
      setTime(new Date());
    },1000);
    return ()=>clearInterval(interval);
  },[]);
  const seconds = (time.getSeconds()/60)*360;
  const minutes = (time.getMinutes()/60)*360 + (time.getSeconds()/10);
  const hours = (time.getHours()%12 / 12)*360 +(time.getMinutes()/2);
  return <div className="container">
    
        <div className="clock">
          <div className="hand hour" style={{transform:`translate(0,-50%)  rotate(${hours}deg)`}}>--------------H</div>
          <div className="hand minute" style={{transform:` translate(0,-50%) rotate(${minutes}deg)`}}>------------M</div>
          <div className="hand second" style={{transform:`translate(0,-50%) rotate(${seconds}deg)`}}>---------S</div>
          <div className="dot"></div>
          {
            [...Array(12)].map((_,i)=>(
              <div key={i} className="number" style={{transform:`rotate(${i * 30}deg) translate(180px)`}}>
                <p className="digits">{i === 0 ? 12 : i}</p>
              </div>
            ))
          }
        </div>
        {/* <h1 className="title">Aryan</h1> */}
    </div>
}
export default App;