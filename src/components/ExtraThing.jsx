import React, { useState,useEffect } from 'react'

const ExtraThing = () => {

	
	const [a, setA] = useState(1);
	const [b, setB] = useState(1);

	const incrementA = () => {
		setA(a+1)
	}

	const incrementB = () => {
		setB(b+1)
	}


	// useEffect it is called parellel 
	useEffect(() => {
		console.log("Now useEffect calling");
	},[a]);
	

	return (
		<div>
			<button onClick={incrementA}>Increment A {a}</button>
			<button onClick={incrementB}>Increment B {b}</button>
		</div>
  	)
}

export default ExtraThing