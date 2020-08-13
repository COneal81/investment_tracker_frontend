import React from 'react'
import {connect} from 'react-redux'
import {addExpense} from '../actions/addExpense'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

class ExpenseInput extends React.Component {

    state = {
        destription: "",
        expense_amount: "",
        date: ""
    }

    handleOnChange = (event) => {
        this.setState( {
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        // sending this.state that has all of the input info from the form
        // sending this.props.id so the expense knows which item it belongs to
        this.props.addExpense(this.state, this.props.item.id)
        this.setState({
            destription: "",
            expense_amount: "",
            date: ""
        })
    }

    // values and names are what makes if a controlled form.
    render() {
        return (
        <div>
            

            <Container>
                <Form onSubmit={this.handleOnSubmit}>
                <Form.Group controlId= "ExpenseInput.ControlInput2">
                <Form.Row className="expense-input">
                    <Form.Label><h4>Add Expense</h4></Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Expense Name" 
                        value={this.state.destription} 
                        name="destription" 
                        onChange = {this.handleOnChange}
                    /> 
                    <br></br>

                    <Form.Control 
                        type="text" 
                        placeholder="Amount" 
                        value={this.state.expense_amount} 
                        name="expense_amount" 
                        onChange = {this.handleOnChange}
                    />
                    <br></br>

                    <Form.Control
                        type="text" 
                        placeholder="Date" 
                        value={this.state.date} 
                        name="date" onChange = {this.handleOnChange}
                    />
                    <br></br>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                
                </Form.Row>
                </Form.Group>
                </Form>
            </Container>


            {/* <form onSubmit={this.handleOnSubmit}>
                <label> Enter an Expense</label><br></br>
                <input type="text" placeholder="Expense Name" value={this.state.destription} name="destription" onChange = {this.handleOnChange}/> 
                <label> Amount </label><br></br>
                <input type="text" placeholder="Amount" value={this.state.expense_amount} name="expense_amount" onChange = {this.handleOnChange}/> 
                 <label> Date Purchased</label><br></br>
                 <input type="text" placeholder="Date" value={this.state.date} name="date" onChange = {this.handleOnChange}/> 
                
                 <input type="submit"/>
                
            </form>  */}
        </div>
        )
    }
}


export default connect(null, {addExpense})(ExpenseInput)