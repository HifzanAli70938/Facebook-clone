import React from "react";
import {useState} from "react";
import './Body.css';
import Sidebar from "./Sidebar.js";
import Story from './Story.js';
import Widges from "./Widges";
import Onmind from './Onmind'
import Posts from './Posts';
import Chat from './Chat'


const Body = () => {
  let[chat,setChat]=useState(false);
let openChat=()=>setChat(true); 
let closeChat=()=>setChat(false); 
let close=()=>setChat(false);
  return (
    <div className="parent_body">
      <div className="child_body">
        <div className="sidebar_body">
          <Sidebar/> 
        </div>
        <div className="App_chat">
        <Chat chatClose={chat} close={close}/>
</div>
    
        <div className="story_body">
        <Story/>
        <Onmind/>
        <Posts/>
        </div>
        <div className="widges_body">
        <Widges  openChat={openChat}/>
        </div>
      </div>
    </div>
  );
};

export default Body;
