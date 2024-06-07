import React, { useLayoutEffect, useMemo, useState } from "react";
import TextAtom from "../../Atoms/Text.Atom";
import TextAtomEnum from "../../Atoms/Text.Atom/enum";
import Image from "next/image";

interface ImagesTeamBlockProps {}

const ImagesTeamBlock: React.FC<ImagesTeamBlockProps> = () => {
  const images = useMemo(
    () => [
      "avatar_1",
      "avatar_3",
      "avatar_4",
      "avatar_5",
      "avatar_6",
      "avatar_7",
      "avatar_8",
      "avatar_2",
    ],
    []
  );

  const imageWidth = 48; // Ширина каждого изображения
  const imageMargin = -8; // Отступ между изображениями
  const initialContainerWidth = 310; // Начальная ширина контейнера

  const [containerWidth, setContainerWidth] = useState(initialContainerWidth);

  useLayoutEffect(() => {
    const handleResize = () => {
      setContainerWidth(
        document.getElementById("info-block-container")?.clientWidth ||
          initialContainerWidth
      );
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [initialContainerWidth]);

  const maxImages = Math.floor(containerWidth / (imageWidth + imageMargin));
  const visibleImages = useMemo(
    () => images.slice(0, Math.min(maxImages, 7)),
    [images, maxImages]
  );

  const remainingImagesCount = images.length - visibleImages.length;

  return (
    <div
      className="flex flex-wrap items-center"
      id="info-block-container"
      style={{ maxWidth: `${initialContainerWidth}px` }}
    >
      {visibleImages.map((img, index) => (
        <div
          className="w-[48px] h-[48px] rounded-[360px] inline-flex"
          key={index}
          style={{
            marginRight:
              index < visibleImages.length - 1 ? `${imageMargin}px` : 0,
          }}
        >
          <Image
            src={`/images/${img}.png`}
            alt={`team-member-${index}`}
            width={48}
            height={48}
          />
        </div>
      ))}
      {remainingImagesCount > 0 && (
        <TextAtom
          type={TextAtomEnum.enum_subtitle_1}
          className="text-text_primary ml-2"
        >
          +{remainingImagesCount}
        </TextAtom>
      )}
    </div>
  );
};

export default React.memo(ImagesTeamBlock);
