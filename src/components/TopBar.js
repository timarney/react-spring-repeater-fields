import React, { useEffect, useState } from "react";
import { Button } from "@wordpress/components";
import { useRepeater } from "../store/RepeaterContext";

export const TopBar = () => {
  const [itemAdded, setItemAdded] = useState(false);
  const { dispatch, itemsRef } = useRepeater();
  const handleAddClient = () => {
    dispatch({ type: "add" });
    setItemAdded(true)
  };

  useEffect(() => {
    if (!itemAdded) return;

    const el = itemsRef.current[itemsRef.current.length - 1]
    const y = el.querySelector("div").getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: y,
      behavior: 'smooth'
    });

    setItemAdded(false);
  }, [itemAdded])

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
