import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { v4 as uuidv4 } from "uuid";
import { moveDown, moveUp, add, removeIndex } from "../util";

const store = (set) => ({
    elements: [],
    change: (index, payload) => set((state) => {
        state.elements[index][payload.key] = payload.value;
        return;
    }),
    moveUp: (index) => set((state) => ({ elements: moveUp(state.elements, index) })),
    moveDown: (index) => set((state) => ({ elements: moveDown(state.elements, index) })),
    add: () => set((state) => ({ elements: add(state.elements) })),
    remove: (id) => set((state => ({
        elements: removeIndex(state.elements, id)
    }))),
    addChild: (index) => set((state) => {
        state.elements[index].children.push({ id: uuidv4(), value: "" });
        return;
    }),
    removeChild: (index, childIndex) => set((state) => {
        state.elements[index].children.splice(childIndex, 1);
        return;
    }),
    updateChild: (index, childIndex, payload) => set((state) => {
        state.elements[index].children[childIndex][payload.key] = payload.value;
        return;
    }),
})

const useFormElementStore = create(devtools(persist(immer(store))));

export default useFormElementStore;