import styled from "styled-components";
import Image from "next/image";

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
  width: 400px;
  height: 300px;
  object-fit: cover;
  padding: 0 0.4rem;

  @media (max-width: 768px) {
    width: 340px;
    height: 250px;
    padding: 0.4rem 0;
  }
`;
