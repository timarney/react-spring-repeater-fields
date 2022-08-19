import { Button } from "@wordpress/components";
import { Option } from "./Option";
import styled from "styled-components";

const AddOption = styled(Button)`
    margin-left:0px;
`;

export const DropDownOptions = () => {
    const state = [];
    const items = state.map((item, index) => {
        return (<Option key={item.id} item={item} index={index} />)
    })
    return (
        <div>
            <div>{items}</div>
            <AddOption isSecondary onClick={() => { }}>Add Option</AddOption>
        </div>)
}