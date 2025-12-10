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

    const handleClick = (id) => {
        console.log("handleClick called");
        console.log(id);

        const copyAllUser = [...allUser];

        copyAllUser.splice(id,1)

        console.log("deleted");

        setUser(copyAllUser) // 
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <h4>{fname}</h4>
            <input type="text" value={fname} placeholder = "Enter first name" onChange={handleChange}/> <br/>
            <input type="text" ref={lname} placeholder = "Enter last name"/><br/>
            
            <button className="my-button">Submit</button>
        </form> 
        <h2>All users</h2>
        <table border="1">
            <thead>
                <tr><th>Fname</th><th>Lname</th><th>Action</th></tr>
            </thead>
            <tbody>
            {
                allUser.map((userOne, idx) => (
                        <tr key={idx}>
                            <td>{userOne.fname}</td>
                            <td>{userOne.lastname}</td>
                            <td><button onClick={()=>{
                                handleClick(idx)
                            }}>Remove</button>
                            </td>
                        </tr>
                    )
                )
            }
            </tbody>
            <tfoot>
                <tr><th>Fname</th><th>Lname</th><th>Action</th></tr>
            </tfoot>
        </table>
    </div>

  )
}

export default MyForm