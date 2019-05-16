import React from "react";
import './Accordion.css'

export default class Accordion extends React.Component {
  static defaultProps = { sections: [] };
  state = {
    currentSectionIndex:null // "The component renders no sections as active by default" 
  };
  handleButtonClick(index){
    this.setState({ currentSectionIndex: index })
  }

  renderContent() {
    const currentSection = this.props.sections[this.state.currentSectionIndex]
    return (
      <p className='content'>
        {currentSection.content}
      </p>
    )
  }

  renderSections() {
    return this.props.sections.map((section, index) => (
      // the repeated element needs the key
      <li key={index} className='Accordion__item'>
        {/* but the index is also useful to ident the button being clicked */}
        <button onClick={() => this.handleButtonClick(index)}> 
          {section.title}
        </button>
        {/* if the current section index is non-null and matches the index, display the content */}
        {(index === this.state.currentSectionIndex) 
          && this.renderContent()}
      </li>
    )) 
  }
  render(){
    return(
      <ul className='Accordion'>
        {this.renderSections()}
      </ul>
    );
  }
}