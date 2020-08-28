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
        this.props.addExpense(this.state, this.props.item.id)
        this.setState({
            destription: "",
            expense_amount: "",
            date: ""
        })
    }

    
    render() {
        return (
        <div>
            
            <Container>
                <Form onSubmit={this.handleOnSubmit}>
                <Form.Group controlId= "ExpenseInput.ControlInput2">
                <Form.Row className="expense-input">
                    <Form.Label><h5>Add Expense</h5></Form.Label>
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
        </div>
        )
    }
}


export default connect(null, {addExpense})(ExpenseInput)