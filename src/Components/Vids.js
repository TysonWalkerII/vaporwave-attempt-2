import { useEffect, useState } from "react";
import "../App.css";
function Vids(prop){
    // const[showVideos,toggleShowVideos] = useState(true);
    
    useEffect(() => {
        // Update the document title using the browser API
        dragElement(document.getElementById("move"));
        // document.getElementById("ytplaylist").src = prop.hereWeGo

        // document.getElementById("vidtest").innerHTML = <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=MyparJQdLMJEML2L&amp;list=PLoF3Se6f4C7rVqaUwEzVIQFM9MmAxcfd_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      });
      // var shouldWork = "https://www.youtube.com/embed/videoseries?si=MyparJQdLMJEML2L&amp;list=PLoF3Se6f4C7rVqaUwEzVIQFM9MmAxcfd_";
      // document.getElementById("ytplaylist").src = shouldWork
      // console.log(`here this should help ${document.getElementById("ytplaylist").src}`)
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
        <div>
          {/* <div id="vidtest"></div> */}
          <img class= "vid-tv" src="https://64.media.tumblr.com/2b20078408762cb9d1330a8f3c451c90/tumblr_nyavfaJ9HP1spo3yuo1_r4_500.gifv"></img>
           <div  class="window mywidthThingForTheWindows"  id="move">

            
  <div class="title-bar">
    <div class="title-bar-text">Background video</div>
    <div class="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close" onClick={() => prop.toggleShowProp (!prop.showProp)}></button>
    </div>
  </div>
  
  <iframe width="560" height="315" src="https://www.youtube.com/embed/eeSH43xcTr8?si=agwcwP9-HNwpO2PQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>   <div class="status-bar ">
    

          <p class="status-bar-field">Press F1 for help</p>
          <p class="status-bar-field">Slide 1</p>
          <p class="status-bar-field">CPU Usage: 14%</p>
        </div>
</div>

      
        </div>
      );
}
export default Vids;