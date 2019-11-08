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

}