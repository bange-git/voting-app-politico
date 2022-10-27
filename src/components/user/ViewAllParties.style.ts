import styled from "styled-components";

export const ViewCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 24px 36px 12px 36px;
  align-self: stretch !important;
  position: relative;
  margin-bottom: 24px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 400px;
  min-height: 250px;
  gap: 1rem;
`;

export const LogoAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;
`;

export const OfficeTitle = styled.h2`
  width: 100%;
  background: #d6d6d6;
  padding: 1rem;
`;

export const OfficeSubmit = styled.button`
  width: 100%;
  background: #003171;
  color: #fff;
  padding: 1rem;
  cursor: pointer;
  font-size: 22px;
  font-weight: 800;
`;

export const VoteCard = styled(ViewCard)`
  padding: unset;
  min-width: 350px;
  min-height: 350px;
`;

export const VoteFormGroup = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 374px;
  border-bottom: 1px solid #eaeaea;
  height: 4rem;
  padding: 13px;
  align-items: center;
`;

export const VoteInput = styled.input`
  width: 30px;
  height: 30px;
`;

export const VoteList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
