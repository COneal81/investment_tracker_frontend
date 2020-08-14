// functional component becuase it is getting the props and not changing the state.
import React from 'react'
import {Link} from 'react-router-dom'
import ExpensesContainer from '../containers/ExpensesContainer'
import ItemEdit from './ItemEdit'
import Card from 'react-bootstrap/Card'
// The expensesContainer can receive info about this item that is rendering it and the expensescontainer can send the data 
// down to the expenses component and expenses input

const Item = (props) => {
    console.log(props)

    // let item = props.items[props.match.params.id -1]
    let item = props.items.filter(item => item.id == props.match.params.id)[0]
    
    return(
        <div> 
            <br></br>
            {/* used a ternary operator because the 1st time the props are 
            // coming through, we do not have access to the props  */}
            
            <Card style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title><h2>{item ? item.item_name : null}</h2></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Purchase Price: ${item ? item.purchase_price : null}</Card.Subtitle>
                        <Card.Text><p>
                            Date Purchased:{item ? item.date_purchased : null}<br></br><br></br>
                            <b>Breakeven if sold at: ${item ? item.breakeven_point : null}</b>
                            </p>
                            {/* we can send props down to the expensesContainer which it can then pass down props to the expenses  */}
                        </Card.Text>
                </Card.Body>
            </Card>
                <br></br><br></br>
            <ItemEdit item={item}/>
                <br></br><br></br>
            <ExpensesContainer item={item}/>
        </div>
    )
}
export default Item