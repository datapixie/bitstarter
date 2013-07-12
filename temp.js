#!/usr/bin/env node

/**
 * Module dependencies.
 */



var program = require('commander');
var fs = require('fs');
var clone = function(fn) {                                                        
    return fn.bind({});
};

var assertFileExists = function(infile) {
    var instr = infile.toString();
    if(!fs.existsSync(instr)) {
        console.log("%s does not exist. Exiting.", instr);                                                                                                                                  
        process.exit(1);
    }                                                                                                                                                                                   
   return instr;                                                                          
};  

program
    .version('0.0.1')
    .option('-p, --peppers', 'Add peppers')
    .option('-P, --pineapple', 'Add pineapple')
    .option('-b, --bbq', 'Add bbq sauce')
    .option('-h, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
    .option('-c, --checks [check_file]', 'Path to file', clone(assertFileExists), "index.html")
    .option('-u, --url [url]', 'url')
    .parse(process.argv);

console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbq) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);

if (program.checks) console.log(program.checks);

if (program.url) console.log(program.url);
