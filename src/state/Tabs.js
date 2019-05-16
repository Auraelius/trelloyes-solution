import React from "react";

export default class Tabs extends React.Component {
  static defaultProps = { tabs: [] };
  state = {
    currentTabIndex: 0 // which tab is showing. Start with the first one
  };

  handleButtonClick(index) {
    // switch to the item in the tabs prop data structure that matches the clicked button
    // console.log('button clicked!', { index })
    this.setState({ currentTabIndex: index })
  }
  renderButtons() {
    // Read the props data structure, create a clickable button for each tab
    // The mapped collection needs a unique key for each element
    // which we can conveniently use as an index for the click handler
    // to choose the next tab's conten
    return this.props.tabs.map((tab, index) => (
      <button key={index} onClick={() => this.handleButtonClick(index)}>
        {tab.name}
      </button>
    ))
  }
  renderContent() {
    const currentTab = this.props.tabs[this.state.currentTabIndex]
    return (
      <div className='content'>
        {currentTab.content}
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.renderButtons()}
        {/* only show content if the props object exists (helps with testing) */}
        {/* the double bang coerces the length to be a true boolean by inverting it, then inverting it back while retaining it's new boolean nature */}
        {!!this.props.tabs.length && this.renderContent()}
      </div>
    )
  }
}

