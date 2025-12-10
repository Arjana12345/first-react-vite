import React, { useState, useRef } from 'react'



const MyForm = () => {

    const [fname, setFName] = useState('') // hook
    
    // Create a ref to access the input element directly
    const lname = useRef(null); // hook
    
    const [allUser, setUser] = useState([])


    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Form submited");
        console.log(fname);
        console.log(lname.current.value);
        
        let lastname = lname.current.value;
        
        // add user into array
        const copyAllUser = [...allUser];

        copyAllUser.push({fname,lastname})
        setUser(copyAllUser)
        
        console.log(allUser);

        // now do empty the form
        setFName('')
        lname.current.value = ''

    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setFName(e.target.value);
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <h4>{fname}</h4>
            <input type="text" value={fname} placeholder = "Enter first name" onChange={handleChange}/> <br/>
            <input type="text" ref={lname} placeholder = "Enter last name"/><br/>
            
            <button className="my-button">Submit</button>
        </form> 
        
    </div>

  )
}

export default MyForm