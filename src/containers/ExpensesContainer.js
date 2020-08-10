import React from 'react'
import ExpenseInput from '../components/ExpenseInput'
import Expenses from '../components/Expenses'
class ExpensesContainer extends React.Component {

    render() {
        return (
            <div>
            {/* you pass down the props from an individual item to be able to add an expense to the existing item and keep the id */}
            <ExpenseInput item={this.props.item}/><br></br>
            {/* if this.props.item exists, then find this.props.item.expenses */}
            
            <Expenses expenses={this.props.item && this.props.item.expenses}/>
            </div>
        )
    }

}

export default ExpensesContainer