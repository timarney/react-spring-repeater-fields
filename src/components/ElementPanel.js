import React from "react";
import { Button } from "@wordpress/components";
import { chevronUp, chevronDown, close } from "@wordpress/icons";
import { useRepeater } from "../store/RepeaterContext";

export const ElementPanel = ({ item }) => {
  const { dispatch } = useRepeater();

  const handleMoveUp = (index) => {
    dispatch({ type: "move_up", payload: { index } });
  };

  const handleMoveDown = (index) => {
    dispatch({ type: "move_down", payload: { index } });
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "remove", payload: { id } });
  };

  return (
    <div className="panel-actions">
      <div className="actions">
        <div className="block-editor-block-mover">
          <div className="mover components-toolbar-group block-editor-block-mover__move-button-container">
            <Button focus={'undefined'} isSmall icon={chevronUp} onClick={() => handleMoveUp(item.index)} />
            <Button focus={'undefined'} isSmall icon={chevronDown} onClick={() => handleMoveDown(item.index)} />
          </div>
        </div>
        <div className="remove">
          <Button
            isSmall
            icon={close}
            onClick={() => {
              handleRemoveItem(item.id);
            }}
          >
          </Button>
        </div>
      </div>
    </div>
  );
};
