import { useRepeater } from "../../store/RepeaterContext";
import { Button } from "@wordpress/components";
import { Radio } from "./Radio";
import styled from "styled-components";

const AddOption = styled(Button)`
    margin-left:0px;
`;

export const MultipleChoice = () => {
    const { state, dispatch } = useRepeater();
    const items = state.map((item, index) => {
        return (<Radio key={item.id} item={item} index={index} />)
    })
    return (
        <div>
            <div>{items}</div>
            <AddOption isSecondary onClick={() => { dispatch({ type: "add" }); }}>Add Option</AddOption>
        </div>)
}