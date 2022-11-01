import styled from "@emotion/styled";

export default function intro() {
  const items = [
    {
      title: "앙기모띠띠빵빵",
      date: "2022-00-00",
    },
    {
      title: "앙기모띠띠빵빵",
      date: "2022-00-00",
    },
    {
      title: "앙기모띠띠빵빵",
      date: "2022-00-00",
    },
    {
      title: "앙기모띠띠빵빵",
      date: "2022-00-00",
    },
  ];

  const item = items.map((arr, i) => (
    <Frame key={i}>
      <p>{arr.title}</p>
      <span>{arr.date}</span>
    </Frame>
  ));
  return (
    <Container>
      <TextBox>
        <Title>
          <span>초/중/고</span>
          <span>학생들과</span>
          <p>지니영어가 함께 합니다</p>
        </Title>
        <p>
          지니영어만의 특별한 영어 수업과 함께해보세요.
          <br />
          기초부터 탄탄하게 잡아 기본이 되는 영어 실력!
          <br />
          영어가 들리고 말문이 트이는 영어 수업, 지니영어
        </p>
        <button>커리큘럼 보기</button>
      </TextBox>

      <RouteBox>
        <Gallery>
          <span>지니 갤러리</span>
          {item}
        </Gallery>
        <Notice>
          <span>공지사항</span>
          {item}
        </Notice>
      </RouteBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100%;
  gap: 200px;
  margin-top: 210px;
  padding-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextBox = styled.div`
  & > p {
    margin: 10px 0 2px 0;
    font-size: 16px;
    font-weight: 600;
  }
  & > button {
    width: 120px;
    height: 34px;
    margin-top: 40px;
    border-radius: 3px;
    border: 1px solid #364fc7;
    outline: none;
    font-size: 14px;
    font-weight: 600;
    background-color: #fff;
  }
`;

const Title = styled.div`
  & > span {
    font-size: 50px;
    font-weight: 600;
    &:first-child {
      color: #364fc7;
    }
  }
  & > p {
    margin-top: 8px;
    font-size: 50px;
    font-weight: 600;
  }
`;

const RouteBox = styled.div`
  width: 440px;
  height: 440px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Content = styled.div`
  width: 84%;
  height: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  & > span {
    margin-bottom: 50px;
    font-size: 22px;
    font-weight: 700;
  }

  p {
    width: 56%;
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Gallery = styled(Content)`
  border-bottom: 1px solid #000;
`;

const Notice = styled(Content)``;

const Frame = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:last-child {
    margin-bottom: 16px;
  }
  & > span {
    margin-bottom: 4px;
  }
`;
