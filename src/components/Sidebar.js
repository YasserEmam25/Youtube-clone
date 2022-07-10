import React from "react";
import SideRow from "./SideRow";
import "../css/Sidebar.css";
import {
  MdHome,
  MdExplore,
  MdSubscriptions,
  MdWatchLater,
  MdVideoLibrary,
  MdHistory,
  MdLibraryAdd,
} from "react-icons/md";
import { BiLike } from "react-icons/bi";

function Sidebar() {
  return (
    <div className="sidebar">
      <SideRow title="Home" Icon={MdHome} />
      <SideRow title="Explore" Icon={MdExplore} />
      <SideRow title="Subscriptions" Icon={MdSubscriptions} />
      <div className="separator"></div>
      <SideRow title="Library" Icon={MdLibraryAdd} />
      <SideRow title="History" Icon={MdHistory} />
      <SideRow title="Your Videos" Icon={MdVideoLibrary} />
      <SideRow title="Watch Later" Icon={MdWatchLater} />
      <SideRow title="Liked Videos" Icon={BiLike} />
    </div>
  );
}

export default Sidebar;
