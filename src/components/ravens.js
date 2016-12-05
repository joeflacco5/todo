import React, {Component} from 'react';
import ReactCountdownClock from 'react-countdown-clock';

class Ravens extends Component{
  constructor(props) {
    super(props);
    this.state={value: "Joe Flacco"};
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)}

    handleChange(e) {
      this.setState({
        value: e.target.value
      })
    }
    handleSubmit(e) {
      alert("You have chosen " + this.state.value + " as your fav player!")
    }
    render() {
      return ( <div className="header">
      <div className="fieldset">
      <form>
        <legend>Who is your favourite Baltimore Ravens player?</legend>
        <p>You have 60 Seconds to choose...</p>
      <select value={this.state.value} onChange={this.handleChange}>
      <option value="Ed Reed">Ed Reed</option>
      <option value="CJ Mosley">CJ Mosley</option>
      <option value="Joe Flacco">Joe Flacco</option>
      </select>
      <button type='submit' onClick={this.handleSubmit}>Submit</button>
      </form>
      </div>
      <div className="link">
      <a href="http://www.nfl.com/">NFL</a>
      </div>
        <ReactCountdownClock seconds={60}
                       color="#4B0082"
                       alpha={0.8}
                       size={200}
                        />
                    </div>)
    }
  };

export default Ravens;
