function realtimeClock(){
    var rtclock = new Date();

    var hours = rtclock.getHours();
    var minutes = rtclock.getMinutes();
    var seconds = rtclock.getSeconds();

    var amPm = (hours <12 ) ? "AM" : "PM";

    hours = (hours > 12) ? hours -12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);
    time = hours + " : " + minutes + " : " + seconds + " " + amPm
    document.getElementById('clock').innerHTML= time;
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    date = rtclock.toLocaleDateString(undefined, options);
    document.getElementById('content').innerHTML= date;
    var t = setTimeout(realtimeClock,500)    

}