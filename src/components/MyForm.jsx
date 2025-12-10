import React, { useState } from 'react'



const MyForm = () => {

    const [fname, setFName] = useState('')
    const [style, setStyle] = useState('green')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Form submited");
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setFName(e.target.value);
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <h4>{fname}</h4>
            <input type="text"  placeholder = "Enter first name" onChange={handleChange}/> <br/>
            <input type="text"  name="lname" placeholder = "Enter last name"/><br/>
            
            <button className="my-button">Submit</button>
        </form> 
    </div>

  )
}

export default MyForm