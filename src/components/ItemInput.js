import React from 'react'
import {connect} from 'react-redux'
import {addItem} from '../actions/addItem'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

class ItemInput extends React.Component {
   
    state = {
        item_name: "",
        purchase_price: "",
        date_purchased: "",
        date_sold: "",
        // sold: "false",
        breakeven_point: ""
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        //    sold: event.target.checked
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addItem(this.state)
        // calling setState clears the form and sets it back to the initial values for a user to be able to enter a new item
        this.setState({
            item_name: "",
            purchase_price: "",
            date_purchased: "",
            date_sold: "",
            // sold: "false",
            breakeven_point: ""
        })
    }

    render() {
        return (
            <div> 
                <br></br>
                <Container>
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Group controlId= "ItemInput.ControlInput1">
                        <Form.Label><h3>Add Item </h3></Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Item Name" 
                            value={this.state.item_name} 
                            name="item_name" 
                            onChange = {this.handleOnChange}
                        /> <br></br>
                        <Form.Control 
                            type="text" 
                            placeholder="Purchase Price"
                            value={this.state.purchase_price}
                            name="purchase_price"
                            onChange = {this.handleOnChange}
                        />
                        <br></br>
                        <Form.Control
                            type="text"
                            placeholder="Date Purchased"
                            value={this.state.date_purchased}
                            name="date_purchased"
                            onChange = {this.handleOnChange}
                        />
                        <br></br>
                        <Form.Control
                            type="text"
                            placeholder="Date Sold"
                            value={this.state.date_sold}
                            name="date_sold"
                            onChange = {this.handleOnChange}
                        />  
                    <br></br>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default connect(null, {addItem})(ItemInput)

