import { useEffect, useState } from "react";
import "../App.css";

function Rain(prop){
    // const[showRain,toggleShowRain] = useState(false);
    
    useEffect(() => {
        // Update the document title using the browser API
        dragElement(document.getElementById("move"));
      });
    function dragElement(elmnt) {
       
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
          /* if present, the header is where you move the DIV from:*/
          document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
          /* otherwise, move the DIV from anywhere inside the DIV:*/
          elmnt.onmousedown = dragMouseDown;
        }
      
        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }
      
        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
          elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
      
        function closeDragElement() {
          /* stop moving when mouse button is released:*/
          document.onmouseup = null;
          document.onmousemove = null;
        }
      }
    return (
        <div id="move">
            <img class="rain-tv" src="https://64.media.tumblr.com/439b83940ef895ec6a9db4d3c14e933d/tumblr_ny6w33ZKQW1spo3yuo1_r1_500.gifv"></img>
            <img class="rain-tv3 " src="https://64.media.tumblr.com/356c0ff36ae856dc6b3f47e7cddcbc02/tumblr_oweo613HbU1spo3yuo1_500.gifv"></img>

            <div class="window cornerThing"  >

            <div class="title-bar">
               <div class="title-bar-text">🥀🥀🥀🥀</div>
               <div class="title-bar-controls">
                 <button aria-label="Minimize"></button>
                 <button aria-label="Maximize"></button>
                 <button aria-label="Close"  onClick={() => prop.toggleShowProp (!prop.showProp)}></button>
               </div>
             </div>
             <img  class="corneridk" src="https://web.archive.org/web/20091027034530/http://geocities.com/bankanit/Climbing-Rose-Border.gif"></img>

            {/* <div class="status-bar ">
                     <p class="status-bar-field">Press F1 for help</p>
                     <p class="status-bar-field">Slide 1</p>
                     <p class="status-bar-field">CPU Usage: 14%</p>
                   </div> */}
            </div>
             <div class="window mywidthThingForTheWindows2"  >
             <div class="title-bar">
               <div class="title-bar-text">Calming Rain </div>
               <div class="title-bar-controls">
                 <button aria-label="Minimize"></button>
                 <button aria-label="Maximize"></button>
                 <button aria-label="Close"  onClick={() => prop.toggleShowProp (!prop.showProp)}></button>
               </div>
             </div>
             
             <iframe width="560" height="315" src="https://www.youtube.com/embed/guo8CHurCpY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                 <div class="status-bar ">
                     <p class="status-bar-field">Press F1 for help</p>
                     <p class="status-bar-field">Slide 1</p>
                     <p class="status-bar-field">CPU Usage: 14%</p>
                   </div>
         </div>  
        </div>
      );
}

export default Rain;