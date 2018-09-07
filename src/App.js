import React, { Component } from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

class App extends Component {
    constructor() {
        super();
        
        this.state = {
            arrowsRotated: false,
            outputText: "",
            textareaText: ""
        };
    }

    preg_quote(str, delimiter) {
        return (str + '').replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + (delimiter || '') + '-]', 'g'), '\\$&');
    }
    
    spin(text) {
        var matches = text.match(/{[^<]+/gi);
        if (matches === null) {
            return text;
        }
        if (matches[0].indexOf('{') !== -1) {
            matches[0] = matches[0].substr(matches[0].indexOf('{') + 1);
        }
        if (matches[0].indexOf('}') !== -1) {
            matches[0] = matches[0].substr(0, matches[0].indexOf('}'));
        }
        var parts = matches[0].split('|');
        var t = this.preg_quote(matches[0]);
        const e_v = new RegExp('{' + t + '}', 'g');
        text = text.replace(e_v, parts[Math.floor(Math.random()*parts.length)]);
        return this.spin(text);
    }

    onFormSubmit(e) {
        e.preventDefault();
        const classVal = !this.state.arrowsRotated;
        const submittedText = e.target.textbox.value;
        const spunText = this.spin(submittedText);
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
