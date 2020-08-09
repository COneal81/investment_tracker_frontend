import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import Item from '../components/Item'
import Items from '../components/Items'
import ItemInput from '../components/ItemInput'
import {fetchItems} from '../actions/fetchItems'


// class components allow you to call this.props
// 
class ItemsContainer extends React.Component {
    // because it is a class, you use the curley brackets and must have a render()

    componentDidMount() {
        this.props.fetchItems()
    }


    render() {
        return (
            <div>
                <Switch>
                {/* Switch returns the first match, order matters */}
                {/* When you use routes, you are not longer rendering the components directly. */}
                {/* They will be conditionally renders under the url */}
                
                {/* RouterProps brings in the individual id attrubute to be able to link to the show page */}
                <Route path='/items/new' component={ItemInput}/>
                <Route path= '/items/:id' render={(routerProps) => <Item {...routerProps} items={this.props.items}/>}/>
                
                <Route path='/items' render={(routerProps) => <Items {...routerProps} items={this.props.items}/>}/>
                {/*below is how you pass the props down to the items component */}
                {/* <Items items={this.props.items}/> */}
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

// Container Components
// render other components and pass them data if they require data
// have other functions inside them, callback functions, componentDidMount
// typically class components b/c they may need a state or a componentDidMount