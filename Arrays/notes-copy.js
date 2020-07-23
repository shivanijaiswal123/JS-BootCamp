// const notes = ['Note 1' , 'Note 2' , 'Note 3']
const notes = [
    {title:'My next trip',
    body: 'I would like to go to spain'},
    
    {title:'Habbits to work on',
    body: 'Excercise. Eating a bit better'},
    
    {title:'Office modification',
    body: 'Get a new seat'}]
    
    console.log(notes)
    // console.log(notes.length)
    // console.log(notes[3])
    // console.log(notes[notes.length - 1])
    
    console.log(notes.push('My New Note'))
    console.log(notes)
    
    console.log(notes.pop())
    console.log(notes)  
    
    console.log(notes.pop())
    notes.push('My New Note')
    
    console.log(notes.shift())
    notes.unshift('My First Note')
    
    notes.splice(0,0 )
    
    //adding
    notes.splice(0,0, 'This is first one output' )
    
    //replacing
    notes.splice(0,1, 'This is first one output' )
    
    //other way to replace
    notes[0] = 'My new note'
    
    //removing
    notes.splice(0,1 )
    
    
    console.log(notes.length)
    console.log(notes) 
    
    
    
    
    
    
    
    
    // looping over araay
    
    const note = ['Note 1' , 'Note 2' , 'Note 3']
    
    note.forEach(function(item, index){
        console.log(item)
        console.log(index)
    })
    
    
    
    
    
    
    
    //counting..
    for(count=0; count<=2; count++){
        console.log(count)
    }
    
    for(let count = 0; count<notes.length; count++){
        console.log(notes[count])
    }
    
    console.log(notes.indexOf('Nddote 2'))
    
    
    
    
    
    
    //To find item in objects
    const index = notes.findIndex(function(note,index){
        return note.title === 'Habbits to work on'
    })
    
    console.log(index)
    
    