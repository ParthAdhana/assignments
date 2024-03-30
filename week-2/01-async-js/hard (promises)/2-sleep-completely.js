/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    
    return new Promise(function(resolves){
        var startTime=new Date().getTime();
        var endTime
        while(true)
        {
            endTime=new Date().getTime();
            if(endTime-startTime>milliseconds)break;
        }
        resolves();
    });
    
}
//sleep(5000)
module.exports = sleep;
