import styled from "styled-components";

interface TitleProps {
  title: string;
  subtitle: string;
  end?: JSX.Element;
}

const StyledContent = styled.div``;

const StyledTitle = styled.h1`
  font-family: Inter;
  font-size: 60px;
  font-weight: 700;
  line-height: 75px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #0f172a;
`;
const StyledSubtitle = styled.p`
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #334155;
`;

export const Title = ({ title, subtitle, end }: TitleProps) => {
  return (
    <StyledContent>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      {end}
    </StyledContent>
  );
};
