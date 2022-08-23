import React from "react";
import styled from "styled-components";
import { Close } from "../icons";
import { Button } from "../../components";
import useFormElementStore from "../../store/formElement";

const TextInput = styled.input`
   margin-left:20px;
   margin-bottom:20px;
`;

export const ElementOption = ({ parentIndex, index, renderIcon }) => {
  const { elements, removeChild, updateChild } = useFormElementStore();
  const val = elements[parentIndex].children[index].value;
  const icon = renderIcon(index);
  return (
    <div>
      {icon}
      <TextInput
        type="text"
        value={val}
        placeholder={`Option ${index + 1}`}
        onChange={(e) => {
          updateChild(parentIndex, index, { key: "value", value: e.target.value })
        }}
      />
      <Button
        isSmall
        icon={<Close />}
        onClick={() => {
          removeChild(parentIndex, index)
        }}
      >
      </Button>
    </div>
  )
};
