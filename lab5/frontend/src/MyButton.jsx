import React from 'react'
import {useState} from 'react'

const MyButton = () => {
    // let click=0;
    const [click, setClick] = useState(0);
    function handleClick() {
        // alert("Button Clicked");
        setClick(click + 1);
        console.log("Button Clickrd:",click);
    };
    function handleClickN() {
        // alert("Button Clicked");
        setClick(click - 1);
        console.log("Button Clickrd:",click);
    };
  return (
    <div>
    <p>MyButton</p>
    <h2>Click Count: {click}</h2>
    <button onClick={handleClick}> click possitive</button>
    <button onClick={handleClickN}> click negative</button>
    </div>
  )
};

export default MyButton;