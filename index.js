const fs = require('fs');
const csvParser = require('csv-parser');
const path = require('path');

const result = [];
fs.createReadStream(path.join(__dirname, 'demo.csv'))
  .pipe(csvParser({}))
  .on('data', (data) => result.push(data))
  .on('end', () => console.log(result))


// using fast
// const fastcsv = require("fast-csv");
// fs.createReadStream("public/blank-template.csv")
// .pipe(fastcsv.parse({ headers: true })) //{ headers: true } for object view
// .on("error", (error) => console.error(error))
// .on("data", (item) => {result.push(item)})
// .on("end", (rowCount) => {
//   console.log(`Parsed ${rowCount} rows`)
//   console.log(result);
// })