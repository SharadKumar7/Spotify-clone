let music=Array.from(document.querySelectorAll(".button"));
let masterplay = document.querySelector("#masterplay");
let pre = document.querySelector("#pre");
let next = document.querySelector("#next");
let shuffle = document.querySelector("#shuffle");
let repeat = document.querySelector("#repeat");
let bar = document.querySelector("#bar");
let button =document.querySelector(".select1");
let songindex = 0;
let show=document.querySelector('.playone');
var audio = new Audio('');
const pausebutton='icon/pause.svg';
const playbutton='icon/play.svg';
let songlist=Array.from(document.querySelectorAll('.select'));
let up=document.querySelector('#up');
let down=document.querySelector('#down');
let s2=document.querySelector('.s2');
let h2=document.querySelector('.h2');
let n;
let index = 0;
let sharad=document.querySelector('.recent');
let lastsong =Array.from(sharad.querySelectorAll('.button'));


let songs = [
    {songName: "Akhiyaan",tile:"Mitraz",filepath1: "song/Akhiyaan.m4a" , coverpath:"img/d1.jpeg"},
    {songName: "Apna Bana Le",tile:"Bhediya",filepath: "song/Apna_Bana_Le.m4a" , coverpath:"img/d2.jpeg"},
    {songName: "Bandeya Rey Bandeya",tile:"Simmba",filepath: "song/Bandeya_Rey_Bandeya.m4a" , coverpath:"img/d3.jpeg"},
    {songName: "Besharam Rang",tile:"Pathaan",filepath: "song/Besharam_Rang.m4a" , coverpath:"img/d4.jpeg"},
    {songName: "Jaadugar",tile:"Guru Randhawa",filepath: "song/Jaadugar.m4a" , coverpath:"img/d5.jpeg"},
    {songName: "Kahani Suno",tile:"Kaifi Khalil",filepath: "song/Kahani_Suno_2.0.m4a" , coverpath:"img/d6.jpeg"},
    {songName: "Kesariya",tile:"Arijit singh",filepath: "song/Kesariya.mp3" , coverpath:"img/d7.jpeg"},
    {songName: "Le le Rom Rom",tile:"MC Square",filepath: "song/Le_Le_Rom_Rom.m4a" , coverpath:"img/d8.jpeg"},
    {songName: "Maan Meri Jaan",tile:"King",filepath: "song/Maan_Meri_Jaan.m4a" , coverpath:"img/d9.jpeg"},
    {songName: "Moon Rise",tile:"Guru Randhawa",filepath: "song/Moon_Rise.m4a" , coverpath:"img/d10.jpeg"}
]
let recent1 =[
   {song:""},{song:""},{song:""},{song:""},{song:""},{song:""},{song:""},{song:""},{song:""},{song:""}
]


music.forEach(function(musi){
   musi.addEventListener('click',()=>{
      songs.forEach(function(song){
         n=musi.querySelector('.songname');
         if(song.songName===n.innerText){
            index=songs.indexOf(song);

          audio.src= song.filepath;
          audio.play();
          masterplay.src=pausebutton;
          recent(song.songName);
          update();
         let pic=musi.querySelector('img');
         show.querySelector('img').src=song.coverpath;
         show.querySelector('.n').innerText=song.songName;
         show.querySelector('.d').innerText=song.tile;
         }
    })
   })
})
let sho=(n,c,t)=>{
   show.querySelector('img').src=c;
   show.querySelector('.n').innerText=n;
   show.querySelector('.d').innerText=t;
}
let pref =()=>{
   index--;
   if(index<0){
      index=0;
   }
   audio.src= songs[index].filepath;
   sho(songs[index].songName,songs[index].coverpath,songs[index].tile);
   audio.play();
   recent(songs[index].songName);
   masterplay.src=pausebutton;
  }
  let nextf =()=>{
   index++;
   if(index>9){
      index=9;
   }
   audio.src= songs[index].filepath;
   sho(songs[index].songName,songs[index].coverpath,songs[index].tile);
   audio.play();
   recent(songs[index].songName);
   masterplay.src=pausebutton;
  }
  let shufflef =(i)=>{
   const randomNumber= Math.floor(Math.random()*9);
   index=randomNumber;
   audio.src= songs[index].filepath;
   sho(songs[index].songName,songs[index].coverpath,songs[index].tile);
   audio.play();
   recent(songs[index].songName);
   masterplay.src=pausebutton;
  }
  let repeatf =(i)=>{
   index;
   audio.src= songs[index].filepath;
   sho(songs[index].songName,songs[index].coverpath,songs[index].tile);
   audio.play();
   recent(songs[index].songName);
   masterplay.src=pausebutton;
  }


music.forEach(function(musi){
      songs.forEach(function(song){
         n=musi.querySelector('.songname');
         if(song.songName===n.innerText){
         let pic=musi.querySelector('img');
         pic.src=song.coverpath;
         }
    })
   })
let recent=(name)=>{
   for(let i=6;i>0;--i){
      recent1[i].song=recent1[i-1].song;
   }
   recent1[0].song=name;
   for(let i=0;i<6;i++){
      songs.forEach(function(song){
         if(song.songName===recent1[i].song){
         lastsong[i].querySelector('img').src=song.coverpath;
         lastsong[i].querySelector('.songname').innerText=recent1[i].song;
         }
      })
   }
   }
const update=()=>{
   audio.addEventListener("timeupdate",() =>{
      por=parseFloat((audio.currentTime/audio.duration)*100);
      bar.value=por;
      up.textContent=(parseInt(audio.currentTime/60)+":"+parseInt(audio.currentTime%60));
      down.textContent=(parseInt(audio.duration/60)+":"+parseInt(audio.duration%60));
      bar.addEventListener('change',()=>{
         audio.currentTime=bar.value*audio.duration/100;
      });
   })
}
update();

songlist.forEach(function(song,i){
   song.getElementsByTagName('img')[0]=songs[i].coverpath;
});
masterplay.addEventListener("click", ()=>{
    if(audio.paused || audio.currentTime<=0){
       audio.play();
       masterplay.src=pausebutton;
    }
    else if(audio.played ){
      audio.pause();
      masterplay.src=playbutton;
    }
})


 
 button.addEventListener("hover",() =>{
    console.log("play");
    button.classList.backgroundColor=black;
 })
pre.addEventListener('click',pref);
next.addEventListener('click',nextf);
shuffle.addEventListener('click',shufflef);
repeat.addEventListener('click',repeatf);