import React, { useState } from 'react'

const mybutton = (props) => {

    const [num, setNum] = useState(0);

    const changeValue = () => {
        setNum(num+10)
    }

    //{"name": "Hit","address": "KTN"}

    const [user, setUser] = useState({"id": "1", "name": "Suniti","address": "JBP"})

    const updateUser = () => {
        setUser(prev =>({...prev, 
                        address:"Raipur"})
                    )
        console.log(user);
    }

    const [numArr, setAddNum] = useState([10,20,30]);

    const addNum = () => {
        const newNum = [...numArr] // newNum is a copy of numArr - destructure
        newNum.push(40)

        setAddNum(newNum)
        
    }

  return (
    <div className="component">
        <h1>My button Intro with hooks</h1>
        <button className="my-button" onClick={changeValue}>Click and change value {num}</button>
        
        <p>{user.name}  {user.address}</p>
        <button className="my-button" onClick={updateUser}>Click and change user</button>

        <p>check console for array {numArr}</p>
        <button className="my-button" onClick={addNum}>Click to add new num 40</button>
    </div>
  )
}

export default mybutton