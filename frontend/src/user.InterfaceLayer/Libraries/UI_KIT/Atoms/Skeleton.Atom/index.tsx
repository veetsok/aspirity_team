import React from "react";
import skeleton from "./styled/skeleton.module.css";

const ISkeletonAtomPropsDefault = {
  className: "",
};

interface SkeletonAtomProps {
  className?: string;
}

const SkeletonAtom: React.FC<SkeletonAtomProps> = (props) => {
  const { className } = props;

  return (
    <div
      className={`${className} w-full p-3 rounded-md h-full relative shadow-[0_2px_10px_0_borderColor] overflow-hidden ${skeleton.skeletonShimmer}`}
    ></div>
  );
};

SkeletonAtom.defaultProps = ISkeletonAtomPropsDefault;
export default React.memo(SkeletonAtom);
