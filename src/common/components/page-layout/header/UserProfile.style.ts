import styled from "styled-components";

export const UserMenuWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 3%;
  width: 300px;
  max-height: 300px;
  transition: max-height 0.5s;
`;

export const UserMenu = styled.div`
  background: #fff;
  padding: 20px;
  margin: 10px;
  border-radius: 5px 0 5px 5px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Divider = styled.hr`
  border: 0;
  height: 1px;
  width: 100%;
  background: #ccc;
  margin: 15px 0 10px;
`;

export const UserMenuLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #525252;
  margin: 12px 0;
  cursor: pointer;
`;

export const UserMenuImage = styled.img`
  width: 40px;
  background: #e5e5e5;
  border-radius: 50%;
  padding: 8px;
  margin-right: 15px;
`;

export const UserMenuLinkSpan = styled.span`
  font-size: 22px;
  transition: transform 0.5s;

  &:hover {
    transform: translateX(5px);
  }
`;
export const UserMenuLinkPar = styled.p`
  width: 100%;
  &:hover {
    font-weight: 800;
  }
`;
