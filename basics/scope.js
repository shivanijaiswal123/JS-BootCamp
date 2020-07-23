// 1. lexical scope (static scope)
// 2. Global scope - defined outside of all code blocks
// 3. local scope - defined inside a code block

// In a scope you can access variables defined in that scope, or in any parent/ancestor scope

// Global scope(varOne)
   //local scope (varTwo)
     //local scope (varFour)
   //local scope (varTwo)




let varOne = 'varOne'

if(true){
    console.log(varOne)
    let varTwo = 'varTwo'
}

console.log(varTwo)






let varOne = 'varOne'

if(true){
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)
}





let varOne = 'varOne'

if(true){
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)
}

if(true){
    let varThree ='varThree'
}

console.log(varTwo)






let varOne = 'varOne'

if(true){
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)
    if(true){
        let varFour = 'varFour'
    }
}

if(true){
    let varThree ='varThree'
}

console.log(varTwo)



