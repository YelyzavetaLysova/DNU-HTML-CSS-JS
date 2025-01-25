const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumOfDivisors(n) {
    let sum = 0;
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum;
}

function isEven(n) {
    return n % 2 === 0;
}

function processSequence(sequence) {
    let minValue = Infinity;
    let count = 0;
    let validNumbers = [];

    for (let num of sequence) {
        const sumDivisors = sumOfDivisors(num);
        if (isEven(sumDivisors)) {
            validNumbers.push(num);
            if (num < minValue) {
                minValue = num;
            }
        }
    }

    for (let num of validNumbers) {
        if (num === minValue) {
            count++;
        }
    }

    return count;
}

function getUserInput() {
    rl.question('Введіть послідовність цілих чисел, розділених пробілами: ', (input) => {
        const sequence = input.split(' ').map(Number);
        const result = processSequence(sequence);
        console.log(`Кількість найменших значень серед чисел з парною сумою власних дільників: ${result}`);
        rl.close();
    });
}

console.log('Програма обчислює кількість найменших значень серед чисел з парною сумою власних дільників.');
getUserInput();