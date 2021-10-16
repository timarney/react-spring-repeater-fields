import React from "react";
import { useRepeater } from "../store/RepeaterContext";
export const Form = ({ item }) => {
  const { dispatch } = useRepeater();

  const handleChange = (e, index) => {
    dispatch({
      type: "change",
      payload: { value: e.target.value, index }
    });
  };

  return (
    <div>
      <label htmlFor="client">{`Name ${item.index + 1}`}:</label>
      <input
        type="text"
        name={`item${item.index}`}
        placeholder={`Name #${item.index + 1}`}
        value={item.name}
        onChange={(e) => {
          handleChange(e, item.index);
        }}
      />
    </div>
  );
};
