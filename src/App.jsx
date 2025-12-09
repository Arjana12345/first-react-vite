import React from 'react'
import Card from './components/card'

const App = () => {
	const user = "Arjana"
	const designation = "Software & Engineer"

	const userData = [	{"id":"1", "user":user,"designation":designation},
						{"id": "2", "user":"Kartik","designation":"Front end developer"}
					];
  return (
	<div>
		<Card userDetails={userData}/>
	</div>
   	
  )
}

export default App