import React from 'react'
import ExpenseInput from '../components/ExpenseInput'
import Expenses from '../components/Expenses'
class ExpensesContainer extends React.Component {

    render() {
        return (
            <div>Inside Expenses Container
            <ExpenseInput/>
            {/* if this.props.item exists, then find this.props.item.expenses */}
            <Expenses item={this.props.item && this.props.item.expenses}/>
            </div>
        )
    }

}

export default ExpensesContainer