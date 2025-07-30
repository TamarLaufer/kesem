import styled from "styled-components";

export const BackgroundWrapper = styled.div`
  background-image: url("/images/enroll_background4.png");
  background-repeat: repeat-y;
  // background-size: contain;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

export const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem 18rem;

  @media (max-width: 767px) {
    padding: 9rem 1.5rem 2rem 1.5rem;
  }
`;

export const AboutUsText = styled.p`
  font-family: "M PLUS Rounded 1c", sans-serif;
  flex-wrap: wrap;
  font-size: 22px;
  line-height: 38px;

  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 30px;
  }
`;

export const TextContainer = styled.div`
  margin-bottom: 1rem;

  @media (max-width: 767px) {
    margin: 0;
  }
`;

export const KesemImages = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
`;
