window.onload = () => {

    const play = (e) => {
        let audio = e.target.childNodes[1];
        if (audio.paused) {
            audio.play();
        } else {
            audio.currentTime = 0
        }
    }

    let notes = document.querySelectorAll('.note');
    for (let i=0; i<notes.length; i++){
        notes[i].addEventListener('click', play);
    }

    document.addEventListener('keydown', e => {
        let audio;
        switch (e.keyCode) {
            case 65:
                audio = document.getElementById('a').childNodes[1];
                if (audio.paused) {
                    audio.play();
                } else {
                    audio.currentTime = 0
                }
                break;
            case 66:
                audio = document.getElementById('b').childNodes[1];
                if (audio.paused) {
                    audio.play();
                } else {
                    audio.currentTime = 0
                }
                break;
            case 67:
                audio = document.getElementById('c').childNodes[1];
                if (audio.paused) {
                    audio.play();
                } else {
                    audio.currentTime = 0
                }
                break;
            case 68:
                audio = document.getElementById('d').childNodes[1];
                if (audio.paused) {
                    audio.play();
                } else {
                    audio.currentTime = 0
                }
                break;
            case 69:
                audio = document.getElementById('e').childNodes[1];
                if (audio.paused) {
                    audio.play();
                } else {
                    audio.currentTime = 0
                }
                break;
            case 70:
                audio = document.getElementById('f').childNodes[1];
                if (audio.paused) {
                    audio.play();
                } else {
                    audio.currentTime = 0
                }
                break;
            case 71:
                audio = document.getElementById('g').childNodes[1];
                if (audio.paused) {
                    audio.play();
                } else {
                    audio.currentTime = 0
                }
                break;
        }
    } );

}