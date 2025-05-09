// var intro = "My name is arslan \n I am \"Frontend Developer\"."
// console.log(intro)

// indexOf(searchstring,position) return fitsr occurance of match otherwise return -1

// let text = "Arslan Akbar"
// let text2 = Array.from(text);
// text2.splice(6,1);
// const text3 = text2.map((cur) => {
//     return cur;
// })
// console.log(text3);
//replace
//charAt charcodeAt
//search , indexof lastindexof return -1 if not found
//search and match are same the key difference match can return dulplicate words return null
//match all return empty iterator and by defaukt add global flag
//includes return true
//startswith return true
//slice it ignore lastEndIndex but it will work backword when negative value like -6 but substring cant do that
// text.match("/javascript/gi");

//split also convert string into an array

// write a to z

// let mynumber1 = 96;
// for (i=97;i<=122;i++){
//     console.log(String.fromCharCode(i));
// }

//function to count vowels in a string

const checkvowelCount = (str) => {
    let vowels = "aeoiu";
    let count = 0;
    for(let char of str){
        // console.log(str.includes(char));
        if(vowels.includes(char)){
            count++;
        }
        
    }
    return count;
}
console.log(checkvowelCount("hello dubai from nested things"));

//check vowel in a string

const checkvowel = (str) => {
    let vowels = "aeoiu";
    for(let char of vowels){
        // console.log(str.includes(char));
        if(!str.includes(char)){
            return false;
        }
        
    }
    return true;
}
console.log(checkvowel("hello dubai"));

// check pangram

const pangramcheck = (str) => {
    let inputarr = str.toLowerCase().split("");
    console.log(inputarr); 

    const values = inputarr.filter((cur) => { return cur.charCodeAt() >= "a".charCodeAt() && cur.charCodeAt() <= "z".charCodeAt()});
    console.log(values);
    console.log([...new Set(values)].length);

}

console.log(pangramcheck("The quick brown fox jumps over the lazy dog"))
