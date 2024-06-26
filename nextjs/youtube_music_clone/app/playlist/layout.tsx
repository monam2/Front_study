import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>여기는 layout 임</div>
      {children}
    </div>
  );
};

export default layout;
