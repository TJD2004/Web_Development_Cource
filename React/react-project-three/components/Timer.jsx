import React from 'react'
import { useState, useEffect } from 'react'
import './Timer.css'

const Timer = () => {
    const [count, setCount] = useState(0);
    const [isRunnig, setIsRunning] = useState(false);
    
    useEffect(() => {
      let intervalid;
      
      if(isRunnig) {
        intervalid = setInterval(() => {
            setCount(count => count + 1);
        },1000);
      }
    
      return () => {
        clearInterval(intervalid);
      }
    }, [isRunnig]);
    
    const startCount = () => {
        setIsRunning(true);
    }

    const stopCount = () => {
        setIsRunning(false);
    }

    return (
        <div className='Timer-container'>
            <h2>Timmer Counter</h2>
            <h3>count : {count}</h3>
            <div className='btn-container'>   
                <button onClick={startCount} disabled={isRunnig}>Click Here To Start Count</button>
                <button onClick={stopCount} disabled={!isRunnig}>Click Here To Stop Count</button>
            </div>
        </div>
  )
}

export default Timer