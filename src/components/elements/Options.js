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

    if (!elements[item.index].properties) {
        return <AddButton index={item.index} onClick={addChild} />
    }

    const { choices } = elements[item.index].properties;

    if (!choices) {
        return <AddButton index={item.index} onClick={addChild} />
    }

    const options = choices.map((child, index) => {
        if (!child || !item) return null;
        return (
            <Option
                renderIcon={renderIcon}
                parentIndex={item.index}
                key={`child-${item.id}-${index}`}
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