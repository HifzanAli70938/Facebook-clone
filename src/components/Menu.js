import React from "react";
import './Menu.css';
import { FaFacebook, FaSearch } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";
import { RiGroup2Line, RiMessengerFill } from "react-icons/ri";
import { SiYoutubegaming } from "react-icons/si";
import { BsPlus } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { FcExpand } from "react-icons/fc";
const Menu = () => {
  return (
    <div className="menu_parent">
      <div className="menu__child">
        <div className="menu__left">
          <div className="fb">
            <span className="left_fb">
              <FaFacebook />
            </span>
          </div>
          <div className="search">
            <span className="left_search">
              <FaSearch />
            </span>
          </div>
        </div>

        <div className="menu__middle">
          <div className="home">
            <span className="ai_home">
              <AiFillHome />
            </span>
            
          </div>
          <div className="video">
            <span className="mc_video">
              <MdOndemandVideo />
            </span>
            <div className="number_videos">
         <p>7</p>
          </div>
          </div>
          <div className="group">
            <span className="ri_group">
              <RiGroup2Line />
            </span>
            <div className="number_groups">
         <p>12</p>
          </div>
          </div>

          <div className="gaming">
              <SiYoutubegaming  className="abc"/>
          </div>
        </div>
        <div className="menu__right">
          <div className="plus">
            <span className="bs_plus">
              <BsPlus />
            </span>
          </div>
          <div className="messenger">
            <span className="ri_messenger">
              <RiMessengerFill />
            </span>
            <div className="number_messenger">
         <p>3</p>
          </div>
          </div>
          <div className="notify">
            <span className="io_notify">
              <IoIosNotifications />
            </span>
          <div className="number_notify">
         <p>6</p>
          </div>
          </div>
          <div className="expand">
            <span className="fc_expand">
              <FcExpand />
            </span>
            <div className="number_expand">
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
