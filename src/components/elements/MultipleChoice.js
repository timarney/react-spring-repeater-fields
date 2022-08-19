import { Button } from "@wordpress/components";
import { Radio } from "./Radio";
import styled from "styled-components";

const AddOption = styled(Button)`
    margin-left:0px;
`;

export const MultipleChoice = ({ item }) => {

    const state = []
    const items = state.map((item, index) => {
        return (<Radio key={item.id} item={item} index={index} />)
    })
    return (
        <div>
            <div>{items}</div>
            <AddOption isSecondary onClick={(e) => {
                //
            }}>Add Option</AddOption>
        </div>)
}