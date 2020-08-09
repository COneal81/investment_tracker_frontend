import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
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
                {/* When you use routes, you are not longer rendering the components directly. */}
                {/* They will be conditionally renders under the url */}
                <Route path='/items/new' component={ItemInput}/>
                {/* RouterProps brings in the individual id attrubute to be able to link to the show page */}
                <Route path= '/item/:id' render={(routerProps) => <Item {...routerProps} items={this.props.items}/>}/>
                <Route exact path='/items' render={(routerProps) => <Items {...routerProps} items={this.props.items}/>}/>
                {/*below is how you pass the props down to the items component */}
                {/* <Items items={this.props.items}/> */}

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