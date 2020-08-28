import React from 'react'
import ExpensesContainer from '../containers/ExpensesContainer'
import ItemEdit from './ItemEdit'
import Card from 'react-bootstrap/Card'


const Item = (props) => {
    // console.log(props)

    let item = props.items.filter(item => item.id == props.match.params.id)[0]
    
    return(
        <div> 
            <br></br>
           
            <Card style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title><h2>{item ? item.item_name : null}</h2></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Purchase Price: ${item ? item.purchase_price : null}</Card.Subtitle>
                        <Card.Text><p>
                            Date Purchased:{item ? item.date_purchased : null}<br></br><br></br>
                            <b>Breakeven if sold at: ${item ? item.breakeven_point : null}</b>
                            </p>
                        </Card.Text>
                </Card.Body>
            </Card>
                <br></br>
            <ItemEdit item={item}/>
                <br></br><br></br>
            <ExpensesContainer item={item}/>
        </div>
    )
}
export default Item