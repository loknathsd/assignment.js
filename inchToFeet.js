/*var inch = 288;
var feet = inch/12;
console.log(feet);*/

//using function

/*function inchToFeet (inch){
    var feet = inch/12;
    return feet;
}
 var pen=inchToFeet(156);
console.log(pen);
var leptop = inchToFeet(288);
console.log(leptop);*/

//using loop

var inchs=[156,288,300,60,120];

for(var i=0; i<=inchs.length; i++){
    var inch = inchs[i];
    var feet = inch/12;
    console.log(feet);
}

