import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div>여기는 layout 임</div>
      {children}
    </div>
  );
};

export default layout;
