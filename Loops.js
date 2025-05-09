// number is even or odd
 var num = 6;
 if( num % 2 === 0){
    console.log("even number");
 }
 else{

 }console.log("odd number");

 // check number is zero , negative or positive

 var num1 = -1;
 if(num1 === 0){
    console.log("number is zero");
 }
 else if(num1 >0){
    console.log("number is positive");
 }
 else{
    console.log("number is negative");
 }

 // check leap year

 let year = 2026;

 if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    console.log("it is leap year")
 }
 else{
    console.log("it is not a leap year")
 }

 // check patterns

 for( var i =1; i<=5; i++){
    var pattern = ""
    for (var j = 1; j<=i ; j++){
        pattern = pattern + "*"
    }
    console.log(pattern);
 }

//  Reverse String

const isReverse = (str) => {
    for (let char=str.length-1; char >=0; char--){
        console.log(str[char]);
    }
}
isReverse("arslan akbar");

// palandrome String

const isReversee = (str) => {
    let reverse = "";
    for (let char = str.length-1; char >=0; char--){
        reverse = reverse + str[char];
        
    }
    if(str === reverse){
        return true;
    }
    else{
        return false;
    }
    
}

console.log(isReversee("arslan akbar"));