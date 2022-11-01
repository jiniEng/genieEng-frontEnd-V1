import styled from "@emotion/styled";

export default function Shortcut() {
  const items = [
    {
      title: "커리큘럼",
      content: "수업 관련 자료를 확인해보세요",
    },
    {
      title: "지니 갤러리",
      content: "수업 현황을 사진으로 만나보세요",
    },
    {
      title: "공지사항",
      content: "학원 공지사항을 확인해보세요",
    },
  ];

  const item = items.map((arr, i) => (
    <Frame key={i}>
      <Text>
        <h1>{arr.title}</h1>
        <p>{arr.content}</p>
      </Text>
    </Frame>
  ));

  return (
    <Container>
      <Wrapper>
        <Title>
          <p>지니영어를 소개합니다</p>
          <span>바로가기</span>
        </Title>
        <Content>{item}</Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100%;
  margin-top: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 76vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  margin-bottom: 70px;
  & > p {
    font-size: 34px;
    font-weight: 700;
  }
  & > span {
    font-size: 30px;
    color: #333333;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Frame = styled.div`
  width: 340px;
  height: 340px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 70px 10px;
  color: #fff;
  background: #506cf1;
`;

const Text = styled.div`
  margin: 36px 0 0 36px;
  & > h1 {
    font-size: 28px;
  }
  & > p {
    margin-top: 8px;
    font-size: 15px;
  }
`;
