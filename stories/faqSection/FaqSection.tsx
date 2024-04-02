import styled from "styled-components";

import { AccordionProps } from "../accordion";
import { SectionTitle } from "../sectionTitle";
import { Faq } from "../faq";

interface FaqSectionProps {
  questions: AccordionProps[];
}

const StyledFacSection = styled.div`
  max-width: 740px;
  width: 100%;

  margin: 0 auto;
`;

export const FaqSection = ({ questions }: FaqSectionProps) => {
  return (
    <StyledFacSection>
      <SectionTitle
        subtitle="Here you can find solutions to all your queries."
        title="Frequently Asked Questions"
      />
      <Faq questions={questions} />
    </StyledFacSection>
  );
};
