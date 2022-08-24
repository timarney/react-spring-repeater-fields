import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { moveDown, moveUp, add, removeIndex } from "../util";

// Immer
// https://www.youtube.com/watch?v=FmKjwh34Rn8

// Zustand Re-renders
// https://youtu.be/aOt4Hz3ze3Q?t=1547

// Testing
// https://docs.pmnd.rs/zustand/testing

const store = (set) => ({
    lang: "en",
    elements: [],
    change: (index, payload) => set((state) => {
        state.elements[index][payload.key] = payload.value;
        return;
    }),
    changeProperties: (index, payload) => set((state) => {
        state.elements[index].properties[payload.key] = payload.value;
        return;
    }),
    moveUp: (index) => set((state) => ({ elements: moveUp(state.elements, index) })),
    moveDown: (index) => set((state) => ({ elements: moveDown(state.elements, index) })),
    add: () => set((state) => ({
        elements: add(state.elements)
        // use immer here -- just push
    })),
    remove: (id) => set((state => ({
        elements: removeIndex(state.elements, id)
    }))),
    addChild: (index) => set((state) => {
        state.elements[index].properties.choices.push({ en: "", fr: "" });
        return;
    }),
    removeChild: (index, childIndex) => set((state) => {
        state.elements[index].properties.choices.splice(childIndex, 1);
        return;
    }),
    updateChild: (index, childIndex, payload) => set((state) => {
        state.elements[index].properties.choices[childIndex][payload.key] = payload.value;
        return;
    }),
})

const useFormElementStore = create(devtools(persist(immer(store))));

export default useFormElementStore;