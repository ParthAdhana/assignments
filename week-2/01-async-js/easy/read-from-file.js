const fs=require("fs");
fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
});

for(var i=0;i<10000000000;i++)
{
    
}