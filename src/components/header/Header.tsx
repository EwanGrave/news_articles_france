import React, { JSX } from "react";
import newsapiLogo from "../../assets/newsapi.png";
import "./Header.css";

export default function Header(): JSX.Element {
  return (
    <div className="header">
      <div className="header-title">
        <div>News en France avec </div>
        <a href="https://newsapi.org">
          <img src={newsapiLogo} />
        </a>
      </div>
    </div>
  );
}
