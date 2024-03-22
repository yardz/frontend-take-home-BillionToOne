import React from "react";
import styled, { css } from "styled-components";
import { Text } from "./Text";
import { IconItem } from "./IconItem";

export interface TextWithImageProps {
  header: string;
  body: string;
  items: string[];
}

/**
 * Primary UI component for user interaction
 */
const TextWrapper = styled.div`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ItemListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  flex-direction: column;
`;

const Image = styled.img`
  border-radius: 3rem;
  max-width: 100%;
`;

export const TextWithImage = ({ header, body, items }: TextWithImageProps) => (
  <Wrapper>
    <TextWrapper>
      {/* Add Icon */}
      {/* TODO */}
      <div>{header}</div>
      <div>{body}</div>
      <ItemListWrapper>
        {items.map((item) => (
          <IconItem text={item} />
        ))}
      </ItemListWrapper>
    </TextWrapper>
  </Wrapper>
);
