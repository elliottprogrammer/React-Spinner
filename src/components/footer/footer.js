import React from 'react';

const Footer = () => {
    const copyDate = new Date();
    const year = copyDate.getFullYear();
    return ( 
        <footer id="footer">
            <div className="container">
                <p>&copy; { year }, Spin Viewer Tool, v2.0 , <small>bryan@elliottprogrammer.com</small></p>
            </div>
        </footer>
    );
}
 
export default Footer;