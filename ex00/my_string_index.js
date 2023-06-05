
function my_string_index(haystack, needle){
    let str = haystack
    var i = 0
    //console.log(haystack[i])
    //console.log(str)

    for (let i = 0; i < haystack.length; i++) {
        //console.log(haystack[i]);
        if (haystack[i] == needle) {
            return i;
        }
            
      }
      return -1;
}
//console.log(my_string_index("hello", 'l'))

    /*let result = 'l';
    str.split('hello').forEach(letter)
    for (let hello in str) {
        console.log(str[hello])
    }
   
   for (var needle = 0; needle < str.length; needle++) {
    }
   console.log(my_string_index) */
   
   
    /*let str = "haystack"
    param_1 = "helLo"
    param_2 = "L" 

    let result = 'l';
str.split('hello').forEach(letter); {
  result += letter;

    for (var needle = 0; needle < str.length; needle++) {
        console.log(str[needle]);
      }
}*/

