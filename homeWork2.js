// Отримати рік від користувача через prompt
let yearInput = prompt("Введіть рік:");

// Перевірка, чи введено додатнє число
if (!yearInput || +yearInput < 0) {
    console.log("Будь ласка, введіть додатне число.");
} else {
    // Перетворити рік на число
    const year = +yearInput;

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
}
