import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemsContainer from './containers/ItemsContainers'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <ItemsContainer/>
        </header>
      </div>
    );
  }
    
}


export default App;
