const child_Process = require('child_process');

// child_Process.exec('mkdir cute', (err, stdout, stdein) => {
//     console.log(stdout);
// });

child_Process.exec('java Hello.java',(err, stdout,stdin) => {

    console.log(stdout); 
});
