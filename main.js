const tt = [];
const cT = () => Date.now().toFixed();

function getFancyTime(timeSections, parentEl){
    let classTypes = ['hourType', 'minuteType', 'secondType'];
    const elp = () => document.createElement('p');
    for (let i = 0; i < 2; i++){
        let el = elp();
        el.textContent = timeSections[i].toFixed();
        el.className = classTypes[i];
        parentEl.appendChild(el);
    }
}
    
function makeCountdown(timestring){
    let diff = Date.parse(timestring).toFixed() - cT();
    
    let hour = (diff / 60 / 60 / 1000);
    let min = (hour % 1) * 60;
    let sec = ((hour * 60) % 1) * 60;
    
    let countEl = document.getElementById("countdown");

    countEl.textContent = "";

    let hElement = document.createElement("p");
    let mElement = document.createElement("p");
    let sElement = document.createElement("p");
    
    hElement.className = "hourType";
    mElement.className = "minuteType";
    sElement.className = "secondType";
    
    hElement.textContent = `${Math.floor(hour).toFixed()} h`;
    mElement.textContent = `${Math.floor(min).toFixed()} m`;
    sElement.textContent = `${Math.floor(sec).toFixed()} s`;

    countEl.appendChild(hElement);
    countEl.appendChild(mElement);
    countEl.appendChild(sElement);
    
}

function tick(){
    makeCountdown("2023-03-30 13:00:00");
    window.setTimeout(tick, 1000);
}


tick();