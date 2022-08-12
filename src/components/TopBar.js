import React, { useEffect, useState } from "react";
import { Button } from "@wordpress/components";
import { useRepeater } from "../store/RepeaterContext";

export const TopBar = () => {
  const [itemAdded, setItemAdded] = useState(false);
  const { dispatch, itemsRef, state } = useRepeater();
  const handleAddClient = () => {
    dispatch({ type: "add" });
    setItemAdded(true)
  };

  const handleCopy = () => {
    dispatch({ type: "copy" });
  };

  useEffect(() => {
    if (!itemAdded) return;

    if (!itemsRef.current) {
      return;
    }

    const el = itemsRef.current[itemsRef.current.length - 1];

    if (!el) {
      return;
    }

    const y = el.querySelector("div").getBoundingClientRect().top + window.scrollY;
    if (y) {
      window.scroll({
        top: y,
        behavior: 'smooth'
      });
    }

    setItemAdded(false);
  }, [itemAdded])

  return (
    <div className="top-bar">
      <div className="content">
        <Button isPrimary focus={'undefined'} onClick={handleAddClient}>
          Add form element
        </Button>

        <Button isSecondary focus={'undefined'} onClick={handleCopy}>
          Copy Form
        </Button>
      </div>
      <div className="one-edge-shadow fadedScroller_fade"></div>
    </div>
  );
};
