function compareAB() {
    let a = document.getElementById("number1").value;
    let b = document.getElementById("number2").value;
    let msg;
    if (a > b){
        msg = "The greater number of " + a + " and " + b + " is " + a + ". The smaller number of " + a + " and " + b + " is " + b + ".";
    }else if (a < b){
        msg = "The greater number of " + a + " and " + b + " is " + b + ". The smaller number of " + a + " and " + b + " is " + a + ".";
    }else {
        msg = a + " equal " + b;
    }
    document.getElementById("msg").innerHTML = msg;
}

function translateHello(lang) {
    let translate = lang;
    console.log(translate);
var msg;
switch (translate) {
    case "Deutsch" : 
        msg = "Hallo Welt!";
        break;
    case "French" : 
        msg = "Salut le monde!";
        break;
    case "Spanish" : 
        msg = "Hola, mundo!";
        break;
    case "Ukraine" : 
        msg = "Привіт, світ!";
        break;
    default :
        msg = "Hello, World";
        break;
}

document.getElementById("translation").innerHTML = msg;
}


function calculateRetire(){
    let now = new Date();
    let nowY = now.getFullYear(); 
    //let nowM = now.getMonth();
    //let nowD = now.getDate();
    let retireYears;
    let dateOfBirth = document.getElementById("dateOfBirth").value;
    let birth = dateOfBirth.split("-");
    console.log(birth);
    let yearOfBirth = parseInt(birth[0]);
    //let monthOfBirth = parseInt(parseInt(birth[1]));
    //let dayOfBirth = parseInt(parseInt(birth[2]));
    let retireAge = parseInt(document.getElementById("retireAge").value);
        retireYears = retireAge - (nowY-yearOfBirth);
    let retireYear = yearOfBirth + retireAge;
    document.getElementById("nowY").innerHTML = nowY;
    document.getElementById("retireYear").innerHTML = retireYear;
    document.getElementById("retireYears").innerHTML = retireYears;

}

