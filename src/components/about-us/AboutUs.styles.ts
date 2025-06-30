import styled from "styled-components";
import Image from "next/image";

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
    padding: 8rem 2rem;
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

export const ImagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0.5rem;
  }
`;

export const ImageStyle = styled(Image)`
  width: 450px;
  height: 230px;
  padding: 0 0.4rem;

  @media (max-width: 768px) {
    width: 340px;
    height: 250px;
    padding: 0.4rem 0;
  }
`;

export const KesemImages = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
`;
