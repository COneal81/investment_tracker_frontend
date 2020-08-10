import React from 'react'
import {connect} from 'react-redux'
import {deleteExpense} from '../actions/deleteExpense.js'

const Expenses = (props) => {
    // console.log(props.expenses)
    // debugger

    // because this a a functional component, we have to define the handleDelete with a const 
    const handleDelete =(expense) => {
        //  debugger
        // b/c this is a functional component it comes in as props, not this.props
        props.deleteExpense(expense.id, expense.item_id )
    }
    return (
        <div>
            <h3> Expenses </h3>
            {/* The first time that props comes thru, the may be undefinied.  You may need to add in a check */}
           {props.expenses && props.expenses.map(expense =>
            <li key={expense.id}>{expense.destription} ~ ${expense.expense_amount} 
            <button onClick={() => handleDelete(expense)}>Delete</button>
            </li>
            )}
        </div>
    )
}

export default connect(null, {deleteExpense})(Expenses)