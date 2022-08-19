import React from "react";
import styled from "styled-components";

const TextHint = styled.div`
    color: rgba(0,0,0,.38);
`;

export const Paragraph = () => {
    return (
        <TextHint>
            Long Answer text
        </TextHint>
    )
};