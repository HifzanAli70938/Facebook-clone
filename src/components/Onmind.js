import React from "react";
import bhatti from "./images/bhatti.jpg";
import {RiLiveLine} from "react-icons/ri";
import {GrGallery,GrEmoji} from "react-icons/gr";
import "./Onmind.css";
const Onmind = () => {
  return (
    <div className="onmind_parent">
      <div className="onmind_message_profile">
        <div className="onmind_profile">
          <img src={bhatti} alt="image not found" />
        </div>
        <div className="onmind_message">
          <input type="text" placeholder="Whats on your mind,Hifzan?" className="onmind_input"/>
        </div>
        </div>
        <div className="video_image_felling">
          <div className="onmind_video"><RiLiveLine/><span className="onmind_live">Live video</span> </div>
          <div className="onmind_gallery"><GrGallery/><span className="onmind_live">Photo/video</span></div>
          <div className="onmind_feeling"><GrEmoji/><span className="onmind_live">Feeling/Acidity</span></div>
        </div>
     
    </div>
  );
};
export default Onmind;
