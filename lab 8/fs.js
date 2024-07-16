const fs = require('fs');

fs.exists('D:\\harshil\\lab 8\\Modul.js', (err,data) => {
    console.log('Module file exists', data);
});

fs.stat('D:\\harshil\\lab 8\\Modul.js', (err,data) => {
    console.log('is state', data);
});

fs.readFile('D:\\harshil\\lab 8\\Modul.js', (err,data) => {
    console.log('the file is ', data.toString());
});
fs.writeFile('myfirst.js',"harshil", (err,data) => {
    console.log('the  written is ' );
});
fs.appendFile('myfirst.js'," solanki", (err,data) => {
    console.log('the  data is ' );
});

fs.readFile('D:\\harshil\\lab 8\\Modul.js', (err,data) => {

    fs.writeFile('mysecond.js',data,(err)=>{
        console.log(err);
     
    })
});
