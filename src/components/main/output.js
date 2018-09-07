import React from 'react';

const Output = (props) => {
    const outputStyle = {};
    outputStyle.visibility = (props.outputText === "") ? "hidden" : "visible";
    

    return ( 
        <div id="output"
        style={outputStyle}
        dangerouslySetInnerHTML={{__html: props.outputText}}
        >
        </div>
     );
}
 
export default Output;