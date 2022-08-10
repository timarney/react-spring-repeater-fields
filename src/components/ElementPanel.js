import React from "react";
import { useRepeater } from "../store/RepeaterContext";
import { Form } from "./Form";
import { Panel } from "./Panel";

export const ElementPanel = ({ item, index }) => {
  const { addToRefs } = useRepeater();
  item.index = index;
  return (
    <div className={`item item-${index}`} ref={addToRefs}>
      <Form item={item} />
      <Panel item={item} />
    </div>
  );
};
