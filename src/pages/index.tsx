import type { NextPage } from "next";

import styled from "styled-components";
import HomePage from "../../static/home/component/Home";

const Dflex = styled.div`
  display: flex;
  background: red;
  hight: 100vh;
  width: 100%;
`;
const Home: NextPage = () => {
  return <HomePage />;
};

export default Home;
