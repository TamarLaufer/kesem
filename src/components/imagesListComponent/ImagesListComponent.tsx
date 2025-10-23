"use client";

import Image from "next/image";
import s from "./ImagesListComponent.module.css";

const imagesList = [
  "kesem_center1.jpeg",
  "kesem_center2.jpeg",
  "kesem_center3.jpeg",
];

const ImagesListComponent = () => {
  return (
    <div className={s.imagesContainer}>
      {imagesList.map((oneImg) => (
        <Image
          key={oneImg}
          className={s.imageStyle}
          src={`/images/${oneImg}`}
          alt="image"
          width={400}
          height={250}
        />
      ))}
    </div>
  );
};

export default ImagesListComponent;
