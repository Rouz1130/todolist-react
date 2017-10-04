import React, { Component } from 'react';
import TodoItems from './TodoItems';



class TodoList extends React.Component {
// creating addItem event handler that gets called when form gets submitted.

  constructor(props, context) {
    super(props, context);

// define our 'state' object within the constructor. We are defining an items array/property that will be responsibile for storing all of the various items user enters.
    this.state = {
      items: []
   };

// we define our addItem even handler
    this.addItem = this.addItem.bind(this);
  }

// addItem method: created var 'itemArray' will store current value of 'items' state object
  addItem(e) {
  var itemArray = this.state.items;
// If statment to check if input element has content. 2 conditions if no content 'value' nothing happens. if value exists store text and date of text.
  if (this._inputElement.value !== "") {
    itemArray.unshift(
      {
        text: this._inputElement.value,
        key: Date.now()
      }
    );

// Setting the state 'item' property to the value of the array(itemArray)
// our addItem function.
    this.setState({
      items: itemArray
    });
// Clearing the value of input element to make room for the next 'item'/text/toDo
    this._inputElement.value = "";
  }

  console.log(itemArray);

  e.preventDefault();
}

// set up event handler to add item on form(onSubmit), and call the addItem(method above) method when event is heard. 'ref' keyword in input tag allows to read the entered value that is stored in array when user 'submits'.
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
           <form onSubmit={this.addItem}>
           <input ref={(a) => this._inputElement = a}
             placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
{/* specifying our TodoItems Component and pass in our items as a' prop' */}
        <TodoItems entries={this.state.items}/>
      </div>
    );
  }
};

export default TodoList;
