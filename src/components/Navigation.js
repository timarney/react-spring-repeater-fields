import { Button } from "./panel/Button";
import useFormStore from "../store/form";
import useFormElements from "../store/formElement";

export const Navigation = () => {
    const state = useFormStore();
    const { elements } = useFormElements();
    return <Button onClick={() => {
        let obj = { ...state };
        obj.form.layout = elements.map((element) => {
            return element.id;
        });

        obj.form.elements = elements;

        console.log(obj)
    }}>Log store</Button>
}