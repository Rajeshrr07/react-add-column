import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

function App() {
	const [val, setVal] = useState([]);
	const handleAdd = () => {
		const abc = [...val, []];
		setVal(abc);
	};
	const [val1, setVal1] = useState([]);
	const handleAdd1 = () => {
		const abc = [...val, []];
		setVal(abc);
	};
	const handleChange = (onChangeValue, i) => {
		const inputdata = [...val];
		inputdata[i] = onChangeValue.target.value;
		setVal(inputdata);
	};
	const handleDelete = (i) => {
		const deletVal = [...val];
		deletVal.splice(i, 1);
		setVal(deletVal);
	};
	console.log(val, 'data-');
	return (
		<Container>
			<Row>
				<Col size="md">
					T0 DO ISSUES
					<>
						{val.map((data, i) => {
							return (
								<div class="card-section">
									<button onClick={() => handleAdd1()}> Add </button>
									<input
										class="card-input"
										value={data}
										onChange={(e) => handleChange(e, i)}
										placeholder="What needs to be Done?"
									/>
									<button class="delete-button" onClick={() => handleDelete(i)}>
										Delete
									</button>
								</div>
							);
						})}

						<button onClick={() => handleAdd()}>
							{' '}
							<BsPlus />
							Create Issues
						</button>
					</>
				</Col>
				<Col size="md">IN PROGRESS</Col>
				<Col size="md">DONE</Col>
			</Row>
		</Container>
	);
}

export default App;
