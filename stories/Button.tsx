import React from "react";
import styled, { css } from "styled-components";

type Sizes = "small" | "medium" | "large";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: Sizes;
  /**
   * Button contents
   */
  label: string | JSX.Element;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const getVariantStyles = ({ primary = false }) =>
  primary
    ? css`
        color: white;
        background-color: #4f46e5;
      `
    : css`
        color: #333;
        background-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      `;

const getSizeStyles = ({ size = "medium" }: { size?: Sizes }) => {
  switch (size) {
    case "small": {
      return css`
        font-size: 12px;
        padding: 10px 16px;
      `;
    }
    case "large": {
      return css`
        font-size: 16px;
        padding: 12px 24px;
      `;
    }
    default: {
      return css`
        font-size: 14px;
        padding: 11px 20px;
      `;
    }
  }
};

/**
 * Primary UI component for user interaction
 */
const StyledButton = styled.button<Omit<ButtonProps, "label">>`
  font-weight: 700;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  font-family: Inter;
  letter-spacing: -0.01em;
  text-align: left;

  ${(props) => getVariantStyles(props)}
  ${(props) => getSizeStyles(props)}
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
`;

const StyledButtonContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Button = ({ label, ...rest }: ButtonProps) => {
  let content =
    typeof label === "string" ? (
      label
    ) : (
      <StyledButtonContent>{label}</StyledButtonContent>
    );
  return <StyledButton {...rest}>{content}</StyledButton>;
};
