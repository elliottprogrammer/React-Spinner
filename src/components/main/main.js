import React from 'react';
import PropTypes from 'prop-types';
import TopText from './topText';
import Form from './form';
import Output from './output';

const Main = (props) => {
    return ( 
        <div id="main">
            <div className="container">
                <TopText />

                <Form 
                    arrowsRotated={props.arrowsRotated}
                    formSubmitted={props.formSubmitted}
                    textareaText={props.textareaText}
                />
                <div className="clear"></div>
                <Output outputText={props.outputText} />
            </div>
        </div>
     );
}

Main.propTypes = {
    arrowsRotated: PropTypes.bool,
    formSubmitted: PropTypes.func,
    textareaText: PropTypes.string,
    outputText: PropTypes.string
}
 
export default Main;