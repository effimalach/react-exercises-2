import React,{useState} from 'react';
import './Counter.css';

function Counter() {
	const [num, setNum] = useState(0)
	return (
		<div className="Counter">
			<p>Make the button increase the value:</p>
			<button onClick={()=>setNum((n)=>n+1)}>Increase</button>
			<div className="Counter__value">{num}</div>
		</div>
	)
}

export default Counter;
