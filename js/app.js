const ipodDisplayOff = document.querySelector('.ipod-display-off');
const ipodLoadScreen = document.querySelector('.ipod-load-screen');
const ipodDisplayOn = document.querySelector('.ipod-display-on');

let screenOn = false;

const ipodCenterBtn = document.querySelector('.ipod-center-btn');


ipodCenterBtn.addEventListener('click', () => {
    ipodCenterBtn.style.background = 'linear-gradient(rgb(236, 235, 235) 20%, rgb(209, 209, 209)';
})

ipodCenterBtn.addEventListener('mouseout', () => {
    ipodCenterBtn.style.background = 'linear-gradient(rgb(209, 209, 209) 60%, rgb(236, 235, 235))';
})

function turnLoadScreenOn(){
    if(!screenOn){
        ipodDisplayOff.style.display = 'none';
        ipodLoadScreen.style.display = 'flex';
        
        setTimeout(() => {
            callDisplayOn();
        }, 5000);
    }

    screenOn = true;
}

function callDisplayOn(){
    ipodDisplayOff.style.display = 'none';
    ipodLoadScreen.style.display = 'none';
    ipodDisplayOn.style.display = 'flex';
}

