let aud = document.querySelector('audio');
let time = document.querySelector('#time');
let vol = document.querySelector("#vol");
let play_au = document.querySelector("#play")
let puse_au = document.querySelector('#puse');
let stop_au = document.querySelector('#stop');

/*-------------change vol and time-------------------*/
vol.addEventListener('input',()=>{
    aud.volume = vol.value;

});

addEventListener('load',()=>{
    time.max = aud.duration;
});

time.addEventListener('input',()=>{
    aud.currentTime = time.value;

});
/*---------------------control the song-------------*/
play_au.addEventListener('click',()=>{
    aud.play();
    
});

puse_au.addEventListener('click',()=>{
    aud.pause();
    clearInterval(id);
});

stop_au.addEventListener('click',()=>{
    aud.load();
    aud.pause();
    time.value = 0;
    
});
/*---------------------change song------------------*/
let ch_song = document.querySelectorAll('.x');
let ch_img = document.querySelector('img');
let array_of_songs = ["./02.Bait Kebeer.mp3&./sad.jpg", "./05 - Kelmet Aheb.mp3&./conan.jpg", "06.Mabthazesh.mp3&./images.jpeg", "./07.Mafehosh Ghalta.mp3&./mohammed.jpeg"];

for(let i = 0; i < ch_song.length; i++){
    ch_song[i].addEventListener('click',()=>{
        aud.src = array_of_songs[i].split('&')[0];
        ch_img.src = array_of_songs[i].split('&')[1];
        time.value = 0;
        aud.play();
        
        
    });

}
/*-----------------------move the time-----------*/
function change_time(){
    let id = setInterval(()=>{
        time.value++
        if(time.value == aud.duration){
            clearInterval(id);
        }
    },1000);
    return id;
}

