 //prints current date
 function printDate(){
  console.log(Date().toLocaleTimeString());
}
     
setInterval(printDate, 1000);