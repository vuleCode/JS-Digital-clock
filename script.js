function displayTime(){
    var datum = new Date();
    var hrs   = datum.getHours();
    var mins  = datum.getMinutes();
    var sec   = datum.getSeconds();


    document.getElementById('hours').innerHTML   = hrs;
    document.getElementById('minutes').innerHTML = mins;
    document.getElementById('seconds').innerHTML = sec;


}

setInterval(displayTime, 10);