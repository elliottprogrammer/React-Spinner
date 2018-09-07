function preg_quote(str, delimiter) {
    return (str + '').replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + (delimiter || '') + '-]', 'g'), '\\$&');
}

function spin(text) {
    var matches = text.match(/{[^<]+/gi);
    if (matches === null) {
        return text;
    }
    if (matches[0].indexOf('{') != -1) {
        matches[0] = matches[0].substr(matches[0].indexOf('{') + 1);
    }
    if (matches[0].indexOf('}') != -1) {
        matches[0] = matches[0].substr(0, matches[0].indexOf('}'));
    }
    var parts = matches[0].split('|');
    var t = preg_quote(matches[0]);
    e_v = new RegExp('{' + t + '}', 'g');
    text = text.replace(e_v, parts[Math.floor(Math.random()*parts.length)]);
    return spin(text);
}