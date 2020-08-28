import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import Item from '../components/Item'
import Items from '../components/Items'
import ItemInput from '../components/ItemInput'
import {fetchItems} from '../actions/fetchItems'
import NavBar from '../components/NavBar'
import Home from '../components/Home'

 
class ItemsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchItems()
    }


    render() {
        return (
            <div>
                <NavBar/>
                <Switch>
                {/* RouterProps brings in the individual id attrubute to be able to link to the show page */}
                <Route exact path='/' component={Home}/>
                <Route path='/items/new' component={ItemInput}/>
                <Route path= '/items/:id' render={(routerProps) => <Item {...routerProps} items={this.props.items}/>}/>
                <Route path='/items' render={(routerProps) => <Items {...routerProps} items={this.props.items}/>}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, {fetchItems})(ItemsContainer)

