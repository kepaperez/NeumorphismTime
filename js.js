///Europa , US,UK,TOKYO

setInterval(function () {
    const ueDate = changeTimeZone(new Date(), 'Europe/Madrid')
    const usDate = changeTimeZone(new Date(), 'America/Los_Angeles')
    const ukDate = changeTimeZone(new Date(),  'Europe/London');
    const asDate = changeTimeZone(new Date(),  'Asia/Tokyo');

    showTime(ueDate,"EUtime");
    showTime(usDate,"UStime");
    showTime(ukDate,"UKtime");
    showTime(asDate,"AStime");
  

}, 1000);



function showTime(date ,classID){

    let horas = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();


    horas = (horas < 10) ? "0" + horas : horas;
    minutos = (minutos < 10) ? "0" + minutos : minutos;
    segundos = (segundos < 10) ? "0" + segundos : segundos;

    const htmlContainer = document.querySelector("#"+classID+"");
    htmlContainer.innerHTML = horas + " : " + minutos + " : " + segundos
    htmlContainer.textContent = horas + ":" + minutos + ":" + segundos;
}

function changeTimeZone(date, timeZone) {
    if (typeof date === 'string') {
        return new Date(
            new Date(date).toLocaleString('en-US', {
                timeZone,
            }),
        );
    }

    return new Date(
        date.toLocaleString('en-US', {
            timeZone,
        }),
    );
}


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('tema', 'dark');
    }
    else {  
        document.documentElement.setAttribute('tema', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);