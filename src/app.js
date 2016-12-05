import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactCountdownClock from 'react-countdown-clock';
import Insert from './components/insert';
import Ravens from './components/ravens';
import Time from './components/time';
import Todo from './components/todo';

class App extends Component{
  constructor(props){
    super(props);
  }
  render() {
    return (<div className="app">
    <Ravens />
    <Insert />
    <Time />
    </div>)
  }
}




ReactDOM.render(<Todo />, document.getElementById('root'));
