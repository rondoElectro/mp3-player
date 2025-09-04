const ipodDisplayOff = document.querySelector('.ipod-display-off');
const ipodDisplayOn = document.querySelector('.ipod-display-on');

const ipodCenterBtn = document.querySelector('.ipod-center-btn');

function turnDisplayOn(){
    ipodDisplayOff.style.display = 'none';
    ipodDisplayOn.style.display = 'flex';
}

ipodCenterBtn.addEventListener('click', () => {
    ipodCenterBtn.style.background = 'linear-gradient(rgb(236, 235, 235) 20%, rgb(209, 209, 209)';
})

ipodCenterBtn.addEventListener('mouseout', () => {
    ipodCenterBtn.style.background = 'linear-gradient(rgb(209, 209, 209) 60%, rgb(236, 235, 235))';
})
