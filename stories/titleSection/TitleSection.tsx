import styled from "styled-components";
import { Computer } from "../icon/computer";

interface FeatureSection {
  left: JSX.Element;
}

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  padding: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const StyledContent = styled.div`
  max-width: 720px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const TitleSection = ({ left }: FeatureSection) => {
  return (
    <StyledContainer>
      <StyledContent>{left}</StyledContent>
      <StyledContent>
        <Computer />
      </StyledContent>
    </StyledContainer>
  );
};
