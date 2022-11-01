import styled from "@emotion/styled";
import Header from "../components/common/Header";

export default function ElesGallery() {
  const items = [
    {
      title: "즐거운 영어 수업",
      date: "2022-10-31",
      image: "/img/gallery/background.png",
    },
  ];

  const item = items.map((arr, i) => (
    <Frame key={i}>
      <img src={arr.image} alt="" />
      <Text>
        <h4>{arr.title}</h4>
        <p>{arr.date}</p>
      </Text>
    </Frame>
  ));
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
            <p>초등 갤러리</p>
          </Route>
          <Content>
            <h2>초등갤러리</h2>
            {item}
          </Content>
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

const Frame = styled.div`
  width: 240px;
  border-radius: 5px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  img {
    width: 100%;
  }
`;

const Text = styled.div`
  margin-left: 10px;
  padding-bottom: 10px;
  h4 {
    margin: 2px 0 10px;
  }
  p {
    margin: 0;
    font-size: 12px;
  }
`;

const Content = styled.div``;
