import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form";
import Pomodoro from "./Pomodoro";
import { useEffect, useState } from "react";
import SlidingText from "./Components/SlidingText";
import "./scanlines.scss";
import Scanlines from "./Components/Scanlines";
import Typewriter from 'typewriter-effect';
import Rain from "./Components/Rain"
import Vids from "./Components/Vids";
import Card from "./Components/Card";
import ChatBox from "./Components/ChatBox";
            function App() {
  const [show,toggleShow] = useState(true);
  const [showRain, toggleShowRain] = useState(true)
  const[showVideos,toggleShowVideos] = useState(true);
 
  





  
  return ( <div className="App crt  " >
       <header className="App-header"></header>
      <div class="window">
        <div class="title-bar">
          <div class="title-bar-text">maybe this can be a portal to the past super old forms of media that sounds so cool :]</div>
        </div>
        <div class="window-body">
          <form>
            <div class="field-row">
              <label for="text17">Username</label>
              <input id="text17" type="text" />
            </div>

            <div class="field-row">
              <label for="text17">Password</label>
              <input id="text17" type="text" />
            </div>
          </form>
          <div className="log">
            {" "}
            <Form />
          </div>
        </div>
        <div class="status-bar ">
          <p class="status-bar-field">Press F1 for help</p>
          <p class="status-bar-field">Slide 1</p>
          <p class="status-bar-field">CPU Usage: 14%</p>
        </div>
      </div>
     

      <div class="window" id="taskbar">
        <div class="window-body" id="taskbar-window-body">
          <button class="win-button">
            <img class="win-button-img" src="startmenu(1).png"></img>
          </button>
        </div>
      </div>
      <div class="ico-div"  onClick={() => toggleShowVideos (!showVideos)}>
        <img class="ico" src="doom-ico1.gif"></img>
        <p class="ico-text">DOOM</p>
      </div>
      <div class="ico-div" onClick = {() => toggleShowRain (!showRain)}>
        <img class="ico" src="https://media.tenor.com/z4Q0LwGOU30AAAAi/azeroy-yabujin.gif"  ></img>
        <p class="ico-text">Calming Rain</p>
      </div>
      <div id="dragthething" class="ico-div"  onClick={() => toggleShow (!show)}>
        
        <img  class="ico" src="doom-ico1.gif"></img>
        <p class="ico-text">Pomodoro Timer</p>
      </div>
      <div class="ico-div">
        <img class="ico" src="doom-ico1.gif"></img>
        <p class="ico-text">About Me</p>
      </div>

  

      {!show && <Pomodoro showProp={show} toggleShowProp={toggleShow} />}
      {/* <ChatBox/> */}
      {/* {<Card/>} */}

      <div id="show" class="randomtext" ></div>

      <SlidingText/>
      <Scanlines/>
      <div>

      {!showVideos && 
      <Vids showProp={showVideos} toggleShowProp={toggleShowVideos}/>

      }

{showRain &&
  <Rain showProp={showRain} toggleShowProp={toggleShowRain}/>}



</div>

<div class="window clearfix" >
  <div class="title-bar">
    <div class="title-bar-text">SWAG</div>
  </div>
  <div class="window-body">
 
<div className = "dialog-box-thang"> 

<div className = "pfp"></div>

<img   className = "po"src='/sadboi.gif'></img> 






<Typewriter 
  onInit={(typewriter) => {
    
  /*typewriter.typeString('SWAG ') */
    
     /* .callFunction(() => {
        console.log('String typed out!');
      }) */
      typewriter.typeString('')
      
      .changeDeleteSpeed(-90000)
    
    .changeDelay(0.1)
      .pauseFor(1)
      
      
      
      typewriter.typeString('sup... my name is swag')
      .pauseFor(400)
      .changeDeleteSpeed(1)
     .deleteAll(0.1)
     
     
      typewriter.typeString('sorry that was cringe')
      .changeDeleteSpeed(-90000)      
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
    
      
      
  }}
  
/>

</div>


  

  </div>
  
  <div class="status-bar">
    {/* <button class = "status-bar-field">
      thing
    </button> */}
    <p class="status-bar-field">Press F1 for help</p> 
     <p class="status-bar-field">Slide 1</p>
    <p class="status-bar-field">CPU Usage: 14%</p>
  </div>
</div>


<button>FIGHT</button>
<button>TALK</button>
<button>RUN</button>

      </div>
    
   
    
  );
}

export default App;
