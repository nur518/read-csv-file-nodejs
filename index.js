const fs = require('fs');
const csvParser = require('csv-parser');
const path = require('path');

const result = [];
fs.createReadStream(path.join(__dirname, 'demo.csv'))
  .pipe(csvParser({}))
  .on('data', (data) => result.push(data))
  .on('end', () => console.log(result))