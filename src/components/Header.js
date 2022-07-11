/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "../css/Header.css";
import {
  MdOutlineVideoCall,
  MdMenu,
  MdSearch,
  MdApps,
  MdNotificationsNone,
} from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div id="header-left">
        <MdMenu className="icon" />
        <Link to="/">
          <img
            id="logo"
            alt="youtube logo"
            src="https://static.vecteezy.com/system/resources/previews/003/206/623/original/youtube-editorial-app-icon-free-vector.jpg"
          />
        </Link>
      </div>

      {/* Search part */}
      <div id="header-middle">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          id="search-bar"
          type="text"
          placeholder="Search"
        />
        <Link to={`/search?search=${inputSearch}`}>
          <MdSearch id="search-icon" className="icon" />
        </Link>
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
