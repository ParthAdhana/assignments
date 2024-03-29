/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.replace(/[^a-zA-Z ]/g, "")
  str=str.split(" ").join("");

  var len=str.length;
  //console.log(len);
  str=str.toLowerCase();
  //console.log(str);
  for(var i=0;i<len;i++)
  {
    //console.log(str[i]+' '+str[len-i-1]);
    if(str[i]==str[len-i-1]){
      continue;
    }
    else{
      
      return false;
    }
    
  }
  return true;
}
//isPalindrome('hello');

module.exports = isPalindrome;
