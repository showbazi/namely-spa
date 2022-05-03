import React from "react";

import "./App.css"
import Header from "./../header/header"
import Searchbox from "./../Searchbox/Searchbox";
import ResultsContainer from "../ResultsContainer/ResultsContainer";

const name = require('@rstacruz/startup-name-generator')

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            headerText: "Namely!",
            headerExpanded: true.valueOf,
            suggestedNames: [],
        };
    }

    handleInputChange = (inputText) => {
        
        this.setState({headerExpanded: !inputText, suggestedNames: inputText ? name(inputText) : []});
    }

    render() {
        return (
            <div>
                <Header headerExpanded = {this.state.headerExpanded} headTitle= {this.state.headerText} />
                <Searchbox onInputChange = {this.handleInputChange} />
                <ResultsContainer suggestedNames = {this.state.suggestedNames} />
            </div>
       )
    }
}

export default App
