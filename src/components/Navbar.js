import React, { memo } from "react";
import { Button } from "./ui/button";
import ShapesMenu from "./ShapesMenu";
import ActiveUsers from "./users/ActiveUsers";
import NewThread from "./comments/NewThread";
import {navElements} from '../assets/constants/index';
// import { navElements } from "@/constants"; // Assuming this import is changed to a regular path

const Navbar = ({ activeElement, imageInputRef, handleImageUpload, handleActiveElement }) => {
  const isActive = (value) =>
    (activeElement && activeElement.value === value) ||
    (Array.isArray(value) && value.some((val) => val?.value === activeElement?.value));

  return (
    <nav className="flex h-[10vh] select-none items-center justify-between gap-4 bg-primary-black px-5 text-white">
      <img src="/assets/logo.svg" alt="FigPro Logo" width={58} height={20} />

      <ul className="flex flex-row">
        {navElements.map((item) => (
          <li
            key={item.name}
            onClick={() => {
              if (Array.isArray(item.value)) return;
              handleActiveElement(item);
            }}
            className={`group px-2.5 py-5 flex justify-center items-center
            ${isActive(item.value) ? "bg-primary-green" : "hover:bg-primary-grey-200"}
            `}
          >
            {Array.isArray(item.value) ? (
              <ShapesMenu
                item={item}
                activeElement={activeElement}
                imageInputRef={imageInputRef}
                handleActiveElement={handleActiveElement}
                handleImageUpload={handleImageUpload}
              />
            ) : item?.value === "comments" ? (
              <NewThread>
                <Button className="relative w-5 h-5 object-contain">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className={isActive(item.value) ? "invert" : ""}
                  />
                </Button>
              </NewThread>
            ) : (
              <Button className="relative w-5 h-5 object-contain">
                <img
                  src={item.icon}
                  alt={item.name}
                  className={isActive(item.value) ? "invert" : ""}
                />
              </Button>
            )}
          </li>
        ))}
      </ul>

      <ActiveUsers />
    </nav>
  );
};

export default memo(Navbar, (prevProps, nextProps) => prevProps.activeElement === nextProps.activeElement);
