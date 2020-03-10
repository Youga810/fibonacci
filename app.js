'use strict';
var fibo = [];
function fib(n){
    fibo[0] = 0;
    fibo[1] = 1;
    if(n === 0){
        return 0;
    }
    if(n === 1){
        return 1;
    }
    fibo[n] = fibo[n-1]+fibo[n-2];
    return fibo[n];
}
const length = 100;
for(let i = 0;i <= length;i++){
    console.log(fib(i));
}