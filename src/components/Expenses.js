import React from 'react'

const Expenses = (props) => {
    console.log(props.expenses)
    // debugger
    return (
        <div>
            INside expenses index
            {/* The first time that props comes thru, the may be undefinied.  You may need to add in a check */}
           {props.expenses && props.expenses.map(expense =>
            <li key={expense.id}>{expense.destription} ~ {expense.expense_amount}</li>
            )}
        </div>
    )
}

export default Expenses