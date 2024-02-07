function newIsNaNFunction(value) {
    // Перевіряємо, чи є вхідне значення не числом
    if (typeof value !== 'number') {
        return true;
    }
    return value !== value;
}
// Приклади 
console.log(newIsNaNFunction(NaN)); 
console.log(newIsNaNFunction(123)); 
console.log(newIsNaNFunction('abc'));
console.log(newIsNaNFunction(undefined)); 
console.log(newIsNaNFunction(false));
console.log(newIsNaNFunction(true)); 
console.log(newIsNaNFunction('21414')); 
