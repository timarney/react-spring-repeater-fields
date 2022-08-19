import React from "react";
import styled from "styled-components";
import { close } from "@wordpress/icons";
import { Button } from "@wordpress/components";
import useFormElementStore from "../../store/formElement";

const TextInput = styled.input`
   margin-left:20px;
   margin-bottom:20px;
`;

const Remove = styled(Button)`
   margin-left:10px;
   margin-bottom:20px;
`;

export const ElementOption = ({ parentIndex, index, item, renderIcon }) => {
  const { removeChild } = useFormElementStore();
  const icon = renderIcon(index);
  return (
    <div>
      {icon}
      <TextInput
        type="text"
        placeholder={`Option ${index}`}
      />
      <Remove
        isSmall
        icon={close}
        onClick={() => {
          removeChild(parentIndex, index)
        }}
      >
      </Remove>
    </div>
  )
};
