import styled from "styled-components";

const StyledButton = styled.button`
    display:inline-flex;
    justify-content:center;
    align-items:center;
    background-color: #fff;
    border:none;
`;

export const Button = ({ children, icon, onClick }) => {
    return (
        <StyledButton onClick={onClick}>
            {icon}
            {children}
        </StyledButton>
    )
}