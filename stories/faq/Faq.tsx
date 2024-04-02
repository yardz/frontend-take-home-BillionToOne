import styled from "styled-components";

import { Accordion, AccordionProps } from "../accordion";

interface FaqProps {
  questions: AccordionProps[];
}

const StyledFacContainer = styled.div`
  width: 100%;
  max-width: 740px;
`;

export const Faq = ({ questions }: FaqProps) => {
  return (
    <StyledFacContainer>
      {questions.map((question, key) => (
        <Accordion {...question} key={key} />
      ))}
    </StyledFacContainer>
  );
};
