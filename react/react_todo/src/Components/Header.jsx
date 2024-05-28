import React, { memo } from "react"; // eslint-disable-line no-unused-vars

const Header = () => {
  return (
    <div>
      <h1>
        {new Date().toDateString()}
        </h1>
    </div>
  );
};


export default memo(Header);
