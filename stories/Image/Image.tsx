import styled from "styled-components";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const StyledImage = styled.img`
  border-radius: 16px;
  object-fit: cover;
`;

export const Image = (props: ImageProps) => {
  return <StyledImage {...props} />;
};
