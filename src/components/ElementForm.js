import React, { useState, useCallback } from "react";
import { useRepeater, RepeaterProvider } from "../store/RepeaterContext";
import { ElementSelect } from "./elements";
import styled from "styled-components";
import {
  ShortAnswer,
  Paragraph,
  MultipleChoice,
  Checkboxes,
  DropDownOptions
} from "./elements";

import {
  ShortAnswerIcon,
  ParagraphIcon,
  RadioIcon,
  CheckIcon,
  SelectMenuIcon
} from "./icons";

const Separator = styled.div`
    border-top: 1px solid rgba(0,0,0,.12);
    margin: 8px 0;
`;

const items = [
  { id: "short_answer", value: "Short answer", icon: <ShortAnswerIcon /> },
  { id: "paragraph", value: "Paragraph", icon: <ParagraphIcon />, prepend: <Separator /> },
  { id: "multiple_choice", value: "Multiple choice", icon: <RadioIcon /> },
  { id: "checkboxes", value: "Checkboxes", icon: <CheckIcon /> },
  { id: "dropdown", value: "Dropdown", icon: <SelectMenuIcon /> }
];

const Element = ({ selectedItem }) => {
  let element = null;

  switch (selectedItem.id) {
    case 'short_answer':
      element = <ShortAnswer />
      break;
    case 'paragraph':
      element = <Paragraph />
      break;
    case 'multiple_choice':
      element = <RepeaterProvider><MultipleChoice /></RepeaterProvider>
      break;
    case 'checkboxes':
      element = <RepeaterProvider><Checkboxes /></RepeaterProvider>
      break;
    case 'dropdown':
      element = <RepeaterProvider><DropDownOptions /></RepeaterProvider>
      break;
    default:
      element = null;
  }

  return element;
};

export const ElementForm = ({ item }) => {
  const { dispatch } = useRepeater();
  const [selectedItem, setSelectedItem] = useState(items[2])

  const handleChange = (e, index) => {
    dispatch({
      type: "change",
      payload: { value: e.target.value, index }
    });
  };

  const handleElementChange = useCallback(
    ({ selectedItem: newSelectedItem }) => {
      setSelectedItem(newSelectedItem);
    },
    [setSelectedItem],
  );

  return (
    <div>
      <div className="element-row">
        <input
          type="text"
          name={`item${item.index}`}
          placeholder={`Question`}
          value={item.name}
          onChange={(e) => {
            handleChange(e, item.index);
          }}
        />
        <ElementSelect items={items} selectedItem={selectedItem} onChange={handleElementChange} />
      </div>
      <div class="element">
        <Element selectedItem={selectedItem} />
      </div>
    </div>
  );
};
