import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { swap } from "../util";

const getPreviousIndex = (items, index) => {
  return index === 0 ? items.length - 1 : index - 1;
};

const getNextIndex = (items, index) => {
  return index === items.length - 1 ? 0 : index + 1;
};

const RepeaterContext = React.createContext();
const RepeaterReducer = (state, action) => {
  switch (action.type) {
    case "change": {
      return state.map((item, i) => {
        if (action.payload.index !== i) return item;
        return { ...item, name: action.payload.value };
      });
    }
    case "move_up": {
      const index = action.payload.index;
      const previous = getPreviousIndex(state, index);
      return [...swap(state, index, previous)];
    }
    case "move_down": {
      const index = action.payload.index;
      const next = getNextIndex(state, index);
      return [...swap(state, index, next)];
    }
    case "remove": {
      return [
        ...state.filter((item) => {
          return item.id !== action.payload.id;
        })
      ];
    }
    case "add": {
      return [...state, { id: uuidv4(), name: "" }];
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const RepeaterProvider = ({ children }) => {
  const defaultItems = [
    { id: "123", name: "" }
  ];

  const itemsRef = useRef([]);
  itemsRef.current = [];
  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  const [state, dispatch] = React.useReducer(RepeaterReducer, defaultItems);

  const value = {
    state,
    dispatch,
    addToRefs,
    itemsRef,
    getPreviousIndex,
    getNextIndex
  };
  return (
    <RepeaterContext.Provider value={value}>
      {children}
    </RepeaterContext.Provider>
  );
};

const useRepeater = () => {
  const context = React.useContext(RepeaterContext);
  if (context === undefined) {
    throw new Error("useRepeater must be used within a RepeaterProvider");
  }
  return context;
};

export { RepeaterProvider, useRepeater };
