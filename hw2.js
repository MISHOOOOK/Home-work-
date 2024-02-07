function pad(string, char, length, toStart) {
    if (string.length >= length) {
        return string;
    }
    
    const a = length + string.length;
    