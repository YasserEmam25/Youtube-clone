/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "../css/Header.css";
import {
  MdOutlineVideoCall,
  MdMenu,
  MdSearch,
  MdApps,
  MdNotificationsNone,
} from "react-icons/md";

function Header() {
  return (
    <div className="header">
      <div id="header-left">
        <MdMenu className="icon" />
        <img
          id="logo"
          alt="youtube logo"
          src="https://static.vecteezy.com/system/resources/previews/003/206/623/original/youtube-editorial-app-icon-free-vector.jpg"
        />
      </div>

      {/* Search part */}
      <div id="header-middle">
        <input id="search-bar" type="text" placeholder="Search" />
        <MdSearch id="search-icon" className="icon" />
      </div>

      <div id="header-right">
        <MdOutlineVideoCall className="icon" />
        <MdApps className="icon" />
        <MdNotificationsNone className="icon" />
        <img
          alt="profile image"
          id="avatar"
          src="https://avatarfiles.alphacoders.com/209/209979.jpg"
        />
      </div>
    </div>
  );
}

export default Header;
