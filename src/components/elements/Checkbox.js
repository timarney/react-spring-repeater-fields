import React from "react";
import styled from "styled-components";
import { close } from "@wordpress/icons";
import { Button } from "@wordpress/components";
import { useRepeater } from "../../store/RepeaterContext";

const TextInput = styled.input`
   margin-left:20px;
   margin-bottom:20px;
`;

const Remove = styled(Button)`
   margin-left:10px;
   margin-bottom:20px;
`;

import { CheckBoxEmptyIcon } from "../icons";

export const Checkbox = ({ index, item }) => {

  const { dispatch } = useRepeater();

  const handleRemoveItem = (id) => {
    dispatch({ type: "remove", payload: { id } });
  };

  return (
    <div>
      <CheckBoxEmptyIcon />
      <TextInput
        type="text"
        placeholder={`Option ${index + 1}`}
      />
      <Remove
        isSmall
        icon={close}
        onClick={() => {
          handleRemoveItem(item.id);
        }}
      >
      </Remove>
    </div>
  )
};
