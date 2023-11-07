import logo from "./logo.svg";
  import Webamp from "webamp";
import "./App.css";
import Form from "./Components/Form";
import Pomodoro from "./Pomodoro";
import React from "react";
import SlidingText from "./Components/SlidingText";
import "./scanlines.scss";
import Scanlines from "./Components/Scanlines";
import Typewriter from 'typewriter-effect';
import Rain from "./Components/Rain"
import Vids from "./Components/Vids";
import Card from "./Components/Card";
import ChatBox from "./Components/ChatBox";
import { Link, Router, Routes, Route } from "react-router-dom";
// const { useState, useEffect } = React;

const { useState, useEffect } = React;


const config = {
  // Optional.
  initialTracks: [
    {
      metaData: {
        artist: "lunachrist",
        title: "(ALL PLATS) [♠] broad day __ knox __.mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/BuZXdMPQetMn9sCIlCJEnKwxkNbPwES6",
    },
    {
      metaData: {
        artist: "lunachrist",
        title: "(ALL PLATS) [♠] glewmy __ ace __.mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/Q11P9MXFfxBVCTJPF5dsWuAeQaMvv0er",
    },
    {
      metaData: {
        artist: "(ALL PLATS) [♣] lunachrist ★ kumosai - ",
        title: "TITANS __ ace __ #rK.mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/W7DWKK5YUf85eom9Ami54CRfFNzVYr9A",
    },
    {
      metaData: {
        artist: "(ALL PLATS) [♣] lunachrist ★ len333 - ",
        title: "drone __ lunachrist __ #rK.mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/jhr2VXzhB0asKXHFBvBADLA3WHGqeTHw",
    },
    {
      metaData: {
        artist: "(ALL PLATS) [♣] lunachrist ★ stvn - ",
        title: "TONKA __ cmwbeats __ #rK.mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/gDq5ehSO8xzAxKHE7xOvAF2bfHxVD5bJ",
    },
    {
      metaData: {
        artist: "akoge @xkoge",
        title: "blackberry 📲 [prod. syrgn].mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/c8WEikL4B2JvgJurWwJzJu9p6Nfypszv",
    },
    {
      metaData: {
        artist: "methhead & 67",
        title: "monster's allergy 😒😵.mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/FzHcAdJZz7QOUZCWL2Xypi6RFoVzjnET",
    },
    {
      metaData: {
        artist: "chozhen",
        title: "2 ✌🏿detrimental 🤕🪞👎🏿 #_(_‚‹」∠)_.mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/CGTvPnHTjVFtap8SYMNyO9uuUbayLXsW",
    },
    {
      metaData: {
        artist: "#lsdradio",
        title: "#LSDRADIO W🌎RLD PREM🎨ERE #😢💛🌈🍭 (FULL EP).mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/FgobKdkXbch2tKqnE6jgnu3PGO76XMSb",
    },
    
  ]
 
};


            function App() {
              const [divRef, setDivRef] = useState(null);
  const [show,toggleShow] = useState(true);
  const [showRain, toggleShowRain] = useState(false)
  const[showVideos,toggleShowVideos] = useState(false);
  // var [urlString, setUrlString] = useState("https://www.youtube.com/embed/videoseries?si=MyparJQdLMJEML2L&amp;list=PLoF3Se6f4C7rVqaUwEzVIQFM9MmAxcfd_")
  useEffect(() => {
    if (divRef == null) {
      return;
    }
    const webamp = new Webamp(config);
    webamp.renderWhenReady(divRef);

    return () => {
      webamp.dispose();
    };
  }, [divRef]);
  // I would also like to add something like a collection of things I want to own
  function playSound() {
    var mp3 = '<source src="https://actions.google.com/sounds/v1/alarms/beep_short.ogg" type="audio/mpeg">';
    document.getElementById("sound").innerHTML =
    '<audio autoplay="autoplay">' + mp3 + "</audio>";
    }
   
    // All configuration options are optional.
    // const webamp = new Webamp({
    //     // Optional.
    //     initialTracks: [
    //         {
    //             metaData: {
    //                 artist: "Artist",
    //                 title: "Title",
    //             },
    //             url: "https://cdn.jsdelivr.net/gh/captbaritone/webamp@43434d82cfe0e37286dbbe0666072dc3190a83bc/mp3/llama-2.91.mp3",
    //         }
    //       ],
    //     initialSkin: {
    //         url: "../public/45.wsz"
    //     },
    // });
    // webamp.renderWhenReady(document.getElementById('winamp-container'));

    var numThing=0
     var urlString = "https://www.youtube.com/embed/videoseries?si=MyparJQdLMJEML2L&amp;list=PLoF3Se6f4C7rVqaUwEzVIQFM9MmAxcfd_"
    const changeURL =() =>{
     urlString = document.getElementById("vidurl").value;
      // document.getElementById("ytplaylist").src = urlString
      // numThing++
       console.log(`This is the String ${urlString}`)
     
   }
   var fieldValueAndStuff="";
   function changeInputFunctionThingy(){
    // fieldValueAndStuff = document.getElementById("vidurl").value;
    console.log("somethingrandom")
   }
  
   if (!Webamp.browserIsSupported()) {
    return <div>Not supported</div>;
  }
  return ( 
  <div className="App crt  " >
    <div id = "sound"> </div>
    <button onClick = {() => playSound()}> play notification sound </button>
       <header className="App-header"></header>
       <div class="window">
        <div class="title-bar">
          <div class="title-bar-text">maybe this can be a portal to the past super old forms of media that sounds so cool :]</div>
        </div>
        <div class="window-body">
          {/* <form> */}
            {/* <div class="field-row">
              <label for="text17">Username</label>
              <input id="text17" type="text" />
            </div> */}

            {/* <div class="field-row">
              <label for="text17">Password</label>
              <input id="text17" type="text" />
            </div> */}
            {/* <input type="submit" value="Submit" onClick={console.log("it worked")}></input> */}
            <input id="yturl" type="text" />
            <button onClick={changeURL}>newvid!</button>
          {/* </form> */}
          <div className="log"> 
            {/* {" "} */}
            
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
      <a href="/about" >
        <img class="ico" src="doom-ico1.gif"></img>
        <p class="ico-text">Anticipated Games</p>
        </a>
      </div>
     
      

      {!show && <Pomodoro showProp={show} toggleShowProp={toggleShow} />}
      <ChatBox/>
      <div ref={setDivRef} />
      <img class="pizza-tv" src="https://64.media.tumblr.com/3871ce8d5c97e9069de9c95b7f4a18ab/062c866c7d8b0e67-74/s250x400/ba46a8ec9d8344cb668a0b915852c88540bcd634.gif"></img>
      {/* {<Card/>} */}
      {/* <div class="window">
  <div class="title-bar">
    <div class="title-bar-text">A Window With Stuff In It</div>
    <div class="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close"></button>
    </div>
  </div>
  <div class="window-body"> */}
  <div id="show" class="randomtext" ></div>
  {/* </div>
</div> */}
      
      {/* <input type="text" id="vidurl" ></input>
    <button onClick={changeURL}></button> */}
    
    
 
  

      <SlidingText/>
      <Scanlines/>
      <div>

      {showVideos && 
      <Vids showProp={showVideos} toggleShowProp={toggleShowVideos} hereWeGoProp={urlString}/>

      }

{showRain &&
  <Rain showProp={showRain} toggleShowProp={toggleShowRain}/>}
</div>

<div class="window clearfix" >
  <div class="title-bar">
    <div class="title-bar-text">About</div>

  </div>
  
  <div class="window-body">
 
<div className = "dialog-box-thang"> 

<div className = "pfp"></div>

<img   className = "po"src='/sadboi.gif'></img> 






<Typewriter 
  onInit={(typewriter) => {
  // typewriter.typeString('SWAG ') 
    
     /* .callFunction(() => {
        console.log('String typed out!');
      }) */
      // typewriter.typeString('')
      
      // .changeDeleteSpeed(1)

    // .changeDelay(1)
    //   .pauseFor(1)
      
      
      
      typewriter.typeString('sup... my name is 寒意⛓🥀💎xxııʌ.𝕽𝕬𝕽▽▽')
      .pauseFor(1000)
      .changeDeleteSpeed(1000)
     .deleteAll()
     
     
      typewriter.typeString('welcome to my spot 🌊')
      .changeDeleteSpeed(0.2)      
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

<Form />
{/* <button>About You</button>
<button>RUN</button> */}
{/* <Routes>
  <Route exact path="/about" element={<Card/>}></Route>
</Routes> */}

      </div>
    
   
      );
}

export default App;
