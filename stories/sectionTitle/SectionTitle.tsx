import styled from "styled-components";

import { StyledTitleH2_36, StyledTitleH3_18 } from "../typography/typography";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const StyledSectionTitle = styled.div`
  width: 100%;
  text-align: center;
`;

const StyledTitle = styled(StyledTitleH2_36)`
  color: #0f172a;
`;

const StyledSubtitle = styled(StyledTitleH3_18)`
  color: #475569;
`;

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <StyledSectionTitle>
      <StyledTitle>{title}</StyledTitle>
      {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
    </StyledSectionTitle>
  );
};
