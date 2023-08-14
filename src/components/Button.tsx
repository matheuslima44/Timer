import { ButtonColor, ButtonContainer } from "./Button.styles";

interface ButtonProsps {
  color?: ButtonColor;
}

export function Button({ color = "primary" }: ButtonProsps) {
  return <ButtonContainer color={color}>Enviar</ButtonContainer>;
}
