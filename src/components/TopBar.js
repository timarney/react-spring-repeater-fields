import React, { useEffect } from "react";
import { Button } from "@wordpress/components";
import { useRepeater } from "../store/RepeaterContext";

export const TopBar = () => {
  const { dispatch, itemsRef } = useRepeater();
  const handleAddClient = () => {
    dispatch({ type: "add" });
  };

  useEffect(() => {
    // @todo -- only do this when adding items
    const el = itemsRef.current[itemsRef.current.length - 1]
    const y = el.querySelector("div").getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: y,
      behavior: 'smooth'
    });
  })

  return (
    <div className="top-bar">
      <div className="content">
        <p>Playing around with React Spring & Gutenburg <a href="https://github.com/timarney/react-spring-repeater-fields">[code]</a></p>
        <Button isPrimary focus={'undefined'} onClick={handleAddClient}>
          Add Item
        </Button>
      </div>
      <div className="one-edge-shadow fadedScroller_fade"></div>
    </div>
  );
};
