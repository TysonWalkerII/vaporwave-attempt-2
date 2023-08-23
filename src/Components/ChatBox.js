import React, { useEffect, useState } from "react";
import chatCollectionRef from "../services/chatDatabase.js";
import { doc, onSnapshot } from "firebase/firestore";
import "../App.css";
 function ChatBox(){
    const [chats, setChats] = useState([]);
    useEffect(() => {
        getChats();
        
    },[]);
    
    const getChats = async() => {
        const data = await chatCollectionRef.getAllChats();
          setChats(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        //    console.log(chats[0].timestamp.seconds)
    }
    return(
    <div class="window" >
  <div class="title-bar">   
    <div class="title-bar-text">Chat box</div>
    <div class="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close"></button>
    </div>
  </div>
  <div class="window-body" >
  <table>
    <thead>
      <tr>
        <th>Messages</th>
      </tr>
    </thead>
        {/* <td>MySQL ODBC 3.51 Driver</td> */}
        {/* newgamertag ??^%^^ */}
        <div >
        {/* <pre id="chatbox">{JSON.stringify(chats,undefined, 10)}</pre> */}
        <div>
            {chats.map((doc, index)=>{ 
            chats.sort((a,b) => a.timestamp.seconds - b.timestamp.seconds);
            return (
                <p>{doc.text}</p>
                // <pre>{JSON.stringify(chats,undefined, 10)}</pre>
            )
        })}</div>
        </div>
  </table>
  </div>
</div>
       
    )
}

export default ChatBox;