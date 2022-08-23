import { Button } from "../panel";
import useFormElementStore from "../../store/formElement";
import { Option } from "./Option";

const AddButton = ({ index, onClick }) => {
    return (
        <Button
            isSecondary
            onClick={() => { onClick(index); }}>
            Add Option
        </Button>
    )
}

export const Options = ({ item, renderIcon }) => {
    const { elements, addChild } = useFormElementStore();
    const { children } = elements[item.index];

    if (!children) {
        return <AddButton index={item.index} onClick={addChild} />
    }

    const options = children.map((child, index) => {
        if (!child) return null;
        return (
            <Option
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
            {options}
            <AddButton index={item.index} onClick={addChild} />
        </div>
    )
}