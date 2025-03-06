function countPrimeNumbers() {
    let count = 0;

    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
}

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

// Measure execution time
const beforeStart = performance.now();

for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}

const complete = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${complete - beforeStart} milliseconds`);
