import React from 'react';

export default class RouletteGun extends React.Component{
  static defaultProps ={
    bulletInChamber:8
  };

  constructor(props){
    super(props);
    this.state = {
      bulletInChamber : props.bulletInChamber,
      chamber : null,
      spinningTheChamber : false,
      message : "Do you feel lucky?"
    };
  }

getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  pullTheTrigger = () => {
    this.timeout = setTimeout(()=>{
      // runs after 2 secs : cylinder stops spinning, set on a random chamber
      this.setState(
        {
          chamber : this.getRandomInt(1,8),
          spinningTheChamber : false
        })},2000);

    // runs immediately on button click
    this.setState({spinningTheChamber : true});
  }

  displayMessage(){
    if(this.state.spinningTheChamber){
      return('spinning the chamber and pulling the trigger');
    } else {
      clearTimeout(this.timeout);
      if(this.state.bulletInChamber === this.state.chamber) {
        return('BANG!!');
      } else {
        return("You're safe");
      }
    }
  }

  // for debugging, show the bullet chamber and the current chamber
  statusMessage(){
    if (this.state.chamber)  
      return(`(${this.state.bulletInChamber}/${this.state.chamber})`)
    else 
      return('(?/?)') // haven't spun yet
  }

  render(){
    return(
      <div>
        <p>RouletteGun: {this.statusMessage()} {this.displayMessage()}</p>
        <button onClick={this.pullTheTrigger}>Pull the trigger!</button>
      </div>
    )
  }
}
