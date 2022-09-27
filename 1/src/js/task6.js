function printNumbers(){
for (i=1; i<=100; i++){
    if (i%5==0 && i%7==0){
        document.write("PowerCoders<br />");
    }else if (i%5==0){
        document.write("Power<br />");
    }else if (i%7==0){
        document.write("Coders<br />");
    }else {
        document.write(i+"<br />");
        
    }
}
}