import styled from "@emotion/styled";

interface Props {
  image: string;
  title: string;
  children: string;
  background: string;
  color: string;
}

const Container = styled.section<{ background: string }>`
  background-color: ${(p) => p.background};
  padding: 4.6rem;
`;

const CardHeading = styled.h2`
  font-size: 3.9rem;
  font-weight: 700;
  text-transform: uppercase;
  color: hsl(0, 0%, 95%);
  margin: 2.5rem 0;
`;

const CardDescription = styled.p`
  color: hsla(0, 0%, 100%, 0.75);
  font-size: 1.5rem;
  margin-bottom: 4rem;
  line-height: 1.8;
`;

const CardBtn = styled.button<{ color: string }>`
  border: 0;
  border-radius: 2.5rem;
  padding: 1rem 2.5rem;
  font-size: 1.5rem;
  background: hsl(0, 0%, 95%);
  color: ${(p) => p.color};

  :hover {
    background: ${(p) => p.color};
    border: 1px solid #fff;
    color: #fff;
  }
`;
export const CardComponent = ({
  image,
  title,
  children,
  background,
  color,
}: Props) => {
  return (
    <Container background={background}>
      <img src={image} alt="Card Icon" />
      <CardHeading>{title}</CardHeading>
      <CardDescription>{children}</CardDescription>
      <CardBtn color={color} type="button">
        Learn More
      </CardBtn>
    </Container>
  );
};
