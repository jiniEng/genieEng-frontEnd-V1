import styled from "@emotion/styled";
import Header from "../components/common/Header";

export default function Directions() {
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
          <Map>
            <h2>오시는 길</h2>
            <img src="/img/directions/map.png" alt="" />
          </Map>

          <Address>
            <h2>지니 영어 학원</h2>
            <Frame>
              <Text>
                <p>주소</p>
                <span>대전 유성구 송강동 청솔아파트 513동 601호</span>
              </Text>
              <Text>
                <p>TEl</p>
                <span>010-1234-5678</span>
              </Text>
            </Frame>
          </Address>

          <Table>
            <h2>오시는 방법</h2>
            <ChartBox>
              <FirstChart>
                <p>구분</p>
                <p>도보</p>
                <p>버스</p>
                <p>지하철</p>
              </FirstChart>
              <SecondChart>
                <p>오시는 방법</p>
                <p>앙기모띠띠빵빵앙기모띠띠빵빵앙기모띠띠빵빵앙기모띠띠빵빵</p>
                <p>앙기모띠띠빵빵앙기모띠띠빵빵앙기모띠띠빵빵앙기모띠띠빵빵</p>
                <p>앙기모띠띠빵빵앙기모띠띠빵빵앙기모띠띠빵빵앙기모띠띠빵빵</p>
              </SecondChart>
            </ChartBox>
          </Table>
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

const Map = styled.div`
  width: 100%;
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > h2 {
    width: 100%;
    text-align: start;
  }
  & > img {
    width: 100%;
  }
`;

const Address = styled.div`
  width: 100%;
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > h2 {
    width: 100%;
    text-align: start;
  }
`;

const Frame = styled.div`
  width: 100%;
  height: 70px;
  gap: 200px;
  padding: 0 80px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #eef2ff;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > P {
    margin-right: 8px;
    color: #364fc7;
    font-weight: 700;
  }
`;

const Table = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & > h2 {
    width: 100%;
    text-align: start;
  }
`;

const Chart = styled.div`
  & > p {
    padding: 10px 0;
    margin: 0;
    border-bottom: 2.5px solid #838aab;
    background-color: #fff;
    text-align: center;
    &:first-child {
      color: #364fc7;
      font-weight: 600;
      border-top: 2.5px solid #000;
      border-bottom: 2.5px solid #838aab;
      background-color: #dbe4ff;
    }
    &:last-child {
      border-bottom: 2.5px solid #000;
    }
  }
`;

const ChartBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FirstChart = styled(Chart)`
  border-right: 2.5px solid #838aab;
  & > p {
    &:first-child {
      padding: 10px 100px;
    }
  }
`;

const SecondChart = styled(Chart)`
  & > p {
    &:first-child {
      padding: 10px 320px;
    }
  }
`;
