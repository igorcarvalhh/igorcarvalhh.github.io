import styled from "styled-components";

export const FooterContainer = styled.section`
  min-width: 100%;
  background-color: #000;
  padding: 120px 0;
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1320px;
  padding: 0 60px;
  margin: 0 auto;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .content {
    max-width: 750px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & .subtitle {
    margin-bottom: 10px;
    font-size: 18px;
    opacity: 0.5;
    font-weight: 400;
  }
  & .title {
    font-size: 57px;
    margin-bottom: 20px;
  }
  & .msg {
    font-size: 21px;
    text-align: center;
    font-weight: 400;
    margin-bottom: 30px;
  }

  & .button {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #fff;
    background-color: #3340ff;
    padding: 10px 24px;
    letter-spacing: 0px;
    box-shadow: inset 0 -1px 0 rgb(0 0 0 / 10%), 0 1px 2px rgb(28 35 139 / 10%),
      0 2px 5px rgb(41 52 204 / 20%);
    text-align: center;
    display: inline-block;
    box-sizing: border-box;
    border-radius: 4px;
    margin-top: 40px;
    margin-bottom: 80px;
    border: none;
    transition: 0.3s ease;
    line-height: 1.6;
    height: fit-content;
    white-space: nowrap;
  }

  & .copywrite {
    font-size: 13px;
    color: grey;

    & span {
      font-weight: 600;
      color: #fff;
      opacity: 0.7;
    }
  }
`;
