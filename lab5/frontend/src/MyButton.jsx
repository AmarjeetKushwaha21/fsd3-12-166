import React from 'react'

const MyButton = () => {
    let click=0;
    function handleClick() {
        alert("Button Clicked");
        click++;
        console.log("Button Clickrd:",click);
    };
  return (
    <div>
    <p>MyButton</p>
    <h2>Click Count: {click}</h2>
    <button onClick={handleClick}> click me</button>
    </div>
  )
};

export default MyButton;