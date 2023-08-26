let m = +prompt('type ur age!')
if(m < 16){
  alert('u r too young! study ')
}else if(m < 50){
  alert('u have to go to work!')
} else if(m < 80){
  alert('soon to retire')
} else if(m < 120){
  alert('u r a pensioner')
} else{
  alert('error')
}

var Hour = +prompt("Введите час:");

if (isNaN(Hour) || Hour < 0 || Hour > 23) {
    alert("Некорректное число");
} else {
    let timePeriod;
    let hour
    

    switch (true) {
        case Hour >= 0 && Hour < 6:
            timePeriod = "ночи";
            break;
        case Hour >= 6 && Hour < 12:
            timePeriod = "утра";
            break;
        case Hour >= 12 && Hour < 17:
            timePeriod = "дня";
            break;
        case Hour >= 17 && Hour < 21:
            timePeriod = "вечера";
            break;
        default:
            timePeriod = "ночи";
    } 

    if (Hour === 0) {
      hour = "12";
    } else if (Hour > 12) {
        hour = (Hour - 12);
    } else {
        hour = Hour;
    }


    alert(hour + " часов " + timePeriod);
}
let num1 = +prompt("Введите первое число:");
let num2 = +prompt("Введите второе число:");
let num3 = +prompt("Введите третье число:");

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Некорректный ввод.");
} else {
    let minNumber = Math.min(num1, num2, num3);
    let maxNumber = Math.max(num1, num2, num3);
    let middleNumber = num1 + num2 + num3 - minNumber - maxNumber;

    alert("Число между наибольшим и наименьшим: " + middleNumber);
}
