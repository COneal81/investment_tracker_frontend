import React from 'react'
import {connect} from 'react-redux'
import {deleteExpense} from '../actions/deleteExpense.js'
import Table from 'react-bootstrap/Table'



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
            {/* <h5>Expenses</h5> */}
             <Table responsive striped hover variant="dark" size="sm">
                <thead>
                  <tr >
                    <th>Expense Name</th>
                    <th>Date Purchased</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
        
                     {props.expenses && props.expenses.map(expense =>
                  <tr>
                    <td key={expense.id}>{expense.destription}</td>
                    <td> {expense.date} </td>
                    <td> ${expense.expense_amount} </td>
                   
                   <button onClick={() => handleDelete(expense)}>Delete</button>
                  </tr>
                 )}
                </tbody>
              </Table>
            
            {/* The first time that props comes thru, the may be undefinied.  You may need to add in a check */}
           {/* {props.expenses && props.expenses.map(expense =>
            <li key={expense.id}>{expense.destription} ~ ${expense.expense_amount} 
            <button onClick={() => handleDelete(expense)}>Delete</button>
            </li>
            )} */}
        </div>
    )
}

export default connect(null, {deleteExpense})(Expenses)