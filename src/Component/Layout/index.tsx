import React, { ReactNode } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";

interface props {
  children: ReactNode;
}

const Layout: React.FC<props> = (props) => {
  const history = useHistory();

  const searchData = (e: any) => {
    if (e.keyCode === 13) {
      history.push(`/search?q=${e.target.value}`);
    }
  };
  return (
    <div className="container-custom">
      <div className="flex justify-end">
        <input
          onKeyUp={searchData}
          type="search"
          className="mx-2.5 block text-gray-700 text-sm font-bold mb-2 border search"
          placeholder="Search"
        />
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
