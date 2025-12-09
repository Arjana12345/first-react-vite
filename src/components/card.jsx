import React from 'react'

const card = () => {
    
    const user = "Hello Arjana"
	const designation = "Software & Engineer"

  return (
    <div>
		<div className="card">
            <h4><b>{user}</b></h4>
            <p>{designation}</p>
        </div>
	</div>
  )
}

export default card