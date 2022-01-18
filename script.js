const container = document.getElementById('cont');
const time = document.createElement('p');
const date = document.createElement('p');

container.appendChild(time);

setInterval(() => {
    let a = new Date();
    let h = a.getHours(); 
    var m = a.getMinutes(); 
    var s = a.getSeconds();
    var session = "AM";

    if(h==0){
        h = 12;
    }

    if(h>12){
        h = h - 12;
        session = "PM";
    }

    h = (h<10)?"0"+h:h;
    m = (m<10)?"0"+m:m;
    s = (s<10)?"0"+s:s;
    let t = h + ":" + m + ":" + s + " " + session;
    time.innerHTML = t;
}, 1000);
