import { useState } from "react";

/* 
// setup state property, just like we do with useState
// capture values
// if there is localStorage data, use that, else use initial data
// update localStorage when needed
// Don't forget to:
//   1. parse data from localStorage (JSON.parse)
//   2. stringify new data before storing it (JSON.stringify)
 */
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    /*       
       // branching logic to define the initial value,
        reading from localStorage if it's there
 */
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
    /* 
    // is the key already in local storage?
    // otherwise, use the initial value passed in
 */
  });

  const setValue = (val) => {
    /* 
     // implement localStorage write functionality
 */

    setStoredValue(val);
    window.localStorage.setItem(key, JSON.stringify(val));
  };
  return [storedValue, setValue];
};

/* 
1. Imported useState hook where we are creating our localStorage component
import {useState} from 'react'

2.Created localStorage=(key,initialValue)=>{} , with two parameters ie key, initialValue 

3. Defined our state and assigned a callback function with our useState() ie:
[storedValue, setStoredValue]=useState(()=>{})


*/
