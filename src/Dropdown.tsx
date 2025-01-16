import React, { useState } from "react";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? "show" : ""}`}>
      <button
        type="button"
        id="dropdown-category"
        aria-expanded={isOpen}
        className={`icon-none px-6 dropdown-toggle btn btn-primary ${
          isOpen ? "show" : ""
        }`}
        onClick={toggleDropdown}
      >
        <span className="me-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
        </span>
        All Categories
      </button>
      <div
        className={`dropdown-menu ${isOpen ? "show" : ""}`}
        aria-labelledby="dropdown-category"
        style={{
          position: "absolute",
          transform: isOpen ? "translate3d(0px, 43.5px, 0px)" : "none",
        }}
      >
        <ul className="mb-0 list-unstyled">
          <li>
            <a className="dropdown-item" href="/shop?categories=electronics">
              Electronics
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="/shop?categories=gaming-accessories"
            >
              Gaming &amp; Accessories
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="/shop?categories=travel-clothing"
            >
              Travel &amp; Clothing
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="/shop?categories=backpack-fashion-bags"
            >
              Backpack &amp; Fashion Bags
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/shop?categories=computer">
              Computer
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/shop?categories=sporting-goods">
              Sporting Goods
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/shop?categories=home-kitchen">
              Home &amp; Kitchen
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
