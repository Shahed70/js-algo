
let arr = [1,3,5,7,9]

function miniMaxSum(arr) {
    let tempArr = [];
    for(let i =0; i<arr.length; i++){
    let temp = arr.filter( n => n!== arr[i])
    let mysum = temp.reduce((acc, val) => acc + val)
    tempArr.push(mysum)
}

let max = Math.max(...tempArr)
let min = Math.min(...tempArr)
console.log(Number(min) + " " + Number(max));

}

miniMaxSum(arr)


function miniMaxSum(arr) {
    let sum = arr.reduce((a, b) => a + b);
    let maxVal = Math.max(...arr);
    let minVal = Math.min(...arr);
    console.log((sum - maxVal) + ' ' + (sum - minVal));
}


let numbers = arr.slice('').sort();
    let maxScore = 0;
    let minScore = 0;
    for(let i = 0; i < numbers.length - 1; i++) {
        minScore += numbers[i];
    };
    for(let j = 1; j < numbers.length; j++) {
        maxScore += numbers[j];
    };
    console.log(`${minScore} ${maxScore}`);