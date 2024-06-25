import React from "react";
import Logo from "./element/Logo";
import Navigator from "./element/Navigator";

const Sidebar = ({ children }) => {
  return (
    <div className="flex flex-row h-full">
      <nav className="p-4 w-[240px] border-r-[1px] border-neutral-500">
        <div>
          <Logo />
        </div>
        <div>
          <Navigator />
        </div>
      </nav>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Sidebar;
