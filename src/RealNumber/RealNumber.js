import React,{useState} from 'react';
import './RealNumber.css';

function RealNumber() {


const [show, setShow] = useState(true)

	return (
		<div className="RealNumber">
			<p>
				The button near the input should be visible only if the input contains <u>only</u> numbers.
				Examples:<br />
				"238764" - <span className="value--valid">valid</span> <br />
				"A13" - <span className="value--invalid">invalid</span>
			</p>

			<input type="text" className="text-box" onChange={(e)=>e.target.value.match(/^[0-9]+$/) != null ? setShow(true) : setShow(false)} />
			{show && <button >Submit</button>}
		</div>
	)
}

export default RealNumber;
