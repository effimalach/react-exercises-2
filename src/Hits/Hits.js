import React,{useState,useEffect} from 'react';
import './Hits.css';

function Hits() {
const [hints, setHints] = useState([]);

useEffect(() => {
	fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/hits.json')
	.then((res)=>res.json())
	.then((data)=>setHints(data))
}, [])

	return (
		<div className="Hits">
			<h3>Hits:</h3>
			<p>
				Use the following API to make a list of hit titles:<br />
				<code>https://netcraft2.s3-eu-west-1.amazonaws.com/hits.json</code>
			</p>
			<ul>
               {hints.map((hint,i)=><li key={i}>{hint.title}</li>)}
			</ul>
		</div>
	)
}

export default Hits;
