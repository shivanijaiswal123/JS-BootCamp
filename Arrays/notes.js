
const notes = [
{title:'My next trip',
body: 'I would like to go to spain'},

{title:'Habbits to work on',
body: 'Excercise. Eating a bit better'},

{title:'Office modification',
body: 'Get a new seat'}]


const sortNotes = function(notes){
    notes.sort(function (a,b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        }else if(b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        }else{
            return 0
        }
    })
}







//find will return object directly and findIndex will return index of object.
const findNotes = function(notes, noteTitle){
    return notes.find(function(note,index){
        return note.title === noteTitle
    })
    
}



const findNote = function(notes,query){  
    return notes.filter(function(notes,index){
        const isTitleMatch = notes.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = notes.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
})}

// console.log(findNote(notes,'eating'))
sortNotes(notes)
console.log(notes)







// const findNotes = function(notes, noteTitle){
//     const index = notes.findIndex(function(note,index){
//         return note.title === noteTitle
//     })
//     return notes[index]

// }

// const note =  findNotes(notes, 'Office modification')
// console.log(note)



