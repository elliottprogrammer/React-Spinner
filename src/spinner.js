// javascript Spinner function
//
// https://github.com/elliottprogrammer/React-Spinner/blob/dev1/src/spinner.js
// Author: elliottprogrammer - https://github.com/elliottprogrammer


const spin = (text) => {
    // match spintax ( {wordexample1|wordexample2|wordexample3} )
    var spintaxMatch = text.match(/(?<=\{)[^}]+(?=\})/);
    // if no more matches, we're all done! return text.
    if (spintaxMatch === null) { return text; }
    // get the words in the spintax
    var words = spintaxMatch[0].split('|');
    // prep the string for use as a regular expression (escape all regex chars)
    var escapedMatch = spintaxMatch[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // make regex to match the full spintax for replacement
    const thisSpintax = new RegExp('{' + escapedMatch + '}', 'g');
    // replce the spintax with the randomly chosen word
    text = text.replace(thisSpintax, words[Math.floor(Math.random()*words.length)]);
    // recursive call
    return spin(text);
}

export default spin;