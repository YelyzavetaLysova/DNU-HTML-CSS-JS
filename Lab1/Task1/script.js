function getNumberInput(promptText) {
    let value;
    do {
        value = prompt(promptText);
        if (isNaN(value)) {
            alert("Будь ласка, введіть число.");
        }
    } while (isNaN(value));
    return parseInt(value);
}

// Запитуємо користувача про значення змінних
let A = getNumberInput("Введіть значення змінної A:");
let B = getNumberInput("Введіть значення змінної B:");
let C = getNumberInput("Введіть значення змінної C:");
let D = getNumberInput("Введіть значення змінної D:");
let E = getNumberInput("Введіть значення змінної E:");

// Тимчасова змінна для збереження значень під час перестановки
let temp;

// Перестановка значень згідно з варіантом AEBDC
temp = A; // temp = A
A = E;    // A = E
E = B;    // E = B
B = D;    // B = D
D = C;    // D = C
C = temp; // C = temp (початкове значення A)

// Виведення результатів
alert(`Результат перестановки:\nA = ${A}\nB = ${B}\nC = ${C}\nD = ${D}\nE = ${E}`);