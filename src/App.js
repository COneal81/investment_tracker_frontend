import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'

import ItemsContainer from './containers/ItemsContainers'

class App extends React.Component {

 

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>Investment Tracker</h1>
         <ItemsContainer/>
        </header>
      </div>
    );
  }
    
}

// mapStateToProps is a way of accesses our current values in our store as props, we have to pass it to 
// connect, b/c connect is our way of connecting our redux store to a specific component
// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   }
// }

export default App;
// mapDIspatchToProps - gives us the abiity to update our store from this component
//  - can also be passed as an action creator like {fetchItems}

// connect automatically calls dispatch for us on the return value of fetchItems. It returns an 
// action object that we have passed in. ex. store.dispatch({type: 'FETCH_ITEMS', payload: {item_name: "Desk"})

// - connect sends action object to action file(ex. fetchItems) which returns action to connect which is 
// dispatched to our store which is send into our reducer as the action (This is dispatch happening
// behind the scenes acutmatically with connect)
// 
// 
// A App can also be a container depending on how you set it up.