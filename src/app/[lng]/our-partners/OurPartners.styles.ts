import styled from "styled-components";

export const PartnersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("/images/enroll_background3.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
`;
