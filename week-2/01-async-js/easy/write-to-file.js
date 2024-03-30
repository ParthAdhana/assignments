const fs=require("fs");
fs.writeFile("a.txt","writing in file by fs library",function(error){
    if(error)throw error;
    console.log("Mission completed");
})