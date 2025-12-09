import React from 'react'

const card = (props) => {
    
    console.log(props.userDetails)
    const userDetails = props.userDetails

  return (
    <div>
        {
            userDetails.map((userOne, idx) => (
                <div className="card" key={idx}>
                    <h4><b>{userOne.user}</b></h4>
                    <p>{userOne.designation}</p>
                </div>
                )
            )
        }
		
	</div>
  )
}

export default card