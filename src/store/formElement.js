import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { v4 as uuidv4 } from "uuid";

import { swap } from "../util";

const getPreviousIndex = (items, index) => {
    return index === 0 ? items.length - 1 : index - 1;
};

const getNextIndex = (items, index) => {
    return index === items.length - 1 ? 0 : index + 1;
};

const removeIndex = (items, id) => {
    return items.filter((item) => {
        return item.id !== id;
    })
}

const add = (items) => {
    return [...items, { id: uuidv4(), name: "" }]
}

const moveUp = (items, index) => {
    const previous = getPreviousIndex(items, index);
    return [...swap(items, index, previous)];
}

const moveDown = (items, index) => {
    const next = getNextIndex(items, index);
    return [...swap(items, index, next)];
}


const store = (set) => ({
    elements: [{ id: "123", name: "" }],
    moveUp: (index) => set((state) => ({ elements: moveUp(state.elements, index) })),
    moveDown: (index) => set((state) => ({ elements: moveDown(state.elements, index) })),
    add: () => set((state) => ({ elements: add(state.elements) })),
    remove: (id) => set((state => ({
        elements: removeIndex(state.elements, id)
    }))),
})

const useFormElementStore = create(devtools(persist(store)));

export default useFormElementStore;