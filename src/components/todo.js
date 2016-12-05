import React, {Component} from 'react';
import moment from 'moment';

class TodoItems extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var todoEntries = this.props.entries;

    function createTasks(item) {
      return <li key={item.key}>{item.text}</li>
    }
    var listItems = todoEntries.map(createTasks);
    return(
    <ul className="theList">
      {listItems}
    </ul>


  );
  }
};

class Todo extends Component{
  constructor(props){
    super(props);
    this.state={items: []};
    this.addItem = this.addItem.bind(this);
  }
  addItem(e) {
    var itemArray = this.state.items;
    itemArray.push( {
      text: this._inputElement.value,
      key: moment().format()
      // must be unique for React to identify!
    });
    this.setState({
      items: itemArray
    })
    this._inputElement.value = " "; // REFRESHES input to " "
    e.preventDefault(); // prevents default onSubmit event
  }
  render() {
    return(
      <div className="todoListMain">
    <h2>My Todo List!</h2>
    <div className="header">
    <form onSubmit={this.addItem}>
      <input ref={(a) => this._inputElement = a} placeholder="Enter task..."/>
      <button type="submit">Add</button>
      </form>
    </div>
    <TodoItems entries={this.state.items}/>
  </div>
);
  }
};


export default Todo;
