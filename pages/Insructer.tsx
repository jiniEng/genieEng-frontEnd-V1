import styled from "@emotion/styled";
import { useRef } from "react";

export default function Instructer() {
  const randomText = useRef<HTMLDivElement>(null);
  function onRandom() {
    return Math.floor(Math.random() * (50 - 20 + 1)) + 20;
  }
  return (
    <Container>
      <Wrapper>
        <Route>
          <img className="house" src="/img/route/house.svg" alt="" />
          <img className="arrow" src="/img/route/arrow.svg" alt="" />
          <p>학원소개</p>
          <img className="arrow" src="/img/route/arrow.svg" alt="" />
          <p>강사소개</p>
        </Route>
        <Greet>
          <h2>원장 인사말</h2>
          <Banner>
            <Text>
              <p>#강의 경력 13년차 #영문학 전공 #Tesol 수료</p>
              <p>지니 영어 학원 원장</p>
              <h3>윤혜진</h3>
            </Text>
          </Banner>
        </Greet>
        <TextCover>
          <button onClick={onRandom}>여기를 눌러보세요!</button>
          <TextBox>
            <Texts>
              <span ref={randomText} onClick={onRandom}>
                송강동
              </span>
              <span ref={randomText} onClick={onRandom}>
                영어공부방
              </span>
              <span ref={randomText} onClick={onRandom}>
                소수 그룹 수업
              </span>
              <span ref={randomText} onClick={onRandom}>
                파닉스반
              </span>
            </Texts>
            <Texts>
              <span ref={randomText} onClick={onRandom}>
                영어원서 수업
              </span>
              <span ref={randomText} onClick={onRandom}>
                초등부
              </span>
              <span ref={randomText} onClick={onRandom}>
                중등부
              </span>
              <span ref={randomText} onClick={onRandom}>
                고등부
              </span>
            </Texts>
          </TextBox>
        </TextCover>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 1582px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #e8e8e8;
`;

const Wrapper = styled.div`
  width: 80vw;
  height: 1452px;
  border-radius: 0 0 5px 5px;
  background: #fff;
`;

const Route = styled.div`
  width: 100%;
  height: 30px;
  margin: 18px 0 0 34px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img {
    margin-right: 12px;
  }
  .house {
    width: 2%;
  }
  .arrow {
    width: 0.7%;
  }
  p {
    margin-right: 12px;
    font-weight: 700;
    &:last-child {
      color: #364fc7;
    }
  }
`;

const Greet = styled.div`
  width: 100%;
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    width: 82%;
    text-align: start;
  }
`;

const Banner = styled.div`
  width: 66vw;
  height: 370px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  border-radius: 5px;
  background: #dbe4ff;
  p {
    margin: 0 0 8px 0;
    color: #565555;
    font-size: 18px;
    font-weight: 600;
  }
  h3 {
    margin: 14px 0 0 0;
    font-size: 30px;
  }
`;

const Text = styled.div`
  margin: 0 0 40px 50px;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
`;

const TextCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    width: 200px;
    height: 44px;
    border-radius: 22px;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    background-color: #506cf1;
    cursor: pointer;
  }
`;

const TextBox = styled.div`
  width: 66vw;
  background-color: red;
`;

const Texts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
