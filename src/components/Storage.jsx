import React, {useState} from 'react'

const Storage = () => {

    const [login, setCount] = useState('1');
    
    

    const handleClick = () => {
        console.log("login successfully");
        localStorage.setItem("loggedIn", login);
    }

    const handleLogout = () => {
        let isLogin = localStorage.getItem("loggedIn");
        if(isLogin === '1')
        {
            localStorage.removeItem("loggedIn")
            console.log("Log out successfully");
        }
        else
        {
            console.log("Already logout");
        }
        localStorage.clear()
    }

    return (
        <div className="component">
            <h1>Local Storage</h1>
            <button onClick={handleClick}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Storage