import React from "react";
import {useState} from "react";
import "./Chat.css";
import bhatti from "./images/bhatti.jpg";
import { IoIosCall } from "react-icons/io";
import { BsCameraVideoFill } from "react-icons/bs";
import { MdClear } from "react-icons/md";
const Chat = (props) => {
    let chatClose=()=>{
       props.close();
    } 
  return (
  
    <>
    {props.chatClose?( 
        <>      
         <div className="parent_chat">
          <div className="child_chat">
            <div className="user_profile_chat">
              <div className="profile_chat">
                <img src={bhatti} alt="image not found" />
              </div>
            </div>
            <div className="chat_person_name">
              <h6>Hifzan Ali</h6>
            </div>
            <div className="call_video_cancel_icons">
              <IoIosCall className="IoIosCall" />
              <BsCameraVideoFill className="BsCameraVideoFill" />
              <MdClear className="MdClear" onClick={chatClose}/>
            </div>
          </div>
          <div className="chat_messages">
            <div className="message_receive">
              <p>as it is sometimes known </p>
            </div>
            <div className="message_send">
              <p>as it is sometimes known, is dummy tex</p>
            </div>

            <div className="message_receive">
              s sometimes known, is dummy text used in laying out print, graphic
              or
            </div>
          </div>
        </div>
        </>
        ):""}

   </>
  );
};

export default Chat;
