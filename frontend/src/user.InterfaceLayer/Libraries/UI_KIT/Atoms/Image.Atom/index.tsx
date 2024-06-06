import React from "react";
import ImageEnum from "./enum";
import { IImagePropsDefault } from "./mock";
import { ImageType } from "./type";
import SkeletonAtom from "../Skeleton.Atom";

const Image: React.FC<ImageType> = (props) => {
  const { type, icon, isLoading, onClick, className } = props;

  if (isLoading) return <SkeletonAtom />;

  switch (type) {
    case ImageEnum.enum_defaultSvg: {
      return (
        <div
          className={`${className} [&>svg]:max-w-full`}
          onClick={(e) => {
            e.stopPropagation();
            onClick?.(e);
          }}
        >
          {icon}
        </div>
      );
    }

    default: {
      return <div className="text-red">Ошибка</div>;
    }
  }
};

Image.defaultProps = IImagePropsDefault;
export default React.memo(Image);
