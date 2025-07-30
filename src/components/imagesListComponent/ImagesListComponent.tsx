"use client";

import { ImagesContainer, ImageStyle } from "./ImagesListComponent.styles";

const imagesList = [
  "kesem_center1.jpeg",
  "kesem_center2.jpeg",
  "kesem_center3.jpeg",
];

const ImagesListComponent = () => {
  return (
    <ImagesContainer>
      {imagesList.map((oneImg) => {
        return (
          <ImageStyle
            key={oneImg}
            src={`/images/${oneImg}`}
            alt="image"
            width={400}
            height={250}
          />
        );
      })}
    </ImagesContainer>
  );
};

export default ImagesListComponent;
