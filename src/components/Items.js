import React from 'react'
import {Route, Link} from 'react-router-dom'
import Item from './Item'


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
           




            {props.items.map(item => 
           
            <li key={item.id}> 
            <Link to={`/items/${item.id}`}> {item.item_name} -  ${item.purchase_price}<br></br> </Link> 
            </li>
            
            )}
        </div>
    )

}

export default Items