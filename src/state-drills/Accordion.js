import React from "react";

export default class Accordian extends React.Component {
  static defaultProps = { sections: [] };
  state = {
    AnySectionDisplayed: false,
    currentSectionIndex:0
  };
  handleButtonClick(index){
    this.setState({ AnySectionDisplayed:true, currentSectionIndex: index })
  }

  renderContent() {
    const currentSection = this.props.sections[this.state.currentSectionIndex]
    return (
      <div className='content'>
        {currentSection.content}
      </div>
    )
  }

  renderSections() {
    return this.props.sections.map((section, index) => (
      <li>
        <button key={index} onClick={() => this.handleButtonClick(index)}>
          {section.title}
        </button>
        {/* requirement = "The component renders no sections as active by default" */}
        {this.state.AnySectionDisplayed && (index === this.state.currentSectionIndex) 
          && this.renderContent()}
      </li>
    ))
  }
  render(){
    return(
      <ul>
        {this.renderSections()}
      </ul>
    );
  }
}