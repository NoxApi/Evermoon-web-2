import React from "react";
import gradient from "../styles/gradient.module.css";

const Layout = (props: any) => {
  return (
    <div>
      <div className={`bg-black p-0 text-white `}>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
