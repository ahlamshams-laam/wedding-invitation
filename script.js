const weddingDate = new Date("August 09, 2026 11:30:00").getTime();

setInterval(() => {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((distance % (1000*60)) / 1000);

    document.getElementById("days").innerHTML = String(days).padStart(2, "0");
    document.getElementById("hours").innerHTML = ": " + String(hours).padStart(2, "0");
    document.getElementById("minutes").innerHTML = ": " + String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerHTML = ": " + String(seconds).padStart(2, "0");

    const sec = document.getElementById('seconds');
    sec.classList.remove('change');
    void sec.offsetWidth;
    sec.classList.add('change');

}, 1000);