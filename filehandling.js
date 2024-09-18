const { error } = require("console");
const fss = require("fs");
const { writeFile } = require("fs/promises");

// sync
fss.writeFileSync("./test.txt","Testing.....");
fss.writeFile("./test1.txt","Testing...",(error)=>{
    console.log("Some error has occurred: " + error);
});

fss.appendFileSync("./app.txt","Testing.....");

fss.appendFile("./text1.txt","Testing...",(error)=>{
    console.log("Some error has occurred: " + error);
});

// async
fss.readFile("./test.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Some error has occurred: " + err);
    }
    else{
        console.log(result);
    }
})

let result = fss.readFileSync("./test1.txt","utf-8");
