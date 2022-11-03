import styled from "styled-components";

export const WorksContainer = styled.div`
  width: 100%;
  max-width: 1320px;
  padding: 120px 60px 0px 60px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  & .subtitle {
    margin-bottom: 10px;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.3);
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
    width: 44%;
    margin-bottom: 70px;
  }
  & .services-details .item img {
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgb(0 0 0 / 5%), 0 10px 20px rgb(0 0 0 / 5%);
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
