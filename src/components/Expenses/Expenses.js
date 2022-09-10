import React, { useState } from 'react';

//import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = props => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = selectedYear => {
		setFilteredYear(selectedYear);
	};
	const filteredExpenses = props.items.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	// Showing Data according to years
	// Improved Readability
	/*
	let expensesContent = <p>No expenses found!</p>;

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map(expense => (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		));
	}
	*/

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>

				<ExpensesChart expenses={filteredExpenses} />

				{
					// Showing Data according to years
					// Improved Readability
				}
				{
					//{expensesContent}
				}

				{<ExpensesList yearListFiltered={filteredExpenses} />}

				{
					// Showing Data according to years
				}

				{/*
				{filteredExpenses.length === 0 && <p>No expenses found!</p>}

				{// if the first statement is true then the second statement will be returned }

				{filteredExpenses.length > 0 &&
					filteredExpenses.map(expense => (
						<ExpenseItem
							key={expense.id}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					))}
                */}

				{
					/////////////////////////////////////////////////////////////////////
				}

				{
					// Showing Data according to years
					// Alternative Way
				}
				{/*
				{filteredExpenses.length === 0 ? (
					<p>No expenses found!</p>
				) : (
					filteredExpenses.map(expense => (
						<ExpenseItem
							key={expense.id}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					))
					)}
					*/}

				{
					/////////////////////////////////////////////////////////////////////
				}

				{/*
				{props.items.map(expense => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))} */}

				{
					/////////////////////////////////////////////////////////////////////
				}

				{/*
				<ExpenseItem
					title={props.items[0].title}
					amount={props.items[0].amount}
					date={props.items[0].date}
				/>
				<ExpenseItem
					title={props.items[1].title}
					amount={props.items[1].amount}
					date={props.items[1].date}
				/>
				<ExpenseItem
					title={props.items[2].title}
					amount={props.items[2].amount}
					date={props.items[2].date}
				/>
				<ExpenseItem
					title={props.items[3].title}
					amount={props.items[3].amount}
					date={props.items[3].date}
				/> */}
			</Card>
		</div>
	);
};

export default Expenses;
