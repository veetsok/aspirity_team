import { ICommonComponentProps } from "@/user.InterfaceLayer/constants/commonComponentProps/type";
import ButtonAtomEnum from "../enum";
import { CSSProperties } from "react";

export interface ButtonAtomProps {
  type: ButtonAtomEnum;
  children?: ICommonComponentProps["children"];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isLoading?: ICommonComponentProps["isLoading"];
  className?: string;
  disabled?: boolean | undefined;
  style?: CSSProperties | undefined;
  isActive?: boolean;
}
