const birthYear = 1984;
const alreadyBirthday = false;
let futureYear = 2067;

let ageAfterBirthday = futureYear - birthYear;
let ageBeforeBirthday = ageAfterBirthday-1;

if (alreadyBirthday == true){
    document.write('I will be ' + ageAfterBirthday);
}else {
    document.write('I will be ' + ageBeforeBirthday);
}