function updateClock(){
    const currDate= new Date();
    let hours=currDate.getHours();
    const ampm=hours>=12?'PM':'AM';
    const minutes=currDate.getMinutes().toString().padStart(2,'0');
    hours=hours%12||12;
    const seconds=currDate.getSeconds().toString().padStart(2,'0');
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
    const timeStr=`${formattedHours}:${minutes}:${seconds} ${ampm}`;
    const dateStr=`${days[currDate.getDay()]}, ${months[currDate.getMonth()]} ${currDate.getDate()}`;
    document.getElementById('time').textContent=timeStr;
    document.getElementById('date').textContent=dateStr;    
}
function changeColor(event){
    const selectedColor=event.target.value;
    document.getElementById('time').style.color=selectedColor;
}
document.getElementById('color').addEventListener('input',changeColor);
updateClock();
setInterval(updateClock,1000);

const tickSound = document.getElementById('clock-sound');
tickSound.loop = true; 

let soundEnabled = false; 

function updateToggleState() {
    const toggleButton = document.getElementById('sound-toggle');
    if (soundEnabled) {
        tickSound.play().catch(err => {
            console.error('Error playing sound:', err);
            toggleButton.textContent = 'Sound: Off'; 
            soundEnabled = false;
        });
        toggleButton.textContent = 'Sound: On'; 
        toggleButton.title = 'Turn sound off'; 
        toggleButton.classList.add('active');
    } else {
        tickSound.pause();
        toggleButton.textContent = 'Sound: Off'; 
        toggleButton.title = 'Turn sound on'; 
        toggleButton.classList.remove('active');
    }
}
document.getElementById('sound-toggle').addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    updateToggleState();
});
updateToggleState();