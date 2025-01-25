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

// Запитуємо користувача про координати вершин трикутника
let Ax = getNumberInput("Введіть координату x вершини A:");
let Ay = getNumberInput("Введіть координату y вершини A:");
let Bx = getNumberInput("Введіть координату x вершини B:");
let By = getNumberInput("Введіть координату y вершини B:");
let Cx = getNumberInput("Введіть координату x вершини C:");
let Cy = getNumberInput("Введіть координату y вершини C:");

// Координати вершин трикутника
let triangle = {
    A: { x: Ax, y: Ay },
    B: { x: Bx, y: By },
    C: { x: Cx, y: Cy }
};

// Функція для відображення точки відносно осі абсцис
function reflectPoint(point) {
    return { x: point.x, y: -point.y };
}

// Відображення кожної вершини трикутника
let reflectedTriangle = {
    A: reflectPoint(triangle.A),
    B: reflectPoint(triangle.B),
    C: reflectPoint(triangle.C)
};

// Виведення результатів
alert(`Відображений трикутник:\nA: (${reflectedTriangle.A.x}, ${reflectedTriangle.A.y})\nB: (${reflectedTriangle.B.x}, ${reflectedTriangle.B.y})\nC: (${reflectedTriangle.C.x}, ${reflectedTriangle.C.y})`);