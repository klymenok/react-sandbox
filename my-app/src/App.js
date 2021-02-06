import './App.css';
import React, { useState } from 'react';
import Person from './Person/Person';

const App = props => {
	const [personsState, setPersonsState] = useState({
		persons: [
			{name: 'One', age: 1},
			{name: 'Two', age: 2},
		],
		otherState: 'Some other state'
	})

	const [otherState, setOtherState] = useState('some other value')

	const switchName = ( newName ) => {
		setPersonsState({
			...personsState,
			persons: [
				{name: 'One1', age: newName},
				{name: newName, age: 22},
			],
		})
	}

	const nameChangedHandler = (event) => {
		setPersonsState({
			...personsState,
			persons: [
				{name: event.target.value, age: 11},
				{name: event.target.value, age: 22},
			],

		})
	}

	return (
		<div className='App'>
			<h1>Test</h1>
			<Person handler={switchName.bind(this, 'Test')} changed={nameChangedHandler} name={personsState.persons[0].name} age={personsState.persons[0].age}/>
			<Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Lalka</Person>
		</div>
	);

}

export default App;


