//create an array with five todos
//you have x todos
//print the first and second to last items 


const todos = ['order cat food','clean kitchen','buy food','Do work','Excercise']

// console.log(`You have ${todos.length} todos!`)
// console.log(`Todo : ${todos[0]}`)
// console.log(`Todo : ${todos[todos.length - 2]}`)




//Challenge area

//Deleting third item 
todos.splice(2,1)


//Adding new item to the end 
todos.push('help others')

//removing first item 
todos.shift()

todos.forEach(function(item,index){
    console.log(`${index + 1}: ${item}`)
})


for(count= 0; count<todos.length; count++){
    console.log(`${count + 1}: ${todos[count]}`)
}







