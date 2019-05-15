import React from 'react';

class TheDate extends React.Component {
  constructor(props) {
    super(props); // required for all react components
    this.state = { datetime: new Date() };
    // console.log('TheDate: constructor')
  }

  // called once when the componet is first added to the DOM, or "mounted"
  componentDidMount() {
    // use setInterval() run this callback function every second
    setInterval(() => { 
      // you must only update the state object with setState() method 
      // so that React can, uh, react to the new state
      this.setState({
        datetime:new Date() // what happens to all the old Date objs? garbage collection?
      });
      // console.log('TheDate: setInterval callback')
    }, 1000);
    // console.log('TheDate: componentDidMount')
  }
  // called when the component is about to be removed from the DOM
  componentWillUnmount() {
    clearInterval(this.interval);
    // console.log('TheDate: componentWillUnmount')
    
  }

  render() {
    // console.log('TheDate: render')
    // console.log(this.state);
    return (
      <div>
        {this.state.datetime.toLocaleString()}
      </div>
    );
  }
}

export default TheDate