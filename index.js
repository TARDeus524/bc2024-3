const {program} = require('commander');
const fs = require('node:fs');

let TotalIncome;
let TotalSpent;

program
    .option('-i, --input <file>', 'path to input file')
    .option('-o, --output [file]', 'path to output file')
    .option('-d, --display', 'result to console');

program.parse(process.argv);

const opts = program.opts();
if(!opts.input){
    throw new Error('Please, specify input file');
}
else{
    try{
      let data = fs.readFileSync(opts.input, 'utf8')

        let dataArrObj = JSON.parse(data);

        dataArrObj.forEach(element => {
          if(element["txten"] == "Income, total") {TotalIncome = element["value"];}
          if(element["txten"] == "Expenses, total") {TotalSpent = element["value"];}

        });

      }
      catch(err){
        throw new Error('Cannot find input file')
      }
}

if(opts.output){
  fs.writeFile(opts.output, "Доходи, усього:" + TotalIncome + "\n" +  "Витрати, усього:" + TotalSpent, err => {
    if(err) {throw new Error("Could not write or create a file");}
  })
}

if(opts.display){
  console.log("Доходи, усього:" + TotalIncome);
  console.log("Витрати, усього:" + TotalSpent);
}