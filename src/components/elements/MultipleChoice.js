import { Button } from "@wordpress/components";
import { Radio } from "./Radio";
import styled from "styled-components";
import useFormElementStore from "../../store/formElement";

const AddOption = styled(Button)`
    margin-left:0px;
`;

const AddButton = ({ index, onClick }) => {
    return (
        <AddOption
            isSecondary
            onClick={() => { onClick(index); }}>
            Add Option
        </AddOption>
    )
}


export const MultipleChoice = ({ item }) => {

    const { elements, addChild } = useFormElementStore();
    const { children } = elements[item.index];

    if (!children || children.length < 1) {
        return <AddButton index={item.index} onClick={addChild} />
    }

    const items = children.map((item, index) => {
        return (<Radio key={item.id} item={item} index={index} />)
    })

    return (
        <div>
            <div>{items}</div>
            <AddButton index={item.index} onClick={addChild} />
        </div>)
}