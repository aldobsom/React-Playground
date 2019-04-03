import React from "react";
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from "../contexts/ColorContext";


export default class Button extends React.Component {

  static contextType = LanguageContext;

  renderSubmit(language) {
    return language === "english" ? "Submit" : "Voorlegen";
  }

  renderButton = (color) => {
    return (
      <button className={`ui button ${color}`}>
       {<LanguageContext.Consumer>
          {({language}) => this.renderSubmit(language)}
        </LanguageContext.Consumer>}
      </button>
    )
  }

  render() {
    // console.log(this.context);
    // const text = this.context === 'english' ? "Submit" : "Voorleggen";
    
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    ) 
  }
}