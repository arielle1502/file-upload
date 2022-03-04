const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors')
const ServerlessHttp = require('serverless-http');
const csv = require("csv-parser");
const fs = require("fs");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const app = express();

// middle ware
app.use(express.static('public')); //to access the files in public folder
app.use(cors()); // it enables all cors requests
app.use(fileUpload());

let data =[];

const convert = (row) => {
    let stock_status;
if(row['STOCK ON HAND'] == 'More Than 10' || [1,2,3,4,5,6,7,8,9].includes(row['STOCK ON HAND'])){
    stock_status = 'instock'
}else stock_status = 'onbackorder'
  row['STOCK ON HAND'] = stock_status
  data.push(row);
};

const array = [
  { id: "UPC", title: "sku" },
  { id: "STOCK ON HAND", title: "stock_status" },
  
];
// file upload api
app.post('/upload', (req, res) => {
    

    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
        // accessing the file
    const myFile = req.files.file.name;
    console.log('myFile!!!!!!!!!', myFile);

    fs.createReadStream(myFile).pipe(csv())
    .on("data", (row) => {
         console.log('about to convert', row);
      convert(row);
      console.log('row!!!!!!!!!', row);
     
    })
    .on("end", () => {
      console.log('creating new file')
      const csvWriter = createCsvWriter({
        path: "out6.csv",
        header: array,
      });
      csvWriter
  
        .writeRecords(data)
        .then(() => console.log("The CSV file was written successfully"));
        return res.send( "success")
    });
  
          // returing the response with file path and name
        //   return res.send({name: myFile.name, path: "/out6.csv"});
        
      });


// app.listen(4500, () => {
//     console.log('server is running at port 4500');
// })

module.exports.handler = ServerlessHttp(app);
