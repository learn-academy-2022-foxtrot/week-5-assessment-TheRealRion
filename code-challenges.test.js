// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


//Template  Red --> Green --> Refactor : 
// describe("funcName", () => {
//     it("", () => {
//       expect(funcName(input)).toEqual(output)
//     })
//   })


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("codeMe", () => {
    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    it("takes in a string and returns a coded message", () => {
    expect(codeMe(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(codeMe(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(codeMe(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

//Ran $ yarn jest to ensure "red" test
//Code fail-yay! 
// ReferenceError: codeMe is not defined

// b) Create the function that makes the test pass.
//PsudoCode
  //1 create a function (codeMe)
  //2 takes in a string (one peramiter-string)
  //3 change string to array (.split)
  //4 iterate over array to find letters (a/e/i/o) and changes to numbers (4/3/1/0) -using if statements
  //5 puses to temp array (..temp)
  //6 joins array back together to make string (.join)
  //7 outputs string (return)


const codeMe = (string) => {
    string= string.toLowerCase()
    arr= string.split("")
    temp = []   
    arr.map((letter => {
        if (letter === 'a') {
            letter = '4'
            return temp = [...temp, letter];
        } 
        else if (letter === 'e') {
            letter = '3'
            return temp = [...temp, letter];
        } 
        else if (letter === 'i') {
            letter = '1'
            return temp = [...temp, letter]
        } 
        else if ( letter === 'o') {
            letter = '0'
            return temp = [...temp, letter]
        }
        else {
            return temp = [...temp, letter]
        }
    
}))
    return   temp.join('').charAt(0).toUpperCase() + temp.join('').slice(1)
}

//I struggled with remembering the () after methods here, but thankfully , finally, got it to pass! I know there must be some easier refactoring method available here, so looking forward to Wed to see!


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.
describe("findMe", () => {
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
    const letterA = "a"
    // Expected output: ["Mango", "Apricot", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
    expect(findMe(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
    expect(findMe(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

//Ran $ yarn jest to ensure "red" test
//Code fail-yay! 
// ReferenceError: findMe is not defined

// b) Create the function that makes the test pass.
//PsudoCode
  //1 create a function (findMe)
  //2 takes in two peramiters (arr, str)
  //3 iterate over each arr index to find letter from str 
  //4 puses to temp array (..temp)
  //5 joins array back together to make string (.join)
  //6 outputs arr w/ arr strings containing str letter

const findMe = (arr, str) => {
    temp1 = []
    arr.map((index) => {
        temp2=[]
        temp2= index.toLowerCase().split("")
        if (temp2.includes(str)) {
            temp2= temp2.join("").charAt(0).toUpperCase() + temp2.join("").slice(1)
            console.log(temp2)
            temp1 = [...temp1, temp2]
        }
            
        }
    )
    console.log(temp1)
    return (temp1)
} 

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.


describe("fullHouse", () => {
    const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true
    it(" takes in an array of 5 numbers and determines whether or not the array is a 'full house'", () => {
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
    expect(fullHouse(hand4)).toEqual(true)
    })
})

//Ran $ yarn jest to ensure "red" test
//Code fail-yay! 
// ReferenceError: fullHouse is not defined

// b) Create the function that makes the test pass.

//PsudoCode
  //1 create a function (fullHouse)
  //2 takes in one peramiter (arr)
  //3 sorts arr (.sort) to make finding matches easier
    //4a if index 0 & index 1 match
        //5a if index 0 & index 2 match
            //5a.1 if index 3 & index 4 match
                //5a.1a return true
                //5a.1b return false
        //5b if index 2 & index 3 match
            //5b.1a return true
            //5b.1b return false
        //5c return false
    //4b return false

    // winArr = [
//     [1, 1, 1, 2, 2]
//     [1, 2, 1, 2, 1]
//     [1, 2, 2, 1, 1]
//     [1, 2, 1, 1, 2]
//     [2, 1, 2, 1, 1]
//     [2, 2, 1, 1, 1] 
// ]
 // [0, 1, 2, 3, 4]

    const fullHouse = (arr) => {
        arr = arr.sort()
        if (arr[0] === arr[1]) {
            if (arr[0] === arr[2]) {
                if (arr[3] == arr[4]) {
                    return true
                }
            } else if (arr[2] === arr[3]) {
                if (arr[2] ===arr[4]) {
                    return true
                } else {
                    return false 
                }
            } else {
                return false 
            }
        } else {
            return false
        }
    }

//Originally, I had thourhgt to try using a winArr like the tic-tac-toe, but couldn't work the logic for it out in my head, so felt like I had a major breakthrough when I had it simply sort the cards, as any human would automatically do anyways! Then it was easy to chain if/else statements to get the answer. I felt INCREDIBLY accomplished after I got this one to pass!!! 