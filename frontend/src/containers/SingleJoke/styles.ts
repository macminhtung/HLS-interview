import styled from 'styled-components';

export const SingleJokeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #29b363;
  padding: 20px;
  height: 150px;
  align-items: center;
  justify-content: center;

  p {
    color: white;
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 30px;
  }

  small {
    color: white;
  }
`;

export const JokeContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
  p {
    width: 70vw;
    color: #656565;
    font-size: 16px;
    line-height: 20px;
    margin: 0;
  }
`;

export const GroupButtonWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  border-top: 1px solid #e4e4e4;
  padding: 50px;
  flex-wrap: wrap;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 200px;
    color: white;
    border-width: 0 0 3px 0;
    border-style: solid;
    background-color: #29b363;
    border-color: #209b54;
    &:disabled {
      background-color: gray !important;
      cursor: not-allowed !important;
      border-width: 0;
    }

    &:hover {
      cursor: pointer;
    }
    &:first-child {
      margin-right: 30px;
      background-color: #2c7edb;
      border-color: #1c69c0;
    }
  }
  @media screen and (max-width: 550px) {
    flex-direction: column;
    padding: 50px 20px;
    align-items: center;
    width: 80vw;
    button:first-child {
      margin-right: 0px;
      margin-bottom: 20px;
    }
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  border-top: 1px solid #dcdcdc;
  padding-top: 30px;
  align-items: center;
  > p {
    color: #b5b5b5;
    font-size: 14px;
    margin: 0;
    width: 70vw;
    &:last-child {
      margin: 20px 0 30px 0;
      color: #656565;
      text-align: center;
    }
  }
`;
