import React from "react";
import { Button, Icon } from "@wordpress/components";
import { useRepeater } from "../store/RepeaterContext";

export const TopBar = () => {
  const { dispatch } = useRepeater();
  const handleAddClient = () => {
    dispatch({ type: "add" });
  };
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
