// Отримати рік від користувача через prompt
let yearInput = prompt("Введіть рік:");

// Перевірка, чи введено додатнє число
if (!yearInput || +yearInput < 0) {
    console.log("Будь ласка, введіть додатне число.");
} else {
    // Перетворити рік на число
    const year = +yearInput;

    // Визначення форми слова "рік"
    let wordForm = "років";

    if (year % 10 === 1 && year % 100 !== 11) {
        wordForm = "рік";
    } else if ((year % 10 === 2 || year % 10 === 3 || year % 10 === 4) &&
               (year % 100 < 12 || year % 100 > 14)) {
        wordForm = "роки";
    }

    // Виведення результату
    console.log(`Введений рік: ${year} ${wordForm}`);
}
