import React, { useState, useCallback } from "react";
import styled from "styled-components";
import useFormElementStore from "../../store/formElement";
import { ElementSelect } from "../elements";
import { Button } from "./Button";
import { PanelActions } from "./PanelActions";

import {
  ShortAnswer,
  Paragraph,
  Options
} from "../elements";

import {
  ShortAnswerIcon,
  ParagraphIcon,
  RadioIcon,
  RadioEmptyIcon,
  CheckBoxEmptyIcon,
  CheckIcon,
  SelectMenuIcon
} from "../icons";

const Separator = styled.div`
    border-top: 1px solid rgba(0,0,0,.12);
    margin: 8px 0;
`;

const elementOptions = [
  { id: "short_answer", value: "Short answer", icon: <ShortAnswerIcon /> },
  { id: "paragraph", value: "Paragraph", icon: <ParagraphIcon />, prepend: <Separator /> },
  { id: "multiple_choice", value: "Multiple choice", icon: <RadioIcon /> },
  { id: "checkboxes", value: "Checkboxes", icon: <CheckIcon /> },
  { id: "dropdown", value: "Dropdown", icon: <SelectMenuIcon /> }
];

const SelectedElement = ({ selectedItem, ...props }) => {
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
      element = <Options {...props} renderIcon={(index) => `${index + 1}.`} />
      break;
    default:
      element = null;
  }

  return element;
};

const getSelectedOption = (item) => {
  const { elements } = useFormElementStore();
  const { type } = elements[item.index];
  const selected = elementOptions.filter((item) => (item.id === type))
  return selected && selected.length ? selected[0] : elementOptions[2]
}

const Row = styled.div`
  position: relative;
  justify-content: space-between;
  margin-right:80px;
`;

const Input = styled.input`
  padding: 10px;
  width: 260px;
  border: 1px solid rgba(0,0,0,.12);
  height:24px;
`;

const Form = ({ item }) => {
  const { change } = useFormElementStore();
  const [selectedItem, setSelectedItem] = useState(getSelectedOption(item));

  const handleElementChange = useCallback(
    ({ selectedItem: newSelectedItem }) => {
      setSelectedItem(newSelectedItem);
      change(item.index, { key: "type", value: newSelectedItem.id });
    },
    [setSelectedItem],
  );

  return (
    <>
      <Row>
        <Input
          type="text"
          name={`item${item.index}`}
          placeholder={`Question`}
          value={item.question}
          onChange={(e) => {
            change(item.index, { key: "question", value: e.target.value });
          }}
        />
        <ElementSelect options={elementOptions} selectedItem={selectedItem} onChange={handleElementChange} />
      </Row>
      <SelectedElement item={item} selectedItem={selectedItem} />
    </>
  );
};

const ElementWrapper = styled.div`
  width:800px;
  border: 2px solid #efefef;
  padding: 1.25em;
  position: relative;
  max-width: 600px;
  height: auto;
  margin-bottom: 20px;
`;

export const ElementForm = () => {
  const { elements, add } = useFormElementStore();

  if (!elements.length) {
    return (
      <Button isPrimary onClick={add}>
        Add form element
      </Button>
    )
  }

  return (
    <>
      {elements.map((element, index) => {
        const item = { ...element, index };
        return (
          <div key={item.id}>
            <ElementWrapper className={`element-${index}`}>
              <Form item={item} />
              <PanelActions item={item} />
            </ElementWrapper>
            <Button isPrimary onClick={add}>
              Add form element
            </Button>
          </div>
        );
      })}
    </>
  );
};
