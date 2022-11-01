import styled from "@emotion/styled";
import { useRef } from "react";

export default function Header() {
  const dropDown = useRef<HTMLDivElement>(null);
  const background1 = useRef<HTMLDivElement>(null);
  const background2 = useRef<HTMLDivElement>(null);
  const background3 = useRef<HTMLDivElement>(null);
  const background4 = useRef<HTMLDivElement>(null);

  const ondropUp = () => {
    if (dropDown && dropDown.current) {
      dropDown.current.style.display = "grid";
    }
  };

  const ondropDown = () => {
    if (dropDown && dropDown.current) {
      dropDown.current.style.display = "none";
    }
  };

  const onbackground1 = () => {
    if (background1 && background1.current) {
      background1.current.style.background = "#EBF0FF";
    }
  };
  const offbackground1 = () => {
    if (background1 && background1.current) {
      background1.current.style.background = "#fff";
    }
  };

  const onbackground2 = () => {
    if (background2 && background2.current) {
      background2.current.style.background = "#EBF0FF";
    }
  };
  const offbackground2 = () => {
    if (background2 && background2.current) {
      background2.current.style.background = "#fff";
    }
  };

  const onbackground3 = () => {
    if (background3 && background3.current) {
      background3.current.style.background = "#EBF0FF";
    }
  };
  const offbackground3 = () => {
    if (background3 && background3.current) {
      background3.current.style.background = "#fff";
    }
  };

  const onbackground4 = () => {
    if (background4 && background4.current) {
      background4.current.style.background = "#EBF0FF";
    }
  };
  const offbackground4 = () => {
    if (background4 && background4.current) {
      background4.current.style.background = "#fff";
    }
  };

  return (
    <Container>
      <WhiteBox>
        <img src="/img/header/logo.png" alt="" />
      </WhiteBox>
      <Wrapper onMouseEnter={ondropUp} onMouseLeave={ondropDown}>
        <TitleBox>
          <UN onMouseEnter={onbackground1} onMouseLeave={offbackground1}>
            학원소개
          </UN>
          <UN onMouseEnter={onbackground2} onMouseLeave={offbackground2}>
            운영일정
          </UN>
          <UN onMouseEnter={onbackground3} onMouseLeave={offbackground3}>
            지니갤러리
          </UN>
          <UN onMouseEnter={onbackground4} onMouseLeave={offbackground4}>
            커뮤니티
          </UN>
        </TitleBox>
        <Frame ref={dropDown}>
          <TextBox
            ref={background1}
            onMouseEnter={onbackground1}
            onMouseLeave={offbackground1}
          >
            <p>강사소개</p>
            <p>오시는 길</p>
          </TextBox>
          <TextBox
            ref={background2}
            onMouseEnter={onbackground2}
            onMouseLeave={offbackground2}
          >
            <p>시간표</p>
          </TextBox>
          <TextBox
            ref={background3}
            onMouseEnter={onbackground3}
            onMouseLeave={offbackground3}
          >
            <p>초등갤러리</p>
            <p>중등갤러리</p>
            <p>고등갤러리</p>
          </TextBox>
          <TextBox
            ref={background4}
            onMouseEnter={onbackground4}
            onMouseLeave={offbackground4}
          >
            <p>공지사항</p>
          </TextBox>
        </Frame>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  /* position: fixed; */
  width: 100vw;
  height: 130px;
  background-color: #fff;
`;

const WhiteBox = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > img {
    width: 10%;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
`;

const TitleBox = styled.div`
  width: 100vw;
  height: 50px;
  padding: 0 180px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  background-color: #364fc7;
  align-items: center;
`;

const UN = styled.p`
  font-weight: 600;
  margin: 0;
  width: 100%;
  z-index: 2;
  position: relative;
  color: #fff;

  &:after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: #4e64d6;
    z-index: -1;
    transition: width 150ms ease-in-out;
  }

  &:hover {
    color: #fff;
    height: 100%;
    margin-top: -0px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;

    &:after {
      width: 100%;
    }
  }
`;

const Frame = styled.div`
  position: relative;
  width: 100%;
  padding: 0 180px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  background-color: #fff;
  z-index: 20;
  &::after {
    content: "";
    position: absolute;
    top: 250px;
    left: 0;
    width: 100vw;
    height: 200%;
    z-index: 100;
  }
`;

const TextBox = styled.div`
  p {
    font-weight: 500;
    &:hover {
      color: #364fc7;
      text-decoration: underline;
    }
    &:last-child {
      margin-bottom: 140px;
    }
  }
`;
