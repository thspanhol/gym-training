import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Permanent Marker', cursive;
}
`
export const Create = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  justify-content: center;
  text-align: center;
  background: #a2a2a2;
  height: 100vh;
  position: fixed;
  font-size: x-large;
  img
  {
    height: 22.5vh;
  }
  input
  {
    width: 50%;
    border-radius: 30px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    text-align: center;
    font-size: large;
  }
  input::placeholder
  {
    font-size: medium;
  }
  button
  {
    margin-top: 0.5vh;
    font-size: large;
    border-radius: 30px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    text-align: center;
    width: 35%;
  }
  select
  {
    width: 50%;
    border-radius: 30px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    text-align: center;
    font-size: large;
  }
  label:nth-of-type(2)
  {
    margin-top: 2vh;
  }
  label:nth-of-type(3)
  {
    margin-top: 1vh;
  }
  p
  {
    font-size: medium;
    margin-top: -10px;
  }
`;
export const Title = styled.h1`
  font-size: 4.5vw;
  color: #111;
  display: flex;
  flex-direction: column;
  span
  {
    margin-top: -3.7vh;
    font-size: 5.25vw;
    max-height: 7vh;
    color: #dc143c;
    z-index: 1;
  }
`;
export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin-left: 30vw;
  background: #E6E6FA;

  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  font-size: 2.5vh;
  padding-left: 5vw;
  padding-right: 5vw;
`;
export const Training = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1
  {
    margin-bottom: 1vh;
  }
`;
export const Exercise = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  img
  {
  width: 15%;
  border-radius: 30px;
  margin-top: 1vh;
  margin-bottom: 1vh;
  margin-left: 1vw;
  }
`;
export const Background = styled.div`
  display: flex;
`;
export const NameTraning = styled.div`
    font-size: 7vh;
    color: #dc143c;
`;