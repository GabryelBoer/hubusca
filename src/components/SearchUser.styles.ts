import styled from "styled-components";

export const Container = styled.div`
  border-radius: 1em;
  padding-bottom: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 12px 0px rgba(255, 255, 255, 0.8);
`;

export const Profile = styled.div`
  width: 100%;
  padding: 1.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2em;
  cursor: pointer;
  border-bottom: 1px solid rgba(247, 255, 255, 0.3);
`;

export const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const Credentials = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

export const Name = styled.h2`
  font-size: 1.3em;
`;

export const UserNameID = styled.p`
  font-size: 0.8em;
  text-align: start;
`;

export const LastContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
`;

export const LocationContainer = styled.p`
  display: flex;
  align-items: center;
  gap: 0.4em;
`;

export const LocationText = styled.span`
  color: white;
  font-size: 0.8em;
`;
