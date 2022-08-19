import React from "react";
import { Button } from "@wordpress/components";
import useFormElementStore from "../store/formElement";

export const TopBar = () => {
  const { add } = useFormElementStore();

  return (
    <div className="top-bar">
      <div className="content">
        <Button isPrimary focus={'undefined'} onClick={add}>
          Add form element
        </Button>
      </div>
      <div className="one-edge-shadow fadedScroller_fade"></div>
    </div>
  );
};
