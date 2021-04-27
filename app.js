 const chalk = require('chalk');
const { command, describe, demandOption, argv } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes');


// customize yargs
yargs.version('1.1.0');

//we want to: add, remove, read, list our notes

//create add command
yargs.command({
    command : 'add',
    describe:' add a new note',
    builder :{
      title:{
          describe:'note title',
          demandOption: true,
          type:'string'
      }, 
      body:{
          describe:'provide the body',
          demandOption: true,
          type:'string',

      }
    },
    handler :(argv)=>{
       notes.addNote(argv.title,argv.body)
    },

  
})

//create remove command
yargs.command({
    command: 'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string',
        }
    },
    handler:(argv)=>{
       notes.removeNotes(argv.title)
    }
    
}) 

//create list command
yargs.command({
    command:'list',
    describe:'list notes',
    handler:()=>{
        notes.listNotes();
    }
})


//create a read command

yargs.command({
    command:'read',
    describe:'reading command',
    builder:{
        title:{
            describe:'read notes',
            demandOption: true, 
            type:'String'
        }
    },
    handler:()=>{
        notes.readNotes(argv.title);
    }
})



// best way to call  the arguments is by using the following line
yargs.parse();
// console.log(yargs.argv);
