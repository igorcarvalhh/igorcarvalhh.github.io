import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
  background-color: #fcfcfc;
  /* padding: 120px 0; */
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
  /* width: 100%; */
  /* max-width: 1320px; */
  /* padding: 0 60px; */
  /* margin: 0 auto; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 4%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1000px) {
    padding: 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 900px;
    flex-direction: row;
  }
  & .about-description-container {
    margin-bottom: 20px;
    /* width: 61%; */
  }

  & .subtitle {
    margin-bottom: 10px;
    color: rgba(0, 0, 0, 0.4);
  }

  & .about-description-container .title {
    margin-bottom: 20px;
  }
  & .about-description-container .intro {
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 30px;
  }
  & .about-description-container .description {
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 30px;
  }

  & .social-links-container {
    margin-top: 30px;
    /* width: 28%; */
  }
  & .social-links-container .tip {
    margin: 10px 0 30px;
  }

  & .social-ntw-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  & .social-ntw-list li {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 6px 8px;
    border-radius: 10px;
    width: fit-content;
    transition: ease 0.3s all;
  }
  & .social-ntw-list li:hover {
    background-color: #f4f4f4;
    cursor: pointer;
    color: #3340ff;
  }
`;
