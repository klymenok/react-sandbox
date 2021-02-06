import React from 'react';

const person = (props) => {
	return (
		<div>
			<p onClick={props.handler}>I'm a person and {props.name} I'm { props.age }</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name}/>
		</div>
	)
};

export default person;
