class Drumkit {
    constructor(parameters) {
        this.pads = document.querySelectorAll('.pad')
        this.kickAudio = document.querySelector('.kick-sound')
        this.snareAudio = document.querySelector('.snare-sound')
        this.hihatAudio = document.querySelector('.hihat-sound')
        this.playBtn = document.querySelector('.play');
        this.index = 0;
        this.bpmRate = 150
        this.isPlaying = null;
    }

    activePad(){
        this.classList.toggle('active')
    }
    repeat(){
        let step = this.index % 8;

        const activeBars = document.querySelectorAll(`.b${step}`)
        activeBars.forEach(bar=> {
            bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
            if(bar.classList.contains("active")){
                if(bar.classList.contains("kick-pad")){
                    this.kickAudio.currentTime = 0;
                    this.kickAudio.play();
                }
                if(bar.classList.contains("snare-pad")){
                    this.snareAudio.currentTime = 0;
                    this.snareAudio.play();
                }
                if(bar.classList.contains("hihat-pad")){
                    this.hihatAudio.currentTime = 0;
                    this.hihatAudio.play();
                }
            }
        })
        this.index++;
    }
    start(){
        let interVal = ((60/this.bpmRate)*1000)
            if(!this.isPlaying){
                this.playBtn.innerText = "Stop"
            this.isPlaying = setInterval(() => {
            this.repeat();
            }, interVal);
        } else {
            clearInterval(this.isPlaying);
            this.isPlaying = null
            this.playBtn.innerText = "Play"
        }
    }
}

const drumKit = new Drumkit();

drumKit.pads.forEach(pad => {
    pad.addEventListener('click', drumKit.activePad);
pad.addEventListener("animationend", function() {
    this.style.animation = ""
})})
drumKit.playBtn.addEventListener('click', ()=>
    {drumKit.start()})
