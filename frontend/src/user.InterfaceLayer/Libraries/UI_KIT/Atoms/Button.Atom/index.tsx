import React from "react";
import { IButtonAtomPropsDefault } from "./mock";
import ButtonAtomEnum from "./enum";
import { ButtonAtomProps } from "./type";
import SkeletonAtom from "../Skeleton.Atom";

const ButtonAtom: React.FC<ButtonAtomProps> = (props) => {
  const {
    children,
    className,
    isActive,
    onClick,
    type,
    isLoading,
    disabled,
    style,
  } = props;

  if (isLoading) {
    return <SkeletonAtom />;
  }

  switch (type) {
    case ButtonAtomEnum.enum_defaultButton: {
      return (
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onClick?.(e);
          }}
          style={style}
          disabled={disabled}
          className={`${className} flex cursor-pointer text-[14px] font-semibold leading-[143%] uppercase text-text_primary bg-bg_accent py-[10px] px-4 rounded`}
        >
          {children}
        </button>
      );
    }
    case ButtonAtomEnum.enum_tabButton: {
      return (
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onClick?.(e);
          }}
          style={style}
          disabled={disabled}
          className={`${className} border-solid border-0 border-b-[1px] inline-block cursor-pointer text-[14px] font-bold leading-[143%] uppercase py-[10px] px-4 ${
            isActive
              ? "border-text_accent border-b-2 text-text_primary"
              : "border-border_primary text-text_secondary"
          }`}
        >
          {children}
        </button>
      );
    }
    case ButtonAtomEnum.enum_textButton: {
      return (
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onClick?.(e);
          }}
          style={style}
          disabled={disabled}
          className={`${className} inline-block cursor-pointer text-[14px] font-medium leading-[171%] text-text_tertiary ${
            isActive
              ? "border-text_accent border-b-2 text-text_primary"
              : "border-border_primary text-text_secondary"
          }`}
        >
          {children}
        </button>
      );
    }
    default: {
      return (
        <button className="text-text_error rounded-md w-full py-3">
          Ошибка
        </button>
      );
    }
  }
};

ButtonAtom.defaultProps = IButtonAtomPropsDefault;
export default React.memo(ButtonAtom);
