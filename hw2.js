function pad(string, char, length, toStart) {
    if (string.length >= length) {
        return string;
    }
    
    const a = length - string.length;
    const b = char.repeat(a);
    
    if (toStart) {
        return b + string;
    } else {
        return string + b;
    }
}
const resultPadEnd = pad('qwerty', '+', 8, false);
console.log(resultPadEnd);  
const resultPadStart = pad('qwerty', '+', 8, true);
console.log(resultPadStart); 