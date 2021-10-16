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
      <p>Playing around with React Spring & Gutenburg <a href="https://github.com/timarney/react-spring-repeater-fields">[code]</a></p>
    <Button isPrimary focus={ 'undefined' } onClick={handleAddClient}>
      Add Item
    </Button>
    </div>
  );
};
