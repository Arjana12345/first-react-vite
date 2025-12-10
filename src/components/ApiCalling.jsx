import React from 'react'
import axios from 'axios';

const ApiCalling = () => {

	
    const getData = () => {
    	const response = fetch('https://jsonplaceholder.typicode.com/todos/1')
						.then(response => response.json())
						.then(json => console.log(json));
		console.log(response);
    }

	const getAxiosData = async () => {
		try	{
			const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
			console.log(response.data);
		}catch (err) {
			console.log(err);
		}finally {
			// this is called when we get data 
			// here we handle loader
			console.log("Final block executed");
		}
	}

  return (
    <div>
      	<button onClick={getData}>Get Data by fetch API</button><br/>
		<button onClick={getAxiosData}>Get Data by axios API</button>
    </div>
  )
}

export default ApiCalling