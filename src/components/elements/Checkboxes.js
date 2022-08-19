import { Button } from "@wordpress/components";
import { Checkbox } from "./Checkbox";
import styled from "styled-components";

const AddOption = styled(Button)`
    margin-left:0px;
`;

export const Checkboxes = () => {
    const state = [];
    const items = state.map((item, index) => {
        return (<Checkbox key={item.id} item={item} index={index} />)
    })
    return (
        <div>
            <div>{items}</div>
            <AddOption isSecondary onClick={() => { }}>Add Option</AddOption>
        </div>)
}