// https://github.com/shakil2chowdhury/javascript-solve-1

//Kilometer to meter conversion
function kilometerToMeter(kilo) {
    let meter = 0;
    if(kilo>=0){
        meter = kilo*1000; // 1 kilometer = 1000 meter
        return meter;
    }
    else {
        return "Please insert valid positive number";
    }
}


//Budget calculator
function budgetCalculator(clockUnit,mobileUnit,laptopUnit){
    if (clockUnit >= 0 && mobileUnit >= 0 && laptopUnit >= 0){
        var clockPrice = 50*clockUnit;        //total price of clock
        var mobilePrice = 100*mobileUnit;     //total price of mobile
        var laptopPrice = 500*laptopUnit;     //total price of laptop
        var budget = clockPrice+mobilePrice+laptopPrice; // calculates total budget
        return budget;
    } else {
        return "Products unit cannot be a negative number";
    }
}



//Hotel cost
function hotelCost(days){
    let cost = 0;
    let firstPhase = 0;
    let secondPhase = 0;
    let finalPhase = 0;
    if(days >= 0){                              //check valid input
        if(days <= 10){                         //check first phase costs
            cost = days*100;
            return cost;
        }
        else if (days > 10 && days <= 20){      //check second phase costs
            firstPhase = 10*100;
            secondPhase = (days - 10)*80;
            cost = secondPhase+firstPhase;
            return cost;
        }
        else {                                  //check final phase costs
            finalPhase = (days - 20)*50;
            secondPhase = (10*100)+(10*80);
            cost = finalPhase+secondPhase;
            return cost;
        }
    } else {
        return "Please insert a valid positive number";
    }
}




//Mega Friend

function megaFriend(arr){
    if(arr.length > 1){                             //check valid array input
        var mega = arr[0];
        for (var i = 0; i < arr.length; i++){
            var element = arr[i];
            if(element.length > mega.length){       //compare length between items of the array
            mega = element;                         //store element consist of highest number of characters
            }
        }
        return mega;
    }
    else {
        return "Please Insert Valid Multiple items in array"
    }
}