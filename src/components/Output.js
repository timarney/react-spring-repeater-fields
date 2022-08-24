import React from "react";
import styled from "styled-components";

import useFormStore from "../store/form";
import useFormElements from "../store/formElement";

const JSONOutput = styled.pre`
   margin:20px;
   padding: 20px;
   border: 1px solid rgba(0,0,0,.12);
   overflow: "scroll";
`;

export const Output = () => {
    const state = useFormStore();
    const { elements } = useFormElements();

    let obj = { ...state };
    obj.form.layout = elements.map((element) => {
        return element.id;
    });

    obj.form.elements = elements;

    return (
        <>
            <h1>Output</h1>
            <JSONOutput>{JSON.stringify(obj, null, 2)}</JSONOutput>
        </>
    )
}