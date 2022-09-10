import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = props => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	//////////////////////////////////////////////////////////////////////////////////////////////
	// Using single state instead of multiple states
	// const [userInput, setUserInput] = useState({
	//   enteredTitle: '',
	//   enteredAmount: '',
	//   enteredDate: '',
	// });

	const titleChangeHandler = event => {
		setEnteredTitle(event.target.value);

		//////////////////////////////////////////////////////////////////////////////////////////////
		// setUserInput({
		//   ...userInput, // the other values should also be initialized here so that they don't get lost when we update a single value
		//   enteredTitle: event.target.value,
		// });

		//////////////////////////////////////////////////////////////////////////////////////////////
		// When depends on the previous state (value)
		// setUserInput((prevState) => {
		//   return { ...prevState, enteredTitle: event.target.value };
		// });
	};

	const amountChangeHandler = event => {
		setEnteredAmount(event.target.value);
		// setUserInput({
		//   ...userInput,
		//   enteredAmount: event.target.value,
		// });
	};

	const dateChangeHandler = event => {
		setEnteredDate(event.target.value);
		// setUserInput({
		//   ...userInput,
		//   enteredDate: event.target.value,
		// });
	};

	const submitHandler = event => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData); // from NewExpense.js

		// Two-Way-Binding -----> helps to update the form input values and on the submission then again reinitialize to empty, this is done by adding value attribute in the JSX below and adding the functions defined below
		setEnteredTitle(''); // Two Way Binding
		setEnteredAmount(''); // Two Way Binding
		setEnteredDate(''); // Two Way Binding
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						type='text'
						value={enteredTitle} // Two Way Binding
						onChange={titleChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						value={enteredAmount} // Two Way Binding
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2019-01-01'
						max='2022-12-31'
						value={enteredDate} // Two Way Binding
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
