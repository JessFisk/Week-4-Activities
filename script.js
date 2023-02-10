////scope and Higher Order Functions
////Activities 



//Activity 1
const greeting= () => {
    console.log("Hello Codenation");
}

const repeat = (fn) => {
    for(let i = 0; i<5; i++){
        fn()
    }
}
repeat(greeting)



////Activity 2

let numbers= [2,6,8,13,26];

let newNumbers = numbers.map( (num) => {
    return num * 3;
})
console.log (newNumbers)


let numbers= [2,6,8,13,26];

let newNumbers = numbers.map( (CurrentValue) => {
    return CurrentValue * 3;
})
console.log (newNumbers)



////Activity 3

const add = (a,b) =>{
    return a+b
}
const suntract = (a,b) =>{
    return a-b
}
const multiply = (a,b) =>{
    return a*b
}
const divide = (a,b) =>{
    return a/b
}

const doMaths = (num1) =>{
    return (num2, fn)=> {
        return fn (num1,num2);
    }
}

console.log (doMaths (2)(5, divide))