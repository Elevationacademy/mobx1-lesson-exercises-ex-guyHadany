import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = (e) => {
    let newLocation = prompt('Edit')
    let itemName = e.target.name
    this.props.store.editItem(itemName, newLocation)
  }
  deleteItem = (e) => {
    let item = e.target.name
    this.props.store.deleteItem(item)
  }
  render() {
    let item = this.props.item
    return (
      <div className={item.completed ? 'crossed' : null}>
        <input type='checkbox' value={item.name} onClick={this.checkItem}/>{item.name} {item.location}
        <button className='editButton' name={item.name} onClick={this.editItem}>Edit</button>
        <button className='deleteButton' name={item.name} onClick={this.deleteItem}>Delete</button>
        {
          /*   your code here
              each item should be in an input checkbox
              it should display the item name and location
              it should have both an edit button and a delete button
        */}
            </div>
    )
  }
}

export default Item