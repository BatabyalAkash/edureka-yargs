var argv = require('yargs').argv
var fs = require('fs')
var fileName = process.argv[2]

fs.readFile('fileName.txt', function(err, data){
   if(data.includes(fileName)){
      fs.appendFile(fileName, 'You are awesome\n', function(err){
         if(err){
            console.log(err)
         }
         else{
            console.log('Appended Succesfully!')
         }
      })
   }
   else{
      fs.writeFile(fileName, 'Data written to file!\n', function(err){
         if(err){
            console.log(err)
         }
         else{
            console.log('File Written Succesfully!')
         }
      })
      fs.appendFile('filename.txt', fileName+'\n', function(err){
         if(err){
            console.log(err)
         }
         else{
            console.log('Appended Succesfully!')
         }
      })
   }
})