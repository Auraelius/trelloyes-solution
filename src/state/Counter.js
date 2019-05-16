import React from 'react';

// This component class takes an initial count and increment step
// default values for props are supplied
// count and step are stored in state object

class Counter extends React.Component {
  static defaultProps = {count:0, step:1};

  constructor(props){
    // console.log('Counter: constructor: props = ', props);
    super(props);
    this.state = {
      count: this.props.count,
      step: this.props.step
    };
  }

  // When adding an event listener function to a React class, 
  // use an arrow function to make sure that 'this' is referring to the class instance.
  // arrow functions use the caller's context.
  // they do not create one of their own.

  handleButtonClick = () => {
    // console.log('Counter : handleButtonClick: props = ',this.props);
    // console.log('Counter : handleButtonClick: state = ',this.state);
    const newCount = this.state.count + this.state.step;
    this.setState({count:newCount})
  }


  render() {
    const componentStyle ={
      marginLeft:'20px',
      marginBottom:'20px'
    };
    return (
      <div style={componentStyle}>
        <p>The current count: {this.state.count}</p>
        {/* 
          event handlers are declared in component props
          The handler is a function in the current oobject 
        */}
        <button onClick={this.handleButtonClick}>
          Add {this.state.step}
        </button>
      </div>
    )
  }
}

export default Counter