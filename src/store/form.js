import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// Immer
// https://www.youtube.com/watch?v=FmKjwh34Rn8

// Zustand Re-renders
// https://youtu.be/aOt4Hz3ze3Q?t=1547

// Testing
// https://docs.pmnd.rs/zustand/testing

const store = (set) => ({
    form: {
        layout: [],
        endPage: {
            descriptionEn: "#Your submission has been received",
            descriptionFr: "#[fr] Your submission has been received.",
            referrerUrlEn: "",
            referrerUrlFr: ""
        },
        titleEn: "My Form",
        titleFr: "[fr] My Form",
        version: 1,
        elements: [],
        emailSubjectEn: "",
        emailSubjectFr: "",
    },
    submission: {
        email: "test@example.com"
    },
    internalTitleEn: "CDS - My Form",
    internalTitleFr: "[fr] CDS - My Form",
    publishingStatus: true,

})

const useFormStore = create(devtools(immer(store)));

export default useFormStore;