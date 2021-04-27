
const { default: chalk } = require('chalk');
const fs =require('fs');



//add notes api
const addNote= function (title, body){
    const notes = loadNotes();

    // const duplicateNotes =note.filter((notes) => notes.title === title)
    // the filter method loops throught the whole array. even after finding the duplicate
    //to solve this we use find method: more precise, tops after it finds the parsed object
    const duplicateNotes= notes.find((note)=>note.title === title)
    
    if(!duplicateNotes){
        notes.push({
            title:title,
            body:body

        })
        console.log( chalk.green('add successful'))
    }else{
        console.log('note already exist');
    }
    
    saveNotes(notes)
}
// remove function
const removeNotes =(title)=> {
    readNotes = loadNotes();
    filterdNotes = readNotes.filter((note)=>note.title !== title)

    if (filterdNotes.length < readNotes.length) {
        console.log(chalk.green('note successfuly removed'))
        saveNotes(filterdNotes)
    } else {
        console.log(chalk.red('note not found ') );

    }
}
//list notes
const listNotes = ()=>{
    const availableNotes = loadNotes();
    console.log(chalk.blue("your notes : ") + availableNotes.map((notes)=>notes.title))    
}


//read notes
const readNotes = (title)=>{
   const notes = loadNotes();
   
   const n = notes.find((note)=>note.title===title)
   if (n) {
       console.log(n.body)
   } else {
       console.log(chalk.red('note not found'));
   }
   
}
//support api
//save  notes api
const saveNotes = (note) => {
const dataJSON = JSON.stringify(note)
fs.writeFileSync('notes.json', dataJSON)
}

//loadnotes api
const loadNotes= ()=>{
 try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString(); 
        return JSON.parse(dataJSON);
    } catch (e){
        return []
    }
    
}






module.exports = {
    // getNotes:getNotes,
    addNote: addNote,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
}; 