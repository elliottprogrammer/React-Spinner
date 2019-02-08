import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return ( 
        <header id="header">
            <div id="spinner"><svg className={(props.arrowsRotated) ? "spin" : ""} id="header-spinner" width="32px" height="32px" viewBox="0 0 128 128"><rect x="0" y="0" width="100%" height="100%" fill="transparent" /><g><path  fill="#0f75bc" fillOpacity="1" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/></g></svg></div>
            <h1 id="main-title">Spin Viewer</h1>
        </header>
    );
}

Header.defaultProps = {
    arrowsRotated: false
}

Header.propTypes = {
    arrowsRotated: PropTypes.bool
}

export default Header;