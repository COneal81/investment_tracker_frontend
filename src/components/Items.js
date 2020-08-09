import React from 'react'
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
        <div>
            {/* everytime you iterate, make sure to put a key prop in the html element or else you will get a warning  */}
            {props.items.map(item => 
            <div key={item.id}><Item item={item}/> </div>
            // <li key ={item.id}>
            //    <link to={`/items/${item.id}`}> {item.item_name} <br></br>  ${item.purchase_price}<br></br><br></br></link> 
            // </li> 
            )}
        </div>
    )

}

export default Items