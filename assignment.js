

// kilometerToMeter Convert

function kilometerToMeter(km) {

    var result = Math.abs(km * 1000); //Cause 1km = 1000meter And The Math.abs() method is used to return the absolute value of a number.

    return result;
}


//budgetCalculetor

function budgetCalculator(watch, phn, pc) {

    var result = Math.abs((watch * 50) + (phn * 100) + (pc * 500));

    return result;
}


//hotelCost

function hotelCost(days) {

    var result;

    if(days >= 1 && days <= 10){

        result = (days * 100); // First 10days..Per day cost 100$ So, 10*100..
    }

    else if (days >= 11 && days <= 20){

        result = ((10 * 100) + ((days - 10) * 80)); /** First 10days..Per day cost 100$ So, 10*100..11th Days to 20th days cost 80$ So, 10*80..*/ 
        
    }

    else if(days > 20){

        result = ( (10*100) + (10*80) + ( (days - 20) * 50 ) ); /******  First 10days..Per day cost 100$ So, 10*100..11th Days to 20th days cost 80$ So, 10*80..After 20Days Per Days Cost 50$, So ((days - 20) * 50) ******/

    }
    
    else{

        return "Wff..It's Not A Valid Days..";
    }

    return result;
}



//megaFriend

function megaFriend(arr) {
    var length = 0;
    var maxLength;

    for (var i = 0; i < arr.length; i++) {

        if (length < arr[i].length) {

            var length = arr[i].length; // length change to arr[i].length
            maxLength = arr[i];

        }

    }
    return maxLength;
}
