import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

type Sizes = "small" | "medium" | "large" | "h1";
type DistinctStyles = "bold" | "italic";
type Styles = DistinctStyles[];

interface TextProps {
  children: ReactNode;
  size?: Sizes;
  styles?: Styles;
}

const getSizeStyles = ({ size = "medium" }: { size?: Sizes }) => {
  switch (size) {
    case "small": {
      return css`
        font-size: 0.5rem;
        line-height: 1;
      `;
    }
    case "large": {
      return css`
        font-size: 2rem;
        line-height: 1.1;
      `;
    }
    case "h1": {
      return css`
        font-size: 2.5rem;
        line-height: 1.1;
        letter-spacing: -0.01rem;
      `;
    }
    default: {
      return css`
        font-size: 1rem;
        line-height: 1;
      `;
    }
  }
};

const getTextStyles = ({ styles }: { styles?: Styles }) => {
  return css`
    ${styles?.includes("bold") ? "font-weight: 700;" : ""}
    ${styles?.includes("italic") ? "font-style: italic;" : ""}
  `;
};

const TextSpan = styled.span<Omit<TextProps, "text">>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  ${(props) => getSizeStyles(props)}
  ${(props) => getTextStyles(props)}
`;

export const Text = ({ children, ...rest }: TextProps) => (
  <TextSpan {...rest}>{children}</TextSpan>
);
