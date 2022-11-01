import styled from "@emotion/styled";
import Banner from "../components/main/Banner";
import Shortcut from "../components/main/Shortcut";
import Intro from "../components/main/Intro";

export default function Main() {
  return (
    <>
      <Container>
        <Banner />
        <Shortcut />
        <Intro />
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  background-color: #f9f6f6;
  p {
    margin: 0;
    padding: 0;
  }
  h1 {
    margin: 0;
    padding: 0;
  }
`;
