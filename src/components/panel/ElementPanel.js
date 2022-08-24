import React, { useState, useCallback } from "react";
import styled from "styled-components";
import useFormElementStore from "../../store/formElement";
import { Select } from "../elements";
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
  { id: "textField", value: "Short answer", icon: <ShortAnswerIcon /> },
  { id: "textArea", value: "Paragraph", icon: <ParagraphIcon />, prepend: <Separator /> },
  { id: "radio", value: "Multiple choice", icon: <RadioIcon /> },
  { id: "checkbox", value: "Checkboxes", icon: <CheckIcon /> },
  { id: "dropdown", value: "Dropdown", icon: <SelectMenuIcon /> }
];

const SelectedElement = ({ selectedItem, ...props }) => {
  let element = null;

  switch (selectedItem.id) {
    case 'textField':
      element = <ShortAnswer {...props} />
      break;
    case 'textArea':
      element = <Paragraph {...props} />
      break;
    case 'radio':
      element = <Options {...props} renderIcon={() => <RadioEmptyIcon />} />
      break;
    case 'checkbox':
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

  if (!type) {
    return elementOptions[2];
  }

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
  const { change, changeProperties } = useFormElementStore();
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
          value={item.properties.titleEn}
          onChange={(e) => {
            changeProperties(item.index, { key: "titleEn", value: e.target.value });
          }}
        />
        <Select
          options={elementOptions}
          selectedItem={selectedItem}
          onChange={handleElementChange}
        />
      </Row>
      <SelectedElement
        item={item}
        selectedItem={selectedItem}
      />
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

export const ElementPanel = () => {
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
      <h1>Form</h1>
      {elements.map((element, index) => {
        const item = { ...element, index };
        return (
          <div key={item.id}>
            <ElementWrapper className={`element-${index}`}>
              <Form item={item} />
              <PanelActions item={item} />
            </ElementWrapper>
            <Button
              isPrimary
              onClick={add}
            >
              Add form element
            </Button>
          </div>
        );
      })}
    </>
  );
};
