import React from 'react'
import {connect} from 'react-redux'
import {addItem} from '../actions/addItem'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// class component that has a local state that holds the core values

class ItemInput extends React.Component {
    // this is a controlled form
    // this is done by seting a local state, not redux store.  

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
       
        // places what the user types in, in a key/value pair
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        // here you are passing in the state as an arguement to the actionCreator addItem
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
                <Form onSubmit={this.handleOnSubmit}>
  <Form.Group controlId= "ItemInput.ControlInput1">
    <Form.Label>Item </Form.Label>
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
  {/* <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Example multiple select</Form.Label>
    <Form.Control as="select" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group> */}
  {/* <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group> */}
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>


                {/* <form onSubmit={this.handleOnSubmit}>
                <label> Enter an Item</label><br></br>
                <input type="text" placeholder="Item Name" value={this.state.item_name} name="item_name" onChange = {this.handleOnChange}/>  */}
                {/* <label> Purchase Price</label><br></br> */}
                {/* <input type="text" placeholder="Purchase Price" value={this.state.purchase_price} name="purchase_price" onChange = {this.handleOnChange}/>  */}
                {/* <label> Date Purchased</label><br></br> */}
                {/* <input type="text" placeholder="Date Purchased" value={this.state.date_purchased} name="date_purchased" onChange = {this.handleOnChange}/>  */}
                {/* <label> Date Sold</label><br></br> */}
                {/* <input type="text" placeholder="Date Sold" value={this.state.date_sold} name="date_sold" onChange = {this.handleOnChange}/>  */}
                {/* <label> Sold</label><br></br>
                <input type="checkbox" checked={this.setState.checked} placeholder="Sold" value={this.state.sold} name="sold" onChange = {this.handleOnChange}/>  */}
                {/* <label> Breakeven Point</label><br></br> */}
                {/* <input type="text" placeholder="Breakeven Point" value={this.state.breakeven_point} name="breakeven_point" onChange = {this.handleOnChange}/>  */}
                {/* <input type="submit"/> */}
                
                {/* </form> */}
                
            </div>
        )
    }
}

export default connect(null, {addItem})(ItemInput)

// in a form, you need to have a value and a name in the input tags.  The onChange matches the 
// name  in the input tage with the attributes name to the value that the user is typing in as the value
// in the input tag

// does NOT need accesses to mapStateToProps b/c it does not need access to what is already in the redux store.
// DOES need a mapDispatchToProps to add something new to the store.