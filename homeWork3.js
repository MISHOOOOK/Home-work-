// Введення значень користувачем
const unit = prompt("Введіть одиницю вимірювання (км, год, кг):");
const value = parseFloat(prompt("Введіть кількість:"));

// Функція для конвертації одиниць виміру
function convertUnits(unit, value) {
    let result;

    switch (unit) {
        case "км":
            result = `${value} км це ${value * 1000} м.`;
            break;
        case "год":
            result = `${value} год це ${value * 60} хв.`;
            break;
        case "кг":
            result = `${value} кг це ${value * 1000} грм.`;
            break;
        default:
            result = "Невідома одиниця виміру.";
    }

    console.log(result);
}

// Виклик функції для конвертації
convertUnits(unit, value);
