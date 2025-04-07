import React, { JSX } from "react";
import "./Footer.css";

export default function Footer(): JSX.Element {
  return (
    <div className="footer">
      <span>
        &copy; Ewan Gravé - {new Date().getFullYear()} - Powered By NewsAPI
      </span>
    </div>
  );
}
