import React from 'react'
import {connect} from 'react-redux'
import {editItem} from '../actions/editItem'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
// class component that has a local state that holds the core values

class ItemEdit extends React.Component {
    // this is a controlled form
    // this is done by seting a local state, not redux store.  
constructor(props) { 
    super(props);
    this.state = {
        item_name: props.item_name,
        purchase_price: props.purchase_price,
        date_purchased: props.date_purchased,
        date_sold: props.date_sold,
        // sold: "false",
    }
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
    //    debugger
        // sending in an object of our state and the props that we are sending and the id of our item
        let item = {...this.state, id: this.props.item.id}
        // debugger
        // sending to the actionCreatpr
        this.props.editItem(item)
        // debugger
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
                

                {/* <Card.Body>
                <form onSubmit={this.handleOnSubmit}>
                <h5> Edit Item</h5><br></br>
                <input type="text" placeholder="Item Name" value={this.state.item_name} name="item_name" onChange = {this.handleOnChange}/> 
                <label> Purchase Price</label><br></br>
                <input type="text" placeholder="Purchase Price" value={this.state.purchase_price} name="purchase_price" onChange = {this.handleOnChange}/> 
                <label> Date Purchased</label><br></br>
                <input type="text" placeholder="Date Purchased" value={this.state.date_purchased} name="date_purchased" onChange = {this.handleOnChange}/> 
                <label> Date Sold</label><br></br>
                <input type="text" placeholder="Date Sold" value={this.state.date_sold} name="date_sold" onChange = {this.handleOnChange}/> 
                <br></br>
                <label> Sold</label><br></br> 
                <input type="checkbox" checked={this.setState.checked} placeholder="Sold" value={this.state.sold} name="sold" onChange = {this.handleOnChange}/>
                <Button variant="primary" size="sm" type="submit">
                        Submit
                    </Button>
                <input type="submit"/>
                
                </form>
                </Card.Body>
               */}
            
           
                </div>
               
        )
    }
}



export default connect(null, {editItem})(ItemEdit)