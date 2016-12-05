import React, {Component} from 'react';
import moment from 'moment';

class Time extends Component{
  constructor(props) {
    super(props);
    this.state={date: moment().format()}
  }
  componentDidMount() {
    setInterval(() => this.tick(), 1000)
  }
  tick() {
    this.setState({
      date: moment().format()
    })
  }
    render() {
      return(<div className="time">
      <h2>{this.state.date}</h2>
    </div>)
    }
}

export default Time;
