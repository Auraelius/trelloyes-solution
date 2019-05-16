import React from 'react';

class HelloWorld extends React.Component {
  static defaultProps = {
    who:'world'
  };

  constructor(props) {
    // console.log('HelloWorld: constructor: props = ', props);
    super(props);
    this.state = {
      who: this.props.who
    };
  }


  render() {
    // console.log('HelloWorld: render: ');
    return (
      <div>
        <p>
          Hello {this.state.who}
        </p>
        {/* minimal event handlers that just update state, triggering rerender */}
        <button onClick={()=> this.setState({who:'world'})}>World</button>
        <button onClick={()=> this.setState({who:'friend'})}>Friend</button>
        <button onClick={()=> this.setState({who:'react'})}>React</button>
      </div>
    );
  }

}
export default HelloWorld;