import React from "react";
import { useRepeater } from "../store/RepeaterContext";
import { useTransition, animated } from "react-spring";
import { Item } from "./Item";

export const Repeater = () => {
  const { state } = useRepeater();

  let height = 40;
  const offset = 0;

  const listTransitions = useTransition(
    state.map((data) => ({
      ...data,
      y: (height += 120) - offset
    })),
    {
      key: (item) => item.id,
      from: { height: 0, opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y, height }) => ({ y, height, opacity: 1 }),
      update: ({ y, height }) => ({ y, height })
    }
  );

  return (
    <div className="items" style={{ height }}>
      {listTransitions((styles, item, t, index) => {
        return (
          <animated.div style={{ zIndex: state.length - index, ...styles }}>
            <Item item={item} index={index} />
          </animated.div>
        );
      })}
    </div>
  );
};
