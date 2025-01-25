const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Визначення фігур
const figure1 = { x1: 1, x2: 3, y1: -Infinity, y2: Infinity };
const figure2 = { x1: 4, x2: 6, y1: -Infinity, y2: Infinity };
const figure3 = { x1: -Infinity, x2: Infinity, y1: 2, y2: 4 };

let attempts = 0;

function isPointInFigure(point, figure) {
    return point.x >= figure.x1 && point.x <= figure.x2 && point.y >= figure.y1 && point.y <= figure.y2;
}

function isPointInTargetArea(point) {
    const inFigure1Or2 = isPointInFigure(point, figure1) || isPointInFigure(point, figure2);
    const inFigure3 = isPointInFigure(point, figure3);
    return inFigure1Or2 && inFigure3;
}

function getUserInput() {
    rl.question('Введіть координати точки (x, y): ', (input) => {
        const [x, y] = input.split(',').map(Number);
        const point = { x, y };
        attempts++;

        if (isPointInTargetArea(point)) {
            console.log(`Нарешті ви влучили з ${attempts}-ї спроби!`);
            rl.close();
        } else {
            const distance = Math.abs(point.x - 2.5) + Math.abs(point.y - 3);
            if (distance < 1) {
                console.log('Тепліше');
            } else if (distance > 2) {
                console.log('Холодніше');
            } else {
                console.log('Тепліше, але не дуже');
            }
            getUserInput();
        }
    });
}

console.log('Спробуйте влучити точкою в область, утворену об\'єднанням двох вертикальних стрічок та перетином з горизонтальною стрічкою.');
getUserInput();