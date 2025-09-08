function setBodyHeight() {
  document.body.style.height = `${window.innerHeight}px`;
}

setBodyHeight();

window.addEventListener('resize', setBodyHeight);


const ipodDisplayOff = document.querySelector('.ipod-display-off');
const ipodLoadScreen = document.querySelector('.ipod-load-screen');
const ipodDisplayOn = document.querySelector('.ipod-display-on');
const ipodCenterBtn = document.querySelector('.ipod-center-btn');
const albumsList = document.getElementById('albums-list');

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

let screenOn = false;
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

    initAlbumsScroll(); 
}


let scrollDirection = 0;

function initAlbumsScroll() {
    function scrollStep() {
        if (scrollDirection !== 0) {
            albumsList.scrollLeft += scrollDirection * 5;
            requestAnimationFrame(scrollStep);
        }
    }

    albumsList.addEventListener('mousemove', (event) => {
        const rect = albumsList.getBoundingClientRect();
        const positionX = event.clientX - rect.left;
        const edgeThreshold = 50;

        if (positionX <= edgeThreshold) {
            scrollDirection = -1;
            requestAnimationFrame(scrollStep);
        } else if (positionX >= rect.width - edgeThreshold) {
            scrollDirection = 1;
            requestAnimationFrame(scrollStep);
        } else {
            scrollDirection = 0;
        }
    });

    albumsList.addEventListener('mouseleave', () => scrollDirection = 0);
}
