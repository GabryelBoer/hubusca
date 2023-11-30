import styled from "styled-components";

export const Container = styled.div`
  width: 109%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3em;
`;

export const Title = styled.h2`
  font-size: 1.3em;
  margin-bottom: 1em;
`;

export const List = styled.div`
  width: 100%;
  display: grid;
  padding: 1em;
  row-gap: 0.5em;
  column-gap: 10%;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  grid-template-columns: 60% 30%;
  grid-template-rows: auto;
  border-top: 1px solid rgba(247, 255, 255, 0.3);
`;

export const RepoTitle = styled.a`
  font-weight: bold;
  cursor: pointer;
  color: rgb(102, 179, 255);
  font-size: 1.2em;
  grid-area: 1 / 1 / 2 / 2;
`;

export const Desc = styled.p`
  text-align: justify;
  grid-area: 2 / 1 / 4 / 2;
  font-size: 0.8em;
`;

export const Lang = styled.p`
  font-weight: bold;
  grid-area: 1 / 2 / 2 / 3;
  font-size: 0.9em;
  text-align: end;
`;

export const Info1 = styled.p`
  grid-area: 2 / 2 / 3 / 3;
  font-size: 0.8em;
  line-height: 1.3em;
  text-align: end;
`;

export const Border = styled.div`
  width: 100%;
  border-top: 1px solid rgba(247, 255, 255, 0.3);
`;
