const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    let hour = document.querySelector("#hour");
    let minutes = document.querySelector("#minutes");
    let seconds = document.querySelector("#seconds");
    let ampm = document.querySelector("#ampm");
    let Day = document.querySelector("#day");
    let Month = document.querySelector("#month");
    let Year = document.querySelector("#year");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let d = new Date().getDay();
    let mon = new Date().getMonth();
    let y = new Date().getFullYear();
    let am = "AM";

    if (h > 12) {
        h = h - 12;
        am = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    d = (d < 10) ? "0" + d : d;
    mon = (mon < 10) ? "0" + mon : mon;


    hour.innerHTML = h + ":";
    minutes.innerHTML = m + ":";
    seconds.innerHTML = s + "&nbsp";
    ampm.innerHTML = am;
    Day.innerHTML = d + "/";
    Month.innerHTML = mon + "/";
    Year.innerHTML = y;
})