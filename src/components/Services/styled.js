import styled from "styled-components";

export const ServicesContainer = styled.div`
  width: 100%;
  max-width: 1320px;
  padding: 120px 60px 0px 60px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 90px;
  width: 100%;
  & .services-intro {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .services-intro .content {
    width: 50%;
  }
  & .services-intro .content .subtitle {
    margin-bottom: 10px;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.3);
  }
  & .services-intro .content .title {
    margin-bottom: 20px;
    font-size: 57px;
    font-weight: 800;
  }
  & .services-intro .content .description {
    font-size: 21px;
    color: rgba(0, 0, 0, 0.6);
  }

  & .buttons {
    display: flex;
    gap: 20px;
  }
  & .buttons .primary {
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
    height: fit-content;
    white-space: nowrap;
  }
  & .buttons .secondary {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
    padding: 10px 24px;
    letter-spacing: 0px;
    background-color: #fff;
    color: #3340ff;
    box-shadow: 0 0 0 0.5px rgb(0 0 0 / 3%), 0 1px 2px rgb(0 0 0 / 5%),
      0 2px 6px rgb(0 0 0 / 10%);
    text-align: center;
    display: inline-block;
    box-sizing: border-box;
    border-radius: 4px;
    margin-bottom: 0;
    border: none;
    transition: 0.3s ease;
    line-height: 1.6;
    height: fit-content;
    white-space: nowrap;
  }

  & .services-details {
    list-style: none;
    padding: 0;
    width: 100%;
    margin: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  & .services-details .item {
    width: 48%;
    margin-bottom: 70px;
  }
  & .services-details .item .title {
    font-size: 36px;
    font-weight: 800;
    margin: 0;
    margin-bottom: 5px;
  }
  & .services-details .item .description {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);
  }
`;
