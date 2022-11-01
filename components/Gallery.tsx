import styled from "@emotion/styled";
import Header from "./common/Header";

export default function Gallery() {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Route>
            <img className="house" src="/img/route/house.svg" alt="" />
            <img className="arrow" src="/img/route/arrow.svg" alt="" />
            <p>학원소개</p>
            <img className="arrow" src="/img/route/arrow.svg" alt="" />
            <p>오시는 길</p>
          </Route>
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 200vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #e8e8e8;
`;

const Wrapper = styled.div`
  width: 80vw;
  height: 94%;
  padding: 0 100px;
  border-radius: 0 0 5px 5px;
  background: #fff;
`;

const Route = styled.div`
  width: 100%;
  height: 30px;
  margin: 18px 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & > img {
    margin-right: 12px;
  }
  .house {
    width: 2%;
  }
  .arrow {
    width: 0.7%;
  }
  & > p {
    margin-right: 12px;
    font-weight: 700;
    &:last-child {
      color: #364fc7;
    }
  }
`;
