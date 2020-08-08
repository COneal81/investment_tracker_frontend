import React from 'react'

// functional b/c it is just presenting a list of items
// setup a functional component as a regular function.  prefer arrow functions.
// with a functional component, you get the props from the container and have to 
// take in the props as an arguement.  Gets the items from the items container, accessing them
// thru props
// cannot have a render inside a functional component.  must have a return


const Items = (props) => {
    return (
        <div>
            List of Items
        </div>
    )

}

export default Items