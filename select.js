var fs = require('fs');
var csv = require('fast-csv');
var excelData = [];
var mysqldata = [];
//reading data from csv file
var iterator = 1;
fs.watch('test/', function(event, filename) {
    fs.createReadStream(filename)
        .pipe(csv())

    /*When read data from example.csv 
    // push data into exceldata array*/

    .on('data', function(data) {
    	console.log('DATA TRIGGER', iterator);
    	iterator = iterator + 1;
            for (i = 0; i < data.length / 2; ++i) {
                excelData.push(data[0] + "-" + data[1]);
            }

        })
        .on('end', function(data) {
            //console.log("ending : ",data);
        });
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'phpexcel'
    });
    /*Connect to the db and read data*/
    /*Store this data in mysql array */
    connection.connect();
    connection.query('select * from tbl_excel', function(err, result) {
        for (var i = 0; i < result.length; i++) {
            mysqldata.push(result[i].name);
        }
        /*run a loop of length of Excelsheet rows*/
        /*Compare exceldata with mysqldata*/
        /*If matched, do nothing */
        /*Else read the data from excelsheet and insert into mysql*/
        for (j = 0; j < excelData.length; j++) {
            if (excelData[j].split("-")[0] == mysqldata[j]) {
                console.log("matched");
            } else {
                var record = {
                    name: excelData[j].split("-")[0],
                    email: excelData[j].split("-")[1]
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
