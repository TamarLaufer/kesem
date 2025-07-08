import styled from "styled-components";

export const PartnersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 100vh;
  // background-image: url("/images/enroll_background3.png");
  // background-size: cover;
  // background-position: center;
  // background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
  padding-top: 8rem;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  margin: 1rem 0;
`;
