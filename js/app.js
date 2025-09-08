const ipodDisplayOff = document.querySelector('.ipod-display-off');
const ipodLoadScreen = document.querySelector('.ipod-load-screen');
const ipodDisplayOn = document.querySelector('.ipod-display-on');

let screenOn = false;

const ipodCenterBtn = document.querySelector('.ipod-center-btn');


['click', 'touchstart'].forEach(event => {
    ipodCenterBtn.addEventListener(event, () => {
        ipodCenterBtn.style.background = 'linear-gradient(rgb(236, 235, 235) 20%, rgb(209, 209, 209))';
    });
});

['mouseout', 'touchend'].forEach(event => {
    ipodCenterBtn.addEventListener(event, () => {
        ipodCenterBtn.style.background = 'linear-gradient(rgb(209, 209, 209) 60%, rgb(236, 235, 235))';
    });
});

function turnLoadScreenOn(){
    if(!screenOn){
        ipodDisplayOff.style.display = 'none';
        ipodLoadScreen.style.display = 'flex';
        
        setTimeout(() => {
            turnDisplayOn();
        }, 8000);
    }

    screenOn = true;
}

function turnDisplayOn(){
    ipodDisplayOff.style.display = 'none';
    ipodLoadScreen.style.display = 'none';
    ipodDisplayOn.style.display = 'flex';
}

