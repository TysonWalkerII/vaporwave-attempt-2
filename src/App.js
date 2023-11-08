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
        artist: "lecie",
        title: "#19.mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/SQpWHSLy0aU0EK7jqzsDC3KQNvNhmRla",
    },
    {
      metaData: {
        artist: "Lucifer ☥ @vtlboss00",
        title: "#SEXSYMBØL VØL. 2 DRØPPIN MAD SØØN __HIDE YØ BITCH__.mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/fg23L9wy2JeciDY2UUBxXJaCsOg4jn1I",
    },
    {
      metaData: {
        artist: "chronicle",
        title: "+ ( ( DONT SPEAK ) ) + x POLT.mp3                           btw there is a fart in this song, can u hear it lmaooo",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/EEQYRdztsxAlUSQuthjtcAQ1wqzzN2o8",
    },
    {
      metaData: {
        artist: "3foolz",
        title: "GOD OF BLXXD (9lives).mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/0fi2XrhgppGCnhsNO5oF6sxuWu7BbaqX",
    },
    {
      metaData: {
        artist: "4jay",
        title: "ave domina lilith (slowed+reverb).mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/rLfhH4RcKejL2LIMLvCz1uIWwPOjreFp",
    },
    {
      metaData: {
        artist: "4jay",
        title: "իսեր (SIGILKORE) AVE DOMINA LILITH իսեր.mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/Kwoq9JyQNcPYOL0qdTVZKvJxPoXGoYl0",
    },
    {
      metaData: {
        artist: "akoge x akselbolt",
        title: "needless (o14 nyli and feardorian).mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/vCkrrhMj5tPgQdBiNE5RdUkZp3ozWh8R",
    },
    {
      metaData: {
        artist: "aura x rachyl - ",
        title: "run up (dylvinchi + mexikodro).mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/UboUFI4sOybv62D1wkMRpldmcICu7GsY",
    },
    {
      metaData: {
        artist: "axxturel _ 4jay x luci4 - ",
        title: "Kurxxed Emeraldz (Alt) (Slowed + bassboost + reverb).mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/hxsC5zbRPwRnglAfIepi9vrf9IwUdSMC",
    },
    {
      metaData: {
        artist: "✯𝗔𝘅𝘅𝘁𝘂𝗿𝗲𝗹 ~ ",
        title: "𝘼𝙡𝙡 𝙚𝙮𝙚𝙨 𝙤𝙣 𝙢𝙚 {𝙨𝙡𝙤𝙬𝙚𝙙}✯.mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/G3m5AF7JmZW6Mf69m4A1rDdD6tgURryI",
    },
    {
      metaData: {
        artist: "swazaé",
        title: "Beat Up The Swag(kkei3).mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/jyVRVsi9Rnx60H0tzFxeONUt2ufIN76R",
    },
    {
      metaData: {
        artist: "Artiesasylum",
        title: "Bitches Need Me(prod by 9lives).mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/4yk8EExw4jo9eQMyr60c4f1IYd2s8B0o",
    },
    {
      metaData: {
        artist: "swazaé",
        title: "Can You Stand The Rain_(66hydros)##SewerSurferz#Free12-4.mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/ezf0X77cUipmRWghgQS6rOdUWSqYTAXy",
    },
    {
      metaData: {
        artist: "reaptokyo",
        title: "CRUCIFIX (prod. Eem Triplin).mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/58fetOXRegs2KP2XTKZ69KdD9rdUKfga",
    },
    {
      metaData: {
        artist: "†w!n",
        title: "##GANG (ft reaptokyo) [prod. astral].mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/05DF2V1JrMcdVjjCVtV6RPyTPZrgKzaJ",
    },
    {
      metaData: {
        artist: "m3wk4",
        title: "04_03",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/yYCiRUbID0PkCCvrUF0AVZKBUbvS4ns9",
    },
    {
      metaData: {
        artist: "stvn AKA magekillstreak",
        title: "((( selfish slowed ver. ))) @magekillstreak.mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/IFS9rCi24OejEqJ37Q2bnpXVVa3zWGwO",
    },
    {
      metaData: {
        artist: "idfk",
        title: "cant find it smh",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/ndspdLaQ1PTpl3S6IwwvN3TuC38SWOHG",
    },
    {
      metaData: {
        artist: "(ALL PLATS) [♣] lunachrist ★ kxr ★ congress",
        title: "up 2 me __ keonamiri __ #rK.mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/gebxfJDnJwPdx8vCJISwDnwrrSVtOF2y",
    },
    
    {
      metaData: {
        artist: "soundcloud wont tell me smh",
        title: "dont bother me w_ kidlovo p. sauron.mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/BhJpQcrmWmWPY3Yul522rjCyWdoOJADf",
    },
    {
      metaData: {
        artist: "9lives (@rip9lives)",
        title: "embers.mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/ZJ1t5ce1IohWc3I74lZ2t9El9Jrh8DLH",
    },
    {
      metaData: {
        artist: "emw0n",
        title: "fallin w lecie (prod emw0n).mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/fd27aMdtrsyiLRAlq34U4ZqBiXwlku0e",
    },
    {
      metaData: {
        artist: "removeface",
        title: "feel feat. universe.wav",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/UfLj7DXNIyLAhewdi907Un6kWl4eBUVs",
    },
    {
      metaData: {
        artist: "foolz x baofumo",
        title: "old swag #ARXHFIENDZ (prod. @3foolz).mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/7H10lSK3dKI36o4V4E8Wdu9byMb1dfoC",
    },
    {
      metaData: {
        artist: "universe",
        title: "III. hide away (prod universe) #LSNA🌠.mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/eq5mo275T1FYT9sRfUK5mE9BsZFJGsoY",
    },
    {
      metaData: {
        artist: "universe",
        title: "III. hide away (prod universe) #LSNA🌠.mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/eq5mo275T1FYT9sRfUK5mE9BsZFJGsoY",
    },
    {
      metaData: {
        artist: "kovou x cleo",
        title: "2manywords [raw].mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/u8YKpmBRw663cOUj8f8Q96rN3D0BABMr",
    },
    {
      metaData: {
        artist: "kurxxed emeraldz",
        title: "luci4 (slowed + reverb).mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/deKNIFFOFSq4xc4QMBwLysxmxLUEr4Le",
    },
    {
      metaData: {
        artist: "lucifer",
        title: "letter 2 lilith _ a song about love _ __3 [sped up to perfection].mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/rOB3sGXY3X6fdYcuHsrLH3dv9qSnOCyl",
    },
    {
      metaData: {
        artist: "\\ 𓆙||nuvfr",
        title: "LUNAROS🧊🚄(gemAqueusaigüe) __nuv.mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/fUCuMD06Y3S33pg7brURFh2OUhe3lzae",
    },
    {
      metaData: {
        artist: "lungskull & demonswagga",
        title: "WOAH but instrumental.mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/SzDOIINO1Dy7mR3AjRQeOcAvaeeTpCfU",
    },
    {
      metaData: {
        artist: "lungskull",
        title: ";c [ norgates exxclusive ].mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/GIHLrwlh8ZFLi5LojHO3ogRxQFLMs5Nz",
    },
    {
      metaData: {
        artist: "lungskull x akselbolt",
        title: "thrive (nyli) _all plats_.mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/LUA4QoBBvkiGDK7rz1lM7pdUZF6CsgJi",
    },
    {
      metaData: {
        artist: "(@worknondyingg) pryncealuc4rd",
        title: "relicnova🩸 ft y3no((44TANA MIX)).mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/Yz6qTFKrccJj0yfC7tCkkh3xCmYf9npx",
    },
    {
      metaData: {
        artist: "swazaé",
        title: "tell tenkay hire me(xion orion x gemcalibur).mp3",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: "https://audio.jukehost.co.uk/ms9NfYnrWLzmV6LrdCkKi1reEUsDcz4h",
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
      <div class="memes">

      
      <div id="show" class="randomtext" />
      <div id="show2" />
      <div id="show3"></div>
      </div>
      <div  ref={setDivRef} />
     
     
      
      
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
         .pauseFor(9000)
      .deleteAll()

      typewriter.typeString('Ion know')
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
