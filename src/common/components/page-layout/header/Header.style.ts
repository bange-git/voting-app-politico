import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #003171;
  height: 80px;
  color: #fff;
  padding: 0 2rem;
  position: fixed;
  width: 100%;

  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;

    li {
      text-decoration: none;
      list-style: none;
      margin: 0 20px;
    }
  }
`;

export const Title = styled.h2`
  margin: 0;
  line-height: 1.15;
  font-size: 2rem;
  font-family: Roboto,Helvetica,Arial,sans-serif;
`;
