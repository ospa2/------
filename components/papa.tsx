import React, { useState } from 'react';
import {Sin} from './sin';
import Link from 'next/link';
import { Button } from './ui/button';

function Papa() {
  const [message, setMessage] = useState('Hello from Parent!');

  // Колбэк, который будет вызван дочерним компонентом
  const updateMessage = () => {
    setMessage(prevCount => prevCount + 3);
  };
  function sobes(){
    for (let i = 0; i <= 5; i++) {
      setTimeout(function () 
      {
        console.log(i)
      }, i*100);
    }
  }
  

  return (
    <>
      <h1>Parent Component</h1>
      <p>Message: {message}</p>

      {/* Передаем колбэк в дочерний компонент */}
      <Sin onTxtchange={updateMessage} />
      <Link href='/pagetwo'>
        <Button>
          tghj
        </Button>
      </Link>
      <Button onClick={sobes}>
        test
      </Button>
    </>
    
  );
}

export default Papa;