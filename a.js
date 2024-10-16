const fs =require("fs");

fs.writeFile("ms.txt","hello",(err)=>{if (err)
     throw err; console.log("saved");

});