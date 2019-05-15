import React from 'react';

export default class Bomb extends React.Component{
  static defaultProps = {
    count:0
  };

  constructor(props){
    super(props);
    this.state = { count : this.props.count };
  }
  componentDidMount(){
    // give the interval a name so you can stop it later
    // count up by 1 sec intervals
    this.interval = setInterval(()=>{
      this.setState({count:this.state.count+1})
    },1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // fizz buzz redux
  renderMessage(){
    let bombMessage ="";
    if (this.state.count >= 8){
      bombMessage = "Boom!";
      clearInterval(this.interval)
    } else {
      bombMessage = this.state.count %2 ? "tick" : "tock"
    }
    return(bombMessage);

  }

  render(){
    
    return(
    <div>
      <p>Bomb counter: {this.state.count} {this.renderMessage()}</p>
    </div>
  )}



}

