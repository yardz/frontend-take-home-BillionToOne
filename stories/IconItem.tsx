import React from "react";
import styled, { css } from "styled-components";

interface IconItemProps {
  text: string;
}

/**
 * Primary UI component for user interaction
 */
const Wrapper = styled.div`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  display: flex;
`;

const TextWrapper = styled.div`
  margin-left: 0.75rem;
  display: flex;
  align-items: center;
`;

export const IconItem = ({ text, ...rest }: IconItemProps) => (
  <Wrapper>
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="24" height="24" rx="12" fill="#E0E7FF" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.33036 14.8601L17.2504 6.7934C18.0504 5.98007 19.2637 6.92674 18.2637 7.9934C18.2637 7.9934 10.6637 17.5401 10.2637 18.0867C10.1441 18.2797 9.97725 18.4389 9.77892 18.5493C9.58059 18.6597 9.35735 18.7177 9.13036 18.7177C8.90336 18.7177 8.68012 18.6597 8.48179 18.5493C8.28346 18.4389 8.1166 18.2797 7.99702 18.0867L5.50369 13.8201C5.37698 13.5886 5.33718 13.3194 5.39146 13.0611C5.44574 12.8029 5.59053 12.5725 5.79972 12.4116C6.0089 12.2507 6.26871 12.1698 6.53226 12.1836C6.79581 12.1974 7.04576 12.3049 7.23702 12.4867L9.33036 14.8601Z"
        fill="#4F46E5"
      />
    </svg>
    <TextWrapper>{text}</TextWrapper>
  </Wrapper>
);
