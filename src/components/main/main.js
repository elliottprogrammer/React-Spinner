import React from 'react';
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
 
export default Main;