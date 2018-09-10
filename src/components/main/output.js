import React from 'react';
import PropTypes from 'prop-types';

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

Output.propTypes = {
    outputText: PropTypes.string
}
 
export default Output;