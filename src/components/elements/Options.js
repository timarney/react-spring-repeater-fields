import { Button } from "@wordpress/components";
import styled from "styled-components";
import useFormElementStore from "../../store/formElement";
import { ElementOption } from "./ElementOption";

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

export const Options = ({ item, renderIcon }) => {
    const { elements, addChild } = useFormElementStore();
    const { children } = elements[item.index];

    if (!children) {
        return <AddButton index={item.index} onClick={addChild} />
    }

    const items = children.map((child, index) => {

        if (!child) return null;
        return (
            <ElementOption
                renderIcon={renderIcon}
                parentIndex={item.index}
                key={child.id}
                item={child}
                index={index}
            />
        )
    })

    return (
        <div>
            <div>{items}</div>
            <AddButton index={item.index} onClick={addChild} />
        </div>
    )
}