import { useState } from "react";
import styled, { css } from "styled-components";
import { StyledTitleH4_18 } from "../typography/typography";

export interface AccordionProps {
  /**
   * What question to show?
   */
  title: string | JSX.Element;
  /**
   * What answer to show?
   */
  body: string | JSX.Element;
}

const StyledAccordionContainer = styled.div`
  width: 100%;
`;

const StyledAccordionTitle = styled(StyledTitleH4_18)`
  width: 100%;
  color: #0f172a;
  cursor: pointer;
`;

const getDisplayStyles = (props: { "data-show"?: boolean }) => {
  return css`
    display: ${props["data-show"] ? "block" : "none"};
  `;
};

const StyledAccordionBody = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #64748b;

  ${(props) => getDisplayStyles(props)}
`;

export const Accordion = ({ title, body }: AccordionProps) => {
  const [show, setShow] = useState(false);
  return (
    <StyledAccordionContainer data-testid="Accordion">
      <StyledAccordionTitle
        onClick={() => {
          setShow(!show);
        }}
      >
        {title}
      </StyledAccordionTitle>
      <StyledAccordionBody data-show={show}>{body}</StyledAccordionBody>
    </StyledAccordionContainer>
  );
};
