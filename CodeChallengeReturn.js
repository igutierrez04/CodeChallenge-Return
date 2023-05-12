// Predict the output for the follow code snippets

// code snippet 1
function hello(){
    console.log('hello');
}
hello();
console.log('Dojo');
// this code snippet will output "hello" and "dojo" to the terminal

//code snippet 2
function hello(){
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);
// this code snippet will output "hello" then it'll store 15 into the variable result and console.log "result is 15"

//code snippet 3
function numPlus(num){
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);
// this code snippet will output "num is 3" it'll then add 3+15 store it into the result variable and output "result is 18"

// code snippet 4 
var num = 15;
console.log(num);
function logAndReturn(num2){
    console.log(num2);
    return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);
// this code snippet will output var num 15, then it'll take in the number 10 when the function is called, output num2 10, store in var result and then output result 10 and num 15
