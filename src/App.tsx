import { CardComponent } from "./components/CardComponent";
import styled, { createGlobalStyle } from "styled-components";
import luxury from "./images/luxury.svg";
import suvs from "./images/suvs.svg";
import sedan from "./images/sedans.svg";

const GlobalStyles = createGlobalStyle`
html{
  font-size: 62.5%
}
h2 { 
  font-family:'Big Shoulders Display', cursive;
}

p {
  font-family: 'Lexend Deca', sans-serif;
}

button {
  font-family: 'Lexend Deca', sans-serif;
}

@media screen and (min-width:768px) {
  button {
    margin-top: 4rem;
  }
}
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  max-width: 950px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Page>
          <CardComponent
            background="hsl(31, 77%, 52%)"
            title={"Sedans"}
            image={sedan}
            color="hsl(31, 77%, 52%)"
          >
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on you on your next road trip.
          </CardComponent>
          <CardComponent
            background="hsl(184, 100%, 22%)"
            title={"Suvs"}
            image={suvs}
            color="hsl(184, 100%, 22%)"
          >
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </CardComponent>
          <CardComponent
            background="hsl(179, 100%, 13%)"
            title={"Luxury"}
            image={luxury}
            color="hsl(179, 100%, 13%)"
          >
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </CardComponent>
        </Page>
      </div>
    </>
  );
}

export default App;
