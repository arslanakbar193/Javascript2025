console.log("there are 7 (Null , boolean , Mumber , Strings , Undefined , Symbol , Bigint ) primitive data types and 3 object data types");

var nullvalue = null;
console.log(typeof nullvalue);

var undefinedvalue;
console.log(typeof undefinedvalue);

var booleanvalue = false
console.log(typeof booleanvalue);

// convert a string into number 

var mynum = "1";
console.log(typeof +mynum);

// convert a string into number second Method

var mynum1 = "1";
console.log(typeof Number(mynum1));

// convert a number into string  

var myStr = 1;
console.log(typeof String(myStr));

// convert a number into string Second Method  

var myStr1 = 1;
console.log(typeof (myStr1 + ""));

//ParsInt is used to convert strings into a number

var myStr2 = parseInt("1");
console.log(typeof myStr2);

// NaN

var myStr3 = parseInt("XYZ");
console.log(myStr3);
console.log(isNaN(myStr3));

var checkoutput = "hello" / 2;
console.log(checkoutput)

var checkoutput = 0.1 + 0.2;
console.log(checkoutput)