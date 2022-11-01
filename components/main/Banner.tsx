import styled from "@emotion/styled";

export default function Banner() {
  return (
    <Container>
      <Image src="/img/main/study.svg"></Image>
      <BlueBox>
        <Title>
          <p>#지니영어 사용자페이지</p>
          <h1>더 나은 영어실력을 향한 도전,</h1>
          <h1>지니영어 입니다.</h1>
          <button>자세히보기</button>
        </Title>
      </BlueBox>
      <SkyBox></SkyBox>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 450px;
`;

const Image = styled.img`
  z-index: 15;
  position: absolute;
  bottom: 0;
  right: 340px;
  width: 32%;
`;

const BlueBox = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 66vw;
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0 0 200px 0;
  color: #fff;
  background-color: #506cf1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Title = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  & > p {
    margin-bottom: 4px;
    font-size: 16px;
    font-weight: 700;
  }

  & > h1 {
    margin-top: 14px;
    font-size: 38px;
  }

  & > button {
    width: 180px;
    height: 50px;
    margin-top: 50px;
    border-radius: 25px;
    border: none;
    outline: none;
    font-size: 24px;
    font-weight: 700;
    color: #3b56d9;
    background-color: #fff;
  }
`;

const SkyBox = styled.div`
  z-index: 5;
  position: absolute;
  bottom: 0px;
  right: 0;
  width: 74vw;
  height: 360px;
  border-radius: 0 0 0 160px;
  background-color: #e0e8ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
