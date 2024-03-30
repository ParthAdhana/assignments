const fs=require("fs");


fs.readFile("a.txt","utf-8",function(err,data){
    fs.writeFile("a.txt",data.split(" ").filter((item)=>{return item!=''}).join(' '),function(err)
    {
        console.log("Done");
    })
})



