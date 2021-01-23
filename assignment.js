//1. Kilometer to Meter Convert

function kilometerToMeter(kilo) {
    var met = kilo * 1000;
    return met;
}
var firstKilo = kilometerToMeter(2);
console.log(firstKilo);


// 2.Budget Calculator Program

function budgetCalculator(watch, phone, laptop) {
    const watchPrice = 50;
    const phonePrice = 100;
    const laptopPrice = 500;

    var totalWatchPrice = watch * watchPrice;
    var totalPhonePrice = phone * phonePrice;
    var totalLaptopPrice = laptop * laptopPrice;

    var totalCost = totalWatchPrice + totalPhonePrice + totalLaptopPrice;

    return totalCost;
}
var totalBudget = budgetCalculator(2, 2, 2);
console.log(totalBudget);



// 3.Hotel Cost Program

function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;
    }
    else if (day <= 20) {
        cost = day * 80;
        var first10days = 10 * 100;
        var remaining = day - 10;
        var second10days = remaining * 80;
        cost = first10days + second10days;
    }
    else {
        var first10days = 10 * 100;
        var second10days = 10 * 80;
        var remaining = day - 20;
        var third10days = remaining * 50;
        cost = first10days + second10days + third10days;

    }
    return cost;
}
var totalCost = hotelCost(23);
console.log(totalCost);



// 4.Mega Friend program

var friends = ["Akash", "Bikash", "Arman", "Sujon", "Proshanto", "Jony"];
var maxName = friends[0];

function megaFriend(friends){
    for(var i=0; i<friends.length; i++){
        var element = friends[i];
        if(element.length>maxName.length){
            maxName=element;
        }
    } return maxName;
    
    
}
var result = megaFriend(friends);
console.log(result);

