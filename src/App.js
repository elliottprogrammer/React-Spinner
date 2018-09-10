import React, { Component } from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import spin from './spinner';

class App extends Component {
    state = {
        arrowsRotated: false,
        outputText: "",
        textareaText: ""
    };

    onFormSubmit(e) {
        e.preventDefault();
        const classVal = !this.state.arrowsRotated;
        const submittedText = e.target.textbox.value;
        const spunText = spin(submittedText);
        this.setState({
            arrowsRotated: classVal,
            textareaText: submittedText,
            outputText: spunText
        })
    }

    render() {
        return (
            <div id="wrapper">
                <Header arrowsRotated={this.state.arrowsRotated}/>
                <Main 
                    formSubmitted={this.onFormSubmit.bind(this)}
                    arrowsRotated={this.state.arrowsRotated}
                    textareaText={this.state.textareaText}
                    outputText={this.state.outputText}
                />
                <Footer />
            </div>
        );
    }
}

export default App;
