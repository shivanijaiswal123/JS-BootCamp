// let temp = 33

// if(temp >= 60 && temp <= 90){
//     console.log('it is preety nice out')
// }

// if(temp<=0 || temp>=120){
//     console.log('Dont go outside')
// }


// if(temp >= 60 && temp <= 90){
//     console.log('it is preety nice out')
// }else if(temp<=0 || temp>=120){
//     console.log('Dont go outside')
// }else{
//     console.log('Eh, Do what you want to do')
// } 

//Challenge

let isGuestOneVegan = true
let isGuestTwoVegan = false

if(isGuestOneVegan && isGuestTwoVegan){
    console.log('only offer up vegan dishes')
}else if(isGuestOneVegan || isGuestTwoVegan){
    console.log('Make sure to offer up some vegan dishes')
}else{
    console.log('offer up anything')
}
