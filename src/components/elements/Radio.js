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

import { RadioEmptyIcon } from "../icons";

export const Radio = ({ parentIndex, index, item }) => {

  console.log(item);

  const { removeChild } = useFormElementStore();

  const handleChange = (e, index) => {
    //
  };

  const handleRemoveItem = (id) => {
    //
  };

  return (
    <div>
      <RadioEmptyIcon />
      <TextInput
        type="text"
        placeholder={`Option ${index + 1}`}
        onChange={(e) => {
          handleChange(e, item.index);
        }}
      />
      <Remove
        isSmall
        icon={close}
        onClick={() => {
          removeChild(parentIndex, index);
        }}
      >
      </Remove>
    </div>
  )
};
