import type { NextPage } from "next";
import Header from "../components/common/Header";
import Main from "./Main";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default Home;
