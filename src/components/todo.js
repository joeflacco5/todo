import React, {Component} from 'react';
import moment from 'moment';

class Time extends Component {
  constructor(props){
    super(props);
    this.state={date: moment().format()}
  }
  componentDidMount(){
    setInterval(() => this.tick(), 1000)
  }
  tick() {
    this.setState({
      date: moment().format()
    })
  }
  render() {
    const date = this.state.date
    return ( <div className="time">
      <h4>{date}</h4>
      </div>
    )
  }
}

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

export class Todo extends Component{
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
    <Time />
  </div>
);
  }
};









export class TodoX extends Component{
  constructor(props){
    super(props);
    this.state={items: []}
    this.addItem = this.addItem.bind(this);
  }
  addItem(e) {
    var newItems = this.state.items;
    newItems.push({
      text: this.inputElement.value,
      key: moment().format()
    })
    this.setState({
      items: newItems
    })
    e.preventDefault();
    this.inputElement.value = " "
  }
    render() {
      return(<div className="mainList">
    <form onSubmit={this.addItem}>
      <input ref={(a) => this.inputElement = a} placeholder="Enter new ToDo item!"/>
      <button type="submit">Add Item</button>
    </form>
    <ShowList entries={this.state.items}/>
    <Time />
    </div>
  );
  }
}
// viewing component
class ShowList extends Component{
  constructor(props){
    super(props);
  }
  render() {
  var Entries = this.props.entries;
  function singleList(item) {
    return <li key={item.key}>{item.text}</li>
  }
  var fullList = Entries.map(singleList)
  return (
    <ul>{fullList}</ul>
  );
}
}

console.log('')
