const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(drivers){

 return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers){

    return drivers.slice(-2);
}

const selectingDrivers =  [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {

    return function(number) {
        return multiplier * number
    };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, action){

    return action(arrayOfDrivers);
}