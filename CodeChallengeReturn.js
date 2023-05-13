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

// code snippet 5
var num = 15;
console.log(num);
function timesTwo(num2){
    console.log(num2);
    return num2*2
}
var result = timesTwo(10);
console.log(result);
console.log(num);
// this code snippet will output var num 15, then it will tke in the number 10 when the function is called, output num2 10, store in var result the multiplication of num2(10)*2 then output var result(20) and num(15)

//code snippet 6
function timesTwoAgain(num){
    console.log('num is', num);
    var y = num*2;
    return  y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result)
// this code snippet will first take in the num(3), then output 'num is 3', multiply num(3)*2 and return the result of it, then it'll run again but this time with num(5), add the results of both of those function calls together, store them in var result and log 'result is 16'

// code snippet 7
function sumNums(num1, num2){
    return num1+num2;
}
console.log(sumNums(2,3))
console.log(sumNums(3,5))
// this code snippet will first take in two numbers, and return the addition of the two numers(5), itll repeat the samething for the second call(8)

// code snippet 8
function printSumNums(num1, num2){
    console.log(num1);
    return num1+num2;
}
console.log(printSumNums(2,3))
console.log(printSumNums(3,5))
// this code snippet will first take in two numbers, log num1 on each function call, and return the addtion of the two numbers, itll repreat the samething for the second call. 2 5 3 8

// code snippet 9 
function sumNums1(num1, num2){
    var sum = num1 + num2;
    console.log('sum is', sum)
    return sum;
}
var result = sumNums1(2,3) + sumNums1(3,5);
console.log('result is', result)
// This code snippet will first take in two numbers, add them together and store them in var sum, log what the sum of the two numers is and return the sum, it'll repeat the same for the second function call and store them in var result where they will be added together, and log the result. 5 8 13

// code snippet 10 - Tough Challenge
function sumNum2(num1, num2){
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}                   //5                 
var result = sumNum2(2,3) + sumNum2(3, sumNum2(2,1)) + sumNum2(sumNum2(2,1),sumNum2(2,3));
console.log('result is', result);
// this code snippet will add all the numbers together, and print each addition, and then the result of the addition of all the numbers will be 19
// 5 3 6 3 5 8 19