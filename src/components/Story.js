import React, { useState } from "react";
import {AiOutlinePlus} from 'react-icons/ai';
import { BsArrowRight } from "react-icons/bs";
import woman from "./images/woman.jpg";
import bhatti from "./images/bhatti.jpg";
import couple from "./images/couple.jpg";
import fish from "./images/fish.jpg";
import girl2 from "./images/girl2.jpg";

import "./Story.css";
const Story = () => {
      const [state] = useState([
          {id:1,image:woman,name:"Hifzan Ali",user:bhatti},
          {id:2,image:fish,name:"Tania Aslam",user:girl2},
          {id:3,image:couple,name:"Hira Ali",user:couple},
          {id:4,image:girl2,name:"Shahid khan",user:fish},
   ]);

  return (
    <>

      <div className="story">
    
      <div className="story_body" id="create_story_section">
    <div className="story_post" id="story_id">
      <img src={bhatti} alt="story not found" />
    </div>
    <div className="story_user" id="create_story">
    <AiOutlinePlus/>
    </div>
    <div className="story_username" id="create_a_story">create a story</div>
  </div>




        {state.map(post=>(
    <div className="story_body">
    <div className="story_post">
      <img src={post.image} alt="story not found" />
     
     
    </div>
    <div className="story_user">
      <img src={post.user} alt="story not found" />
    </div>
    <div className="story_username">{post.name}</div>
  </div>
        ))}

        <div className="arrow" >
        <BsArrowRight/>
    </div>

        </div>

    </>
  );
};
export default Story;
