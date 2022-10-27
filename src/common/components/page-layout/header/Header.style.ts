import Link from "next/link";
import styled from "styled-components";

interface Props {
  extendedNavbar: boolean;
}
export const Navbar = styled.nav<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #003171;
  height: 80px;
  color: #fff;
  padding: 0 2rem;
  position: fixed;
  width: 100%;
  z-index: 2;

  @media (max-width: 900px) {
    padding: unset;
  }

  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 900px) {
      position: fixed;
      top: 80px;
      /* left: -100%; */
      left: ${(props) => (props.extendedNavbar ? "0" : "-100%")};
      background: #104286;
      height: 100vh;
      width: 100%;
      text-align: center;
      display: block;
      transition: all 0.3s ease;
    }

    li {
      text-decoration: none;
      list-style: none;
      margin: 0 10px;

      @media (max-width: 900px) {
        width: 100%;
        margin: 27px 0;
        padding-bottom: 20px;
        border-bottom: 1px solid white;
        &:hover {
          color: cyan;
          background-color: unset;
        }
      }
    }
  }
`;

export const RightNavbar = styled.ul<Props>`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: black;
  align-items: center;
  height: ${(props) => (props.extendedNavbar ? "80vh" : "80px")};
`;

export const Title = styled.h2`
  margin: 0;
  line-height: 1.15;
  font-size: 2rem;
  font-family: Roboto, Helvetica, Arial, sans-serif;
`;

export const Logo = styled.div`
  /* margin: 0;
  line-height: 1.15;
  font-size: 2rem; */
  color: #fff;
  font-size: 35px;
  font-weight: 600;
  /* font-family: Roboto, Helvetica, Arial, sans-serif; */
  @media (max-width: 900px) {
    margin-left: 20px;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;
  padding: 12px;
  &:hover {
    background: #fff;
    color: black;
    border-radius: 5px;
  }

  @media (max-width: 900px) {
    width: 100%;
    /* margin-left: -100%; */
    display: block;
    font-size: 20px;
    transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    &:hover {
      color: cyan;
      background-color: unset;
    }
  }
`;

export const DropDownMenu = styled.ul`
  width: 10rem;
  position: absolute;
  top: 52px;
  list-style: none;
  text-align: start;
  display: flex;
  flex-direction: column;
  background: #fff;
  right: 2px;
`;

export const DropDownLi = styled.li`
  margin: 0 !important;
  border: 1px solid #dbdbdb;

  &:hover {
    background: #dbdbdb;
  }
`;

export const SubmenuLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  padding: 10px;
  color: black;
  cursor: pointer;
`;

export const OpenMenuButton = styled.button`
  width: 30px;
  height: 40px;
  font-size: 45px;
  color: #fff;
  cursor: pointer;
  background: none;
  border: unset;
  margin-right: 28px;

  @media (min-width: 900px) {
    display: none;
  }
`;

export const CloseMenuButton = styled.button`
  width: 30px;
  height: 25px;
  font-size: 45px;
  color: #fff;
  cursor: pointer;

  @media (min-width: 900px) {
    display: none;
  }
`;

interface NavProps {
  extendNavbar: boolean;
}

export const NavbarContainer = styled.nav<NavProps>`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: black;
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  @media (min-width: 900px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 900px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 900px) {
    display: none;
  }
`;
