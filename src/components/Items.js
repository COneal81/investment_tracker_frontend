import React from 'react'
import {Route, Link} from 'react-router-dom'
import Item from './Item'
// import {Table} from 'react-bootstrap';
import Table from 'react-bootstrap/Table'

// functional b/c it is just presenting a list of items
// setup a functional component as a regular function.  prefer arrow functions.
// with a functional component, you get the props from the container and have to 
// take in the props as an arguement.  Gets the items from the items container, accessing them
// thru props
// cannot have a render inside a functional component.  must have a return

// 
const Items = (props) => {

    return (
        // calling Item in the div passes the child thru props down to the show page to be able to render each 
            // items attributes on its own page.
        <div>
            {/* everytime you iterate, make sure to put a key prop in the html element or else you will get a warning  */}
                
                <Table responsivestriped hover variant="dark" size="sm">
                
                <thead>
                  <tr >
                    <th>Item Name</th>
                    <th>Purchase Price</th>
                    <th>Date Purchased</th>
                    <th>Breakeven Point</th>
                  </tr>
                </thead>
                <tbody>
                {props.items.map(item => 
                  <tr>
                  
                    <td key={item.id}><Link to={`/items/${item.id}`}>{item.item_name}</Link></td>
                    <td> ${item.purchase_price} </td>
                    <td> {item.date_purchased} </td>
                    <td>${item.breakeven_point}</td>
                   
                  </tr>
                 )}
                </tbody>
              </Table>
            


           
            
            
        </div>
    )

}

export default Items