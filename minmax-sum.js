
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
