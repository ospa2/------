import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button } from './ui/button';

export function Sin({ onTxtchange }) {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        onTxtchange()
    }
    const timeClick = async () => {
      console.log(1);
      setTimeout(() => console. log (2));
      setTimeout(() => {
      console.log(3)
      Promise.resolve().then(() => console.log(3.1))
      }, 2220);
      Promise.resolve().then(() => console.log(4)); setTimeout(() => console.log (5));
      console.log(6)
    }

    useEffect(() => {
        const interval = setInterval(() => {
          setCount(prevCount => prevCount + 1);
        }, 10000); // 1000 миллисекунд = 1 секунда
    
        // Очистка таймера при размонтировании компонента
        return () => clearInterval(interval);
      }, []);


  return (
    <div>
     {count}
     <button onClick={handleClick}>j</button>
     <Button variant={'link'} onClick={timeClick}>nums</Button>
    </div>
  )
}