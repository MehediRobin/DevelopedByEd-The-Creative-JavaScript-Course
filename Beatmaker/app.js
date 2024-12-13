class Drumkit {
    constructor(parameters) {
        this.pads = document.querySelectorAll('.pad')
        this.kickAudio = document.querySelector('.kick-sound')
        this.snareAudio = document.querySelector('.kick-sound')
        this.hihatAudio = document.querySelector('.kick-sound')
        this.index = 0;
    }
    repeat(){
        let step = this.index % 8;
        this.index++;
        const activeBars = document.querySelectorAll(`.b${step}`)
        console.log(activeBars);
    }
    start(){
        setInterval(() => {
           this.repeat();
        }, 1000);
    }
}

const drumKit = new Drumkit();
drumKit.start();
