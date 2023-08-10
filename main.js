function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").value = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

function getRandomColour() {
    var letter = "123456789ABCDEBANKKK";
    var colour = "#";

    for (let i = 0; i < 6; i++) {
        colour += letter[Math.floor(Math.random()*16)]
    }
    return colour;
};

setInterval(function(){
    document.body.style.background = getRandomColour();
}, 5000);

getRandomColour();
