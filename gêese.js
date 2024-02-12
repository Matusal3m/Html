function buttonClicked(id_audio, id_video) {

    let audio = document.getElementById(id_audio);
    let video = document.getElementById(id_video);
    
    audio.play();
    video.style.display = 'block';
    video.play();
    video.addEventListener('ended', function() {
        video.style.display = 'none';
    });
}

function buttonMundial(id_audio, id_video) {
    let audio = document.getElementById(id_audio);
    audio.play();
    let img = document.getElementById(id_video);
    img.style.display = 'block';
    audio.addEventListener('ended', function(){
        img.style.display = 'none';
    })

}
