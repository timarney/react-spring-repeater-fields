import React, { useState, useCallback } from "react";
import styled from "styled-components";
import useFormElementStore from "../store/formElement";
import { ElementSelect } from "./elements";

import {
  ShortAnswer,
  Paragraph,
  Options
} from "./elements";

import {
  ShortAnswerIcon,
  ParagraphIcon,
  RadioIcon,
  RadioEmptyIcon,
  CheckBoxEmptyIcon,
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

const Element = ({ selectedItem, ...props }) => {
  let element = null;

  switch (selectedItem.id) {
    case 'short_answer':
      element = <ShortAnswer {...props} />
      break;
    case 'paragraph':
      element = <Paragraph {...props} />
      break;
    case 'multiple_choice':
      element = <Options {...props} renderIcon={() => <RadioEmptyIcon />} />
      break;
    case 'checkboxes':
      element = <Options {...props} renderIcon={() => <CheckBoxEmptyIcon />} />
      break;
    case 'dropdown':
      element = <Options {...props} renderIcon={(index) => `${index}.`} />
      break;
    default:
      element = null;
  }

  return element;
};

const getSelectedOption = (id) => {
  return items.filter((item) => (item.id === id));
}

export const ElementForm = ({ item }) => {
  const { elements, change } = useFormElementStore();
  const { type } = elements[item.index];
  const selected = getSelectedOption(type);
  const val = selected && selected.length ? selected[0] : items[2];
  // default selectedItem to multipleChoice (items[2])
  const [selectedItem, setSelectedItem] = useState(val);

  const handleElementChange = useCallback(
    ({ selectedItem: newSelectedItem }) => {
      setSelectedItem(newSelectedItem);
      change(item.index, { key: "type", value: newSelectedItem.id });
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
          value={item.question}
          onChange={(e) => {
            change(item.index, { key: "question", value: e.target.value });
          }}
        />
        <ElementSelect items={items} selectedItem={selectedItem} onChange={handleElementChange} />
      </div>
      <div className="element">
        <Element item={item} selectedItem={selectedItem} />
      </div>
    </div>
  );
};
