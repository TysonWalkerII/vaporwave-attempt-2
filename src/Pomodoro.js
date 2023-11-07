//import { Howl } from "howler";
import React, {useEffect, useState } from "react";



// const AudioPlayer = ({ file }) => {
//   const { togglePlayPause, ready, loading, playing } = 
// //   useAudioPlayer
//   ({
//       src: file,
//       format: "mp3",
//       autoplay: false,
//       onend: () => console.log("sound has ended!")
//   })

//   if (!ready && !loading) return <div>No audio to play</div>
//   if (loading) return <div>Loading audio</div>

//   return (
//       <div>
//           <button onClick={togglePlayPause}>{playing ? "Pause" : "Play"}</button>
//       </div>
//   )
// }



// let song = new Audio('./sound/tackleHit.wav');

// function sound(){
//   console.log("sound???")
//   //audio.timeUp.play()
  
//   song.play();
//   //song.pause();
// }


export default function Pomodoro(prop) {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);
  const [displayMessage, setDisplayMessage] = useState(false);

  function playSound() {
    var mp3 = '<source src="https://actions.google.com/sounds/v1/alarms/beep_short.ogg" type="audio/mpeg">';
    document.getElementById("sound").innerHTML =
    '<audio autoplay="autoplay">' + mp3 + "</audio>";
    }

  useEffect(()=>{
    let interval = setInterval(() => {
      clearInterval(interval);
      if(seconds === 0){
        //no more seconds?
        if( minutes !== 0){
          //decriment minute and reset seconds if the seconds run out and the minutes arent empty
          setSeconds(59);
           setMinutes(minutes - 1)
          //  setMinutes(10)
        }else{
             let message = displayMessage ? 30: 15;
          let seconds = 2;
          setSeconds(seconds)
          //  setMinutes(1)
          //let minutes = 0;
           setMinutes(message)
          setDisplayMessage(!displayMessage);
          playSound();
        }
      }else{
        //count down
        setSeconds(seconds - 1);
      }
    }, 1000)
  }, [seconds])
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return <div className="pomodoro">
      
        <div className="message">
            {displayMessage && <div>Take a break </div>}
        {/* <AudioPlayerProvider>
<AudioPlayer file="/tackleHit.wav" />
</AudioPlayerProvider> */}
            
            
        </div>
        <div className="window" >
  <div className="title-bar">
    <div className="title-bar-text">Pomodoro timer</div>
    <div className="title-bar-controls">  
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close" onClick={() => prop.toggleShowProp (!prop.showProp)}></button>
    </div>
  </div>
  <div className="window-body">
  <div className = "timer">{timerMinutes}:{timerSeconds}</div>
  </div>
</div>
        
    </div>

//  features that I want to add later
// rain sounds 
// random videos that will play in the background 
//still not sure if they will be vids from the past of just my vids
// maybe a collection of cards
//quests that can be completed to collect cards
// gif of the card probably
//maybe adding taskbars to the thing
//shuffling videos
//making the icon bring the videos up when you press it 
//having a collection of videos to scroll through instead of them playing randomly
//Have the word dreaming pop up ever once in a while
//title at the tab thing chanes ever second
// maybe a section that I can update with my morals and value lol
//my hobbies and stuff
//my tellonym questions and answers
//giving others the chance to answer those questions
}