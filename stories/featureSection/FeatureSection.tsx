import styled from "styled-components";

interface FeatureSection {
  left: JSX.Element;
  right: JSX.Element;
}

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  padding: 0px 48px;
  gap: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    padding: 0px;
  }
`;
const StyledContent = styled.div`
  max-width: 560px;
  width: 100%;
`;

export const FeatureSection = ({ left, right }: FeatureSection) => {
  return (
    <StyledContainer>
      <StyledContent>{left}</StyledContent>
      <StyledContent>{right}</StyledContent>
    </StyledContainer>
  );
};
