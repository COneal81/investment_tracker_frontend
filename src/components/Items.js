import React from 'react'
import {Link} from 'react-router-dom'


import Table from 'react-bootstrap/Table'

const Items = (props) => {

    return (
        <div>
                <Table responsive striped hover variant="dark" size="sm">
                
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