const {program} = require('commander');
const fs = require('node:fs');

program
    .option('-i, --input <file>', 'path to input file')
    .option('-o, --output', 'path to output file')
    .option('-d, --display', 'result to console');

program.parse(process.argv);

const opts = program.opts();
if(!opts.input){
    throw new Error('Please, specify input file');
}
else{
    fs.readFile(opts.input, 'utf8', (err, data) => {
        if (err) {
          throw new Error('Cannot find input file');
        }
        
      });
}

if(opts.output){

}

if(opts.display){

}