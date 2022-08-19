import React from "react";
import { Button } from "@wordpress/components";
import { chevronUp, chevronDown, close } from "@wordpress/icons";
import useFormElementStore from "../store/formElement";

export const ElementPanel = ({ item }) => {
  const { remove, moveUp, moveDown } = useFormElementStore();

  return (
    <div className="panel-actions">
      <div className="actions">
        <div className="block-editor-block-mover">
          <div className="mover components-toolbar-group block-editor-block-mover__move-button-container">
            <Button focus={'undefined'} isSmall icon={chevronUp} onClick={() => moveUp(item.index)} />
            <Button focus={'undefined'} isSmall icon={chevronDown} onClick={() => moveDown(item.index)} />
          </div>
        </div>
        <div className="remove">
          <Button
            isSmall
            icon={close}
            onClick={() => { remove(item.id); }}
          >
          </Button>
        </div>
      </div>
    </div>
  );
};
