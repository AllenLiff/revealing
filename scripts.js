
 var answer = prompt('What is your name?');
document.write(answer.toUpperCase() + " hates waste!");
 console.log(answer);  // [displays in console the variable. we can see if string is lower or uppercase ]


 function myFunction() {
    var str = document.getElementById("demo").innerHTML;
    var res = str.replace("WASTE", "reduce");
    document.getElementById("demo").innerHTML = res;
}

