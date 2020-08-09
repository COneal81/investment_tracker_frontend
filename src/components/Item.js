// functional component becuase it is getting the props and not changing the state.
import React from 'react'
import {Redirect} from 'react-router-dom'


const Item = (props) => {
    console.log(props)

    let item = props.items[props.match.params.id -1]
    
    return(
        <div> 
            
            {/* used a ternary operator because the 1st time the props are 
            // coming through, we do not have access to the props  */}
            
            <h3>{item ? item.item_name : null}</h3><br></br>
            {item ? item.purchase_price : null}<br></br>
            {item ? item.date_purchased : null}
           
        </div>
    )

}
export default Item