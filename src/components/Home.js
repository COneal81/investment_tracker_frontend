import React from 'react'
import Container from 'react-bootstrap/Container'
import logo from '../images/logo-b.png'

const Home = () => {

    return (
        <div >
            <br></br>
            <img src={logo} alt="logo"/>
            <h3><i>...for keeping track of all your investment expenses!</i></h3>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Container>
            <h6>Investment Tracker helps you keep track of the expenses you incur when you purchase 
                an item to fix up and resell for a profit. It even tells you how much you need to sell 
                an item for, in order to make a profit!</h6>
            </Container>
        </div>

    )
}

export default Home