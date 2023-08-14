import styled from "styled-components";

export type ButtonColor = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  color: ButtonColor;
}

const buttonColos = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;

  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};

  /* ${(props) => {
    return `background-color: ${buttonColos[props.color]}`;
  }} */
`;
