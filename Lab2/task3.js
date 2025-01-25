const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countDigits(n) {
    return Math.abs(n).toString().length;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (countDigits(arr[j]) < countDigits(arr[minIndex])) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

function getUserInput() {
    rl.question('Введіть кількість елементів N: ', (N) => {
        N = parseInt(N);
        if (isNaN(N) || N <= 0) {
            console.log('Некоректне значення N.');
            rl.close();
            return;
        }

        let sequence = [];
        let count = 0;

        function askNextNumber() {
            if (count < N) {
                rl.question(`a[${count + 1}] = ? `, (num) => {
                    num = parseInt(num);
                    if (!isNaN(num)) {
                        sequence.push(num);
                        count++;
                        askNextNumber();
                    } else {
                        console.log('Некоректне значення. Спробуйте ще раз.');
                        askNextNumber();
                    }
                });
            } else {
                const sortedSequence = selectionSort(sequence);
                console.log('Упорядкована послідовність:');
                console.log(sortedSequence.join(' '));
                rl.close();
            }
        }

        askNextNumber();
    });
}

// Перевірка, чи програма запущена з файлу
if (process.argv[2] === '--file') {
    const inputFile = process.argv[3];
    const outputFile = process.argv[4];

    fs.readFile(inputFile, 'utf8', (err, data) => {
        if (err) {
            console.error(`Помилка читання файлу: ${err.message}`);
            return;
        }

        const lines = data.trim().split('\n');
        const N = parseInt(lines[0]);
        const sequence = lines.slice(1).map(Number);

        const sortedSequence = selectionSort(sequence);
        const outputData = sortedSequence.join(' ');

        fs.writeFile(outputFile, outputData, (err) => {
            if (err) {
                console.error(`Помилка запису файлу: ${err.message}`);
                return;
            }
            console.log(`Упорядкована послідовність записана у файл ${outputFile}`);
        });
    });
} else {
    console.log('Програма сортує послідовність цілих чисел за кількістю цифр у числі, використовуючи метод Selection Sort.');
    getUserInput();
}