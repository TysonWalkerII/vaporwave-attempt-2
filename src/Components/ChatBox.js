import React, { useEffect, useState } from "react";
import chatCollectionRef from "../services/chatDatabase.js";
import { doc, onSnapshot } from "firebase/firestore";
import "../App.css";
 function ChatBox(){
    const [chats, setChats] = useState([]);
    useEffect(() => {
        // getChats();
        // setInterval(() => {
        //   getChats();
        // }, 2000)
    },[]);
    
    const getChats = async() => {
        const data = await chatCollectionRef.getAllChats();
          setChats(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        //     console.log(chats[0].timestamp.seconds)
        // console.log("it did it again")
    }

    // const addAChatThing = async() =>{
    //   const data = await chatCollectionRef.getAllChats()
    //   const text = doc(chatCollectionRef, "messages", data.docs.length - 1)
       
    // }
    return(
      <div>
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
      
        <div class="text-size-and-stuff">
            {chats.map((doc, index)=>{ 
            chats.sort((a,b) => a.timestamp.seconds - b.timestamp.seconds);
            return (
                <p class="chatText">{doc.text}</p>
                // <pre>{JSON.stringify(chats,undefined, 10)}</pre>
            )
        })}</div>
        
        </div>
        
  </table>
  
  </div>
</div>
<button onClick={getChats}>refresh the chat</button>

</div>
       
    )
}

export default ChatBox;