import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Card from './components/card'
import Mybutton from './components/mybutton'
import MyForm from './components/MyForm'
import Storage from './components/Storage'
import ApiCalling from './components/ApiCalling'
import ExtraThing from './components/ExtraThing'


const App = () => {
	const user = "Arjana"
	const designation = "Software & Engineer"

	const userData = [	{"id":"1", "user":user,"designation":designation},
						{"id": "2", "user":"Kartik","designation":"Front end developer"}
					];
  return (
	<div style={{ position: 'relative', width: '100%', height: '100%', border: '0px' }} >
		<Home />		
		<Routes>
				<Route path= '/userDetails' element={<Card userDetails={userData} />}/>
				<Route path='/button' element={<Mybutton />} />
				<Route path='/form' element={<MyForm />} />
				<Route path='/localstorage' element={<Storage />} />
				<Route path='/apicalling' element={<ApiCalling />} />
				<Route path='/extra' element={<ExtraThing />} />
			</Routes>
	</div>
   	
  )
}

export default App