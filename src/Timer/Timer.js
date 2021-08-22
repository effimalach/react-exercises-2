import React from 'react';
import './Timer.css';
import { useEffect, useState } from 'react';

function Timer() {

	const [time, setTime] = useState(0)

	useEffect(() => {

const timer = setInterval(() => {

	setTime((previouseValue)=>previouseValue+1)
}, 1000);
	return () => {clearInterval(timer)}
	}, [])





	return (
		<div className="Timer">
			<h3>Timer</h3>
			<p>
				Make a timer that counts the seconds.
				Update it every second.
			</p>
			<div className="Timer__value">{time}</div>
		</div>
	)
}

export default Timer;
