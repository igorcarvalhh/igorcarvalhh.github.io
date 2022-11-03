import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1320px;
  padding: 0 60px;
  margin: 0 auto;
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .container > svg {
    width: 500px;
  }
`;
export const ContentWrapper = styled.div`
  h1 {
    font-size: 64px;
    margin-bottom: 30px;
    max-width: 900px;
  }

  & > p {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);
    width: 550px;
    line-height: 160%;
    margin-bottom: 30px;
  }
  & > h1 > span {
    background: linear-gradient(270.17deg, #ea4c89 18.1%, #3340ff 52.38%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ProfilePhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  img {
    width: 50px;
    height: 50px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
  }
  span {
    font-weight: bold;
  }
  & .name {
    font-size: 16px;
    font-weight: 400;
  }
`;

export const PrimaryBtn = styled.a`
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
  margin-bottom: 60px;
  border: none;
  transition: 0.3s ease;
  line-height: 1.6;
`;
