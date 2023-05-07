import React from "react";
import "./CloseFilterMenuBtn.css";

function CloseFilterMenuBtn({ handleCloseFilterMenuBtn }) {
  return (
    <div className="close-btn-container">
      <button
        className="close-filter-menu-btn icon"
        onClick={handleCloseFilterMenuBtn}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 0 1 1.414 0L12 10.586l6.293-6.293a1 1 0 1 1 1.414 1.414L13.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L10.586 12 4.293 5.707a1 1 0 0 1 0-1.414Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default CloseFilterMenuBtn;
