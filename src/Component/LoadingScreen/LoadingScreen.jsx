import React, { useEffect } from "react";
import "./loading.css";
export default function LoadingScreen() {
  return (
    <>
      <div className="loading position-fixed top-0 bottom-0 start-0 end-0">
        <div class="loading">
          <div class="loadingWrapper">
            <div id="loading"> </div>
            <h1>Loading . . .</h1>
          </div>
        </div>
      </div>
    </>
  );
}
