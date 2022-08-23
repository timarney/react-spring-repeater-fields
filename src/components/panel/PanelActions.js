import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { ChevronUp, ChevronDown, Close } from "../icons";
import useFormElementStore from "../../store/formElement";

const Actions = styled.div`
  display: flex;
`;

const Mover = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 5px;
  display:flex;
`;

const UpDown = styled.div`
  display:flex;
  flex-direction:column;
`;

export const PanelActions = ({ item }) => {
  const { remove, moveUp, moveDown } = useFormElementStore();
  return (
    <Actions>
      <Mover>
        <UpDown>
          <Button isSmall icon={<ChevronUp />} onClick={() => moveUp(item.index)} />
          <Button isSmall icon={<ChevronDown />} onClick={() => moveDown(item.index)} />
        </UpDown>
        <Button
          isSmall
          icon={<Close />}
          onClick={() => { remove(item.id); }}
        >
        </Button>
      </Mover>
    </Actions>
  );
};
