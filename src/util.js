import { v4 as uuidv4 } from "uuid";

export const getPreviousIndex = (items, index) => {
  return index === 0 ? items.length - 1 : index - 1;
};

export const getNextIndex = (items, index) => {
  return index === items.length - 1 ? 0 : index + 1;
};

export const removeIndex = (items, id) => {
  return items.filter((item) => {
    return item.id !== id;
  })
}

export const add = (items) => {
  return [...items, { id: uuidv4(), question: "", children: [] }]
}

export const moveUp = (items, index) => {
  const previous = getPreviousIndex(items, index);
  return [...swap(items, index, previous)];
}

export const moveDown = (items, index) => {
  const next = getNextIndex(items, index);
  return [...swap(items, index, next)];
}

export const swap = (arr, index1, index2) => {
  const a = { ...arr[index1] };
  const b = { ...arr[index2] };

  return arr.map((item, i) => {
    if (i === index1) {
      item = b;
    }
    if (i === index2) {
      item = a;
    }

    return item;
  });
};
