
let n = 4;

function staircase(n) {
        
    for (let i = 1; i <= n; i++) {
        let step = "" 
        for(let j = 0; j <n-i; j++){
                step += " "
        }
        for(let k = 0; k <i; k++){
                step += "#"
        }
        console.log(step);
        
    }
   

}

staircase(n)