import React, { useState } from 'react'

const mybutton = () => {

    const [num, setNum] = useState(0);

    function changeValue(){
        setNum(num+10)
    }

  return (
    <div>
        <h1>My button Intro with hooks</h1>
        <button className="my-button" onClick={changeValue}>Click and change value {num}</button>
    </div>
  )
}

export default mybutton