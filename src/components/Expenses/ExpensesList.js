import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props => {
	// Showing Data according to years
	// Improved Readability
	if (props.yearListFiltered.length === 0) {
		return <h2 className='expenses-list__fallback'>No Expenses Found!</h2>;
	}
	return (
		<ul className='expenses-list'>
			{props.yearListFiltered.map(expense => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</ul>
	);
};

export default ExpensesList;
