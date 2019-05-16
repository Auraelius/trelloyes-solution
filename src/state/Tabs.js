import React from "react";

class Tabs extends React.Component {
  static defaultProps = { tabs: [] };
  
  render() {
    const buttons = this.props.tabs.map((tab, index) => (
      <button key={index}>
        {tab.name}
      </button>
    ))
    return (
      <div>
        {buttons}
      </div>
    )
  }
}

export default Tabs;
