exports.smartTrim = (str, length, delim, appendix) => {     //delim will be a space and appendix will be ... (to make the excerpt look better)
    if (str.length <= length) return str;                   //defined in controllers blog

    var trimmedStr = str.substr(0, length + delim.length);

    var lastDelimIndex = trimmedStr.lastIndexOf(delim);
    if (lastDelimIndex >= 0) trimmedStr = trimmedStr.substr(0, lastDelimIndex);

    if (trimmedStr) trimmedStr += appendix;
    return trimmedStr;
};