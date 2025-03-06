// Prime number is natty number that is GREATER than 1 w/ no positive divisors other than 1 & itself.

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
console.log(countPrimeNumbers());
const complete = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${complete - beforeStart} milliseconds`);
