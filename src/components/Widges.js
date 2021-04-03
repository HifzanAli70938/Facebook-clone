import React from "react";
import { useState } from "react";
import { RiLiveLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import bhatti from "./images/bhatti.jpg";
import couple from "./images/couple.jpg";
import imran from "./images/imran.jpg";
import girl2 from "./images/girl2.jpg";
import woman from "./images/woman.jpg";
import "./widges.css";

const Widges = (props) => {
  const [profile] = useState([
    { id: 1, image: bhatti, name: "Hifzan Ali" },
    { id: 2, image:couple, name: "David" },
    { id: 3, image:imran , name: "Imran khan" },
    { id: 4, image: girl2, name: "Matt Nick" },
    { id: 5, image: woman, name: "Taylor" },
    { id: 6, image: bhatti, name: "Hifzan Ali" },
  ]);
  let openChat=()=>{
  return  props.openChat()
  }
  return (
    
  
    <>
      <div className="widges">
        <div className="contacts">
          <h5>Contacts</h5>
        </div>
        <div className="contacts_icons">
          <RiLiveLine className="RiLiveLine" />
          <FaSearch className="FaSearch" />
        </div>
      </div>
      <div className="live_friends">
        {profile.map((user) => (
          <>
          <div className="live_friends_profile_parents" onClick={openChat}>
          <div className="live_friends_profile">
              <img src={user.image} alt="image not found" />
              <h5>{user.name}</h5>
              <div className='live_users'>

              </div>
            </div>
          </div>
          
          </>
        ))}
      </div>
    </>
  );
};

export default Widges;
