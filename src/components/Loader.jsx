import React from "react";
import "../assets/css/loader.css"

export const Loader = () => {
  return (
    <>
      <div class="loader">
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="base">
          <span></span>
          <div class="face"></div>
        </div>
      </div>
      <div class="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};