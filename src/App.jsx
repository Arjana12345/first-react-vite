import React from 'react'
import Card from './components/card'

const App = () => {
	const user = "Hello Arjana"
	const designation = "Software & Engineer"

	const userData = [	{"user":user,"designation":designation},
						{"user":"Kartik","designation":"Front end developer"}
					];
  return (
	<div>
		<Card userDetails={userData}/>
	</div>
   	
  )
}

export default App