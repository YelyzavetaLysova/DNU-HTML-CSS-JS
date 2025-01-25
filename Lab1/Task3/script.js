function getNumberInput(promptText) {
    let value;
    do {
        value = prompt(promptText);
        if (isNaN(value)) {
            alert("Будь ласка, введіть число.");
        }
    } while (isNaN(value));
    return parseFloat(value);
}

// Запитуємо користувача про координати точки
let Px = getNumberInput("Введіть координату x точки:");
let Py = getNumberInput("Введіть координату y точки:");

// Координати точки
let point = { x: Px, y: Py };

// Параметри першої вертикальної стрічки
let stripe1 = {
    xMin: getNumberInput("Введіть мінімальне значення x для першої стрічки:"),
    xMax: getNumberInput("Введіть максимальне значення x для першої стрічки:"),
    yMin: getNumberInput("Введіть мінімальне значення y для першої стрічки:"),
    yMax: getNumberInput("Введіть максимальне значення y для першої стрічки:")
};

// Параметри другої вертикальної стрічки
let stripe2 = {
    xMin: getNumberInput("Введіть мінімальне значення x для другої стрічки:"),
    xMax: getNumberInput("Введіть максимальне значення x для другої стрічки:"),
    yMin: getNumberInput("Введіть мінімальне значення y для другої стрічки:"),
    yMax: getNumberInput("Введіть максимальне значення y для другої стрічки:")
};

// Функція для перевірки, чи належить точка стрічці
function isPointInStripe(point, stripe) {
    return point.x >= stripe.xMin && point.x <= stripe.xMax &&
           point.y >= stripe.yMin && point.y <= stripe.yMax;
}

// Перевірка, чи належить точка об'єднанню стрічок
let isInUnion = isPointInStripe(point, stripe1) || isPointInStripe(point, stripe2);

// Виведення результату
alert(`Точка (${point.x}, ${point.y}) належить об'єднанню стрічок: ${isInUnion}`);