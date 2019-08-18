import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './App.css';
import Item from './components/Item';
import Devtools from 'mobx-react-devtools';


@observer
class App extends Component {
  handleChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }
  addItem = () => {
    this.props.store.addItem(this.state.newItem)
  }
  render() {
    let store = this.props.store
    return (
      <div className="App">
        <Devtools/>
        <input onChange = {this.handleChange}/>
        <button onClick = {this.addItem}>Add</button>
        {store.list.map((i, index) => <Item key={index} item={i} store={store}/>)}
      {/* your code here
          You should map each grocery item into an Item component  
      */}  
      </div>
    );
  }
}

export default App;
