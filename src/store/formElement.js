import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
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
    return [...items, { id: uuidv4(), name: "", children: [] }]
}

const moveUp = (items, index) => {
    const previous = getPreviousIndex(items, index);
    return [...swap(items, index, previous)];
}

const moveDown = (items, index) => {
    const next = getNextIndex(items, index);
    return [...swap(items, index, next)];
}

const defaultState = []

const store = (set) => ({
    elements: defaultState,
    moveUp: (index) => set((state) => ({ elements: moveUp(state.elements, index) })),
    moveDown: (index) => set((state) => ({ elements: moveDown(state.elements, index) })),
    add: () => set((state) => ({ elements: add(state.elements) })),
    remove: (id) => set((state => ({
        elements: removeIndex(state.elements, id)
    }))),
    addChild: (index) => set((state) => {
        state.elements[index].children.push({ id: uuidv4(), value: "test" });
        return;
    }),
    removeChild: (index, childIndex) => set((state) => {
        delete state.elements[index].children[childIndex];
        return;
    }),
})

const useFormElementStore = create(devtools(persist(immer(store))));

export default useFormElementStore;