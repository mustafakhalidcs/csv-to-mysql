var fs = require('fs');
var csv = require('fast-csv');
var mysql = require('mysql');
var excelData = [];
var mysqldata = [];
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'phpexcel'
});
var Converter = require("csvtojson").Converter;
var converter = new Converter({});
//end_parsed will be emitted once parsing finished
converter.on("end_parsed", function(jsonArray) {
  console.log(jsonArray); //here is your result jsonarray
  console.log('LENGTH', jsonArray.length);
  connection.connect();
  connection.query('select * from tbl_excel', function(err, result) {
    for (var i = 0; i < result.length; i++) {
      mysqldata.push(result[i].name);
    }
    for (j = 0; j < jsonArray.length; j++) {
      if (jsonArray[j].name == mysqldata[j]) {
        console.log("matched");
      } else {
        var record = {
          name: jsonArray[j].name,
          email: jsonArray[j].email
        };
        var query = connection.query('insert into tbl_excel set ?', record, function(err, result) {
          if (err) {
            console.error(err);
            return;
          }
          console.error(result);
        });
      }
    }
  });
});

console.log('LISTENING FOR DIRECTORY CHANGE');
fs.watch('test', function(event, filename) {
  console.log('RECEIVED CHANGE FOR ' + filename + ' OF TYPE ' + event);
  if (event === 'change') {
    fs.createReadStream('test/' + filename)
      .pipe(converter)
      .on('open', function(data) {
        console.log('OPENED');
      })
      .on('end', function(data) {
        console.log('DONE');
      });
  }
});
