console.log(['1', '2', '3'].map(parseInt));  //  [1, NaN, NaN]

/*
    map function has a callback function having three parameters
        1. the element
        2. the index
        3. the array
    
    ['1', '2', '3'].map(parseInt). Here parseInt takes as a callback function and (element,index,array) are passed as parseInt's parameters
    
    now it's like map(parseInt(element,index))

    first iteration  (index is 0) parseInt("1", 0); => 1
        this has another parameter other than string as 0. Since another parameter is 0, it acts like its a decimal number system.
        with base 10.
    second iteration  (index is 1) parseInt("2", 1); => NaN
        this has another parameter other than string as 1. Since another parameter is 1, it has nothing to do with number system. So it gives NaN
        
    third iteration  (index is 2) parseInt("3", 2); => NaN
        this has another parameter other than string as 2. Since another parameter is 2, it acts like a binary number system. but it can't convert 3 in decimal value. When ever we have 2 in the second argument , we should have a value with a binary number 0 and 1. So, it gives NaN

*/

// to make it work, we should work like below

const returnNumbers = (element, index) => {
    return parseInt(element)
}

console.log([1, 2, 3].map(returnNumbers));

// this can be also written like below

console.log([1, 2, 3].map((element, index) => {
    return parseInt(element)
}))