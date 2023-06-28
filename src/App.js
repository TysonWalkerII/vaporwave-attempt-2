import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form";
import Pomodoro from "./Pomodoro";
import { useState } from "react";
import SlidingText from "./Components/SlidingText";
import "./scanlines.scss";
import Scanlines from "./Components/Scanlines";
function App() {
  const [show,toggleShow] = useState(true);
  const[showRain,toggleShowRain] = useState(true);
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
      <div class="ico-div" onClick={() => toggleShowRain (!showRain)}>
        <img class="ico" src="doom-ico1.gif"  ></img>
        <p class="ico-text">Calming Rain</p>
      </div>
      <div class="ico-div"  onClick={() => toggleShow (!show)}>
        
        <img class="ico" src="doom-ico1.gif"></img>
        <p class="ico-text">Pomodoro Timer</p>
      </div>
      <div class="ico-div">
        <img class="ico" src="doom-ico1.gif"></img>
        <p class="ico-text">About Me</p>
      </div>

  

      {!show && <Pomodoro showProp={show} toggleShowProp={toggleShow} />}

      <div id="show" class="randomtext" ></div>

      <SlidingText/>
      <Scanlines/>
      <div>

      {!showVideos && 
      <div class="window mywidthThingForTheWindows" >
  <div class="title-bar">
    <div class="title-bar-text">Background video</div>
    <div class="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close" onClick={() => toggleShowVideos (!showVideos)}></button>
    </div>
  </div>
  
  <iframe width="560" height="315" src="https://www.youtube.com/embed/iP72ooweKQw?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div class="status-bar ">
          <p class="status-bar-field">Press F1 for help</p>
          <p class="status-bar-field">Slide 1</p>
          <p class="status-bar-field">CPU Usage: 14%</p>
        </div>
</div>

      }
{!showRain && 
  <div class="window mywidthThingForTheWindows2" >
  <div class="title-bar">
    <div class="title-bar-text">Calming Rain</div>
    <div class="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close"  onClick={() => toggleShowRain (!showRain)}></button>
    </div>
  </div>
  
  <iframe width="560" height="315" src="https://www.youtube.com/embed/42M3esYyHdw?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div class="status-bar ">
          <p class="status-bar-field">Press F1 for help</p>
          <p class="status-bar-field">Slide 1</p>
          <p class="status-bar-field">CPU Usage: 14%</p>
        </div>
</div>
}

</div>
      </div>
    
   
    
  );
}

export default App;
