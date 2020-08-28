import React from 'react'
import ExpenseInput from '../components/ExpenseInput'
import Expenses from '../components/Expenses'
class ExpensesContainer extends React.Component {

    render() {
        return (
            <div>
            <ExpenseInput item={this.props.item}/><br></br>
            <Expenses expenses={this.props.item && this.props.item.expenses}/>
            </div>
        )
    }

}

export default ExpensesContainer