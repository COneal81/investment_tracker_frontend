// functional component becuase it is getting the props and not changing the state.
import React from 'react'


const Item = (props) => {
    console.log(props)
    return(
        <div> 
            <li>{props.item.item_name} - {props.item.purchase_price}</li>
        </div>
    )

}
export default Item