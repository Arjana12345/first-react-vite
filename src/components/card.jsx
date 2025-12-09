import React from 'react'

const card = (props) => {
    
    console.log(props.userDetails)
  return (
    <div>
		<div className="card">
            <h4><b>{props.userDetails.user}</b></h4>
            <p>{props.userDetails.designation}</p>
        </div>
	</div>
  )
}

export default card