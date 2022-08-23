import styled from "styled-components";

const StyledButton = styled.button`
    display:inline-flex;
    justify-content:center;
    align-items:center;
    border:none;
    background: ${props => props.isPrimary ? "#007cba" : "white"};
    color: ${props => props.isPrimary ? "white" : "#000"};
`;

export const Button = ({ children, icon, onClick }) => {
    return (
        <StyledButton onClick={onClick}>
            {icon}
            {children}
        </StyledButton>
    )
}