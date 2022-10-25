import styled from "styled-components";

import Header from "../components/Header";
import Card from "../components/Card";

export default function App() {
    return (
        <>
          <Header />
          <Body>
            <Card />
          </Body>
        </>
    );
}

const Body = styled.div`
  margin-top: 217px;
  padding-left: 15%;
  padding-right: 10%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;