function counter(){
    console.log(time++);
    setTimeout(counter,1000);
}
var time=0;
counter();