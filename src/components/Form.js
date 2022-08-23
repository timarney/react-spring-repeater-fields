import { ElementForm, ElementPanel } from "./";
import useFormElementStore from "../store/formElement";
import styled from "styled-components";

const Wrapper = styled.div`
  width:800px;
  border: 2px solid #efefef;
  padding: 1.25em;
  position: relative;
  max-width: 600px;
  height: auto;
  margin-bottom: 20px;
`;

export const Form = () => {
    const { elements } = useFormElementStore();
    return (
        <div className="elements">
            {elements.map((element, index) => {
                const item = { ...element, index };
                return (
                    <Wrapper key={item.id} className={`element-${index}`}>
                        <ElementForm item={item} />
                        <ElementPanel item={item} />
                    </Wrapper>
                );
            })}
        </div>
    );
};