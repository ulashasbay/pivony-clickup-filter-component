import React from "react";
import "./DropdownFooter.css";

function DropdownFooter() {
  return (
    <div className="value-list-dropdown__footer">
      <div className="value-list-dropdown__footer-details">
        <div className="value-list-dropdown__footer-details-icon">
          <svg
            height="48"
            viewBox="0 0 48 48"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h48v48h-48z" fill="none" />
            <path d="M22 34h4v-12h-4v12zm2-30c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 36c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z" />
          </svg>
        </div>
        <a target="_blank" className="value-list-dropdown__footer-details-link">
          Learn more about filters
        </a>
      </div>
      <div className="value-list-dropdown__footer-controls">
        <div className="value-list-dropdown__footer-template">
          <div className="value-list-dropdown__footer-template-icon">
            <i className="fa fa-magic" style={{ color: "#4f5762" }}></i>
          </div>
          <div className="value-list-dropdown__footer-template-label">
            Templates
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownFooter;
