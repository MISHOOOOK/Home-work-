
// Отримати рік від користувача через prompt
let yearInput = prompt("Введіть рік:");

// Перевірка, чи введено число та чи воно не від'ємне
if (!isNaN(yearInput) && yearInput >= 0) {
    // Перетворити рік на число
    const year = parseInt(yearInput);

    // Визначення форми слова "рік"
    let wordForm;
    if (year % 10 === 1 && year % 100 !== 11) {
        wordForm = "рік";
    } else if ([2, 3, 4].includes(year % 10) && ![12, 13, 14].includes(year % 100)) {
        wordForm = "роки";
    } else {
        wordForm = "років";
    }

    // Виведення результату
    console.log(`Введений рік: ${year} ${wordForm}`);
} else {
    console.log("Будь ласка, введіть додатне число.");
}


