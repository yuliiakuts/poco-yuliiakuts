// Translate days of the week
// For each single day of the week log the translated output
// e.g. if it is Monday, log "Montag" and so on
// Choose any language you like
// Try different ways: is it possible with if or switch?

function convertDayOfTheWeek(){
var dayOfTheWeek = document.getElementById("dayNumber").value;
var day;
switch (dayOfTheWeek) {
    case "1" : 
        day = "Monday";
        break;
    case "2" : 
        day = "Tuesday";
        break;
    case "3" : 
        day = "Wednesday";
        break;
    case "4" : 
        day = "Thursday";
        break;
    case "5" : 
        day = "Friday";
        break;
    case "6" : 
        day = "Saturday";
        break;
    case "7" : 
        day = "Sunday";
        break;
    default : 
        day = "The day undefined";
}
    document.getElementById("dayOfTheWeek").innerHTML = day;
}

function tranlateDayOfTheWeek(lang){
    var dayOfTheWeek = document.getElementById("dayEn").value;
    var day;
    var lang = lang;
    console.log(lang);
    switch (dayOfTheWeek) {
        case "Monday" : 
            if (lang == "fr"){
                day = "Lundy";
            }else if (lang == "de") {
                day = "Montag";
            }
            break;
        case "Tuesday" : 
        if (lang == "fr"){
            day = "Mardi";
        }else if (lang == "de") {
            day = "Dienstag";
        }
            break;
        case "Wednesday" : 
        if (lang == "fr"){
            day = "Mercredi";
        }else if (lang == "de") {
            day = "Mittwoch";
        }
            break;
        case "Thursday" : 
        if (lang == "fr"){
            day = "Jeudi";
        }else if (lang == "de") {
            day = "Donnerstag";
        }
            break;
        case "Friday" : 
        if (lang == "fr"){
            day = "Vendredi";
        }else if (lang == "de") {
            day = "Freitag";
        }
            break;
        case "Saturday" : 
        if (lang == "fr"){
            day = "Samedi";
        }else if (lang == "de") {
            day = "Samstag";
        }
            break;
        case "Sunday" : 
        if (lang == "fr"){
            day = "Dimanche";
        }else if (lang == "de") {
            day = "Sonntag";
        }
            break;
        default : 
            day = "The day undefined";
    }
        document.getElementById("dayOfTheWeekFr").innerHTML = day;
        document.getElementById("lang").innerHTML = lang;
    }