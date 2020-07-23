const todos = [{
    "text":"order cat food",
    "completed":true
 },
{
    "text":"clean kitchen",
    "completed":false
 },
{
    "text":"buy food",
    "completed":true
 },
{
    "text":"Do work",
    "completed":false
 },
{
    "text":"Excercise",
    "completed":true
 }]



const sortTodos = function(todos){
    todos.sort(function(a,b){
        if(!a.completed && b.completed){
            return -1
        }else if(!b.completed && a.completed){
            return 1
        }else{
            return 0
        }
    })
}





const getTodos = function(todos){
    return todos.filter(function(todos,index){
        // return todos.completed.includes(false)
        return todos.completed === false
        // return !todos.completed
    })

}

// console.log(getTodos(todos))
sortTodos(todos)
console.log(todos)








// const deleteTodo = function(todos,text){
//     const index = todos.findIndex(function(todo,index){
//         return todo.text === text
//     })
//     if(index>-1){
//         todos.splice(index,1)
//         return todos
//     c}
// }



// deleteTodo(todos, 'buy xvcfood')
// // console.log(deleteTodo(todos, 'Excercise'))
// console.log(todos)
