// Program to print all numbers between 1 and N that are divisible by both 3 and 5
const divisableNumber  = () =>{


const N = 50; 
console.log(`Numbers between 1 and ${N} divisible by both 3 and 5:`);

for (let i = 1; i <= N; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

}

divisableNumber()