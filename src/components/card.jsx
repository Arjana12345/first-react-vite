import React from 'react'

const card = (props) => {
    
    console.log(props.userDetails)
    const userDetails = props.userDetails

    const handleClick = (id) => {
        console.log("called handleClicked");
        console.log(id);
    }

  return (
    <div className="mainCom">
        {
            userDetails.map((userOne, idx) => (
                <div className="card" key={idx}>
                    <h4><b>{userOne.user}</b></h4>
                    <p>{userOne.designation}</p>
                    <button onClick={handleClick(userOne.id)}>Remove</button>
                </div>
                )
            )
        }
		
	</div>
  )
}

export default card