import React from "react";
import "./Posts.css";
import bhatti from "./images/bhatti.jpg";
import { AiOutlineLike, AiOutlineFileGif } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { RiShareForwardLine } from "react-icons/ri";
import { GrEmoji } from "react-icons/gr";
import { BiCamera } from "react-icons/bi";
import fish from "./images/fish.jpg";
const Posts = () => {
  return (
      <>
    <div className="posts_parent">
      <div className="posts_user">
        <div className="posts_user_image">
          <img src={bhatti} alt="image not found" />
        </div>
        <div className="posts_user_name">
          <h6>Hifzan Ali</h6>
          <h7>2h</h7>
        </div>
      </div>
      <div className="posts_image">
        <img src={fish} alt="image not found" />
      </div>
      <div className="blank"></div>
      <div className="posts_comments_likes">
        <div className="like">
          <AiOutlineLike />
          <h5>Like</h5>
        </div>
        <div className="comment">
          <GoComment />
          <h5>comment</h5>
        </div>
        <div className="share">
          <RiShareForwardLine />
          <h5>share</h5>
        </div>
      </div>
      <div className="write_comment_parent">
        <div className="comment_profile">
          <img src={bhatti} alt="image not found" />
        </div>
        <div className="comment_message">
          <input
            type="text"
            placeholder="write a comment"
            className="comment_input"
          />
          <div className="cam_emoj_gift">
            <GrEmoji />
            <BiCamera />
            <AiOutlineFileGif />
          </div>
        </div>
      </div>
    </div>








<div className="posts_parent">
<div className="posts_user">
  <div className="posts_user_image">
    <img src={bhatti} alt="image not found" />
  </div>
  <div className="posts_user_name">
    <h6>Hifzan Ali</h6>
    <h7>2h</h7>
  </div>
</div>
<div className="posts_image">
  <img src={fish} alt="image not found" />
</div>
<div className="blank"></div>
<div className="posts_comments_likes">
  <div className="like">
    <AiOutlineLike />
    <h5>Like</h5>
  </div>
  <div className="comment">
    <GoComment />
    <h5>comment</h5>
  </div>
  <div className="share">
    <RiShareForwardLine />
    <h5>share</h5>
  </div>
</div>
<div className="write_comment_parent">
  <div className="comment_profile">
    <img src={bhatti} alt="image not found" />
  </div>
  <div className="comment_message">
    <input
      type="text"
      placeholder="write a comment"
      className="comment_input"
    />
    <div className="cam_emoj_gift">
      <GrEmoji />
      <BiCamera />
      <AiOutlineFileGif />
    </div>
  </div>
</div>
</div>
</>
  );
};
export default Posts;
