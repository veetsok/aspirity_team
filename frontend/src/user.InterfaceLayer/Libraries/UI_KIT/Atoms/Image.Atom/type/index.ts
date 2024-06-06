import { ICommonComponentProps } from "@/user.InterfaceLayer/constants/commonComponentProps/type";
import ImageEnum from "../enum";

export interface ImageType extends ICommonComponentProps {
  type: ImageEnum;
  isLoading?: ICommonComponentProps["isLoading"];
  children?: ICommonComponentProps["children"];
  icon?: ICommonComponentProps["icon"];
  onClick?: ICommonComponentProps["onClick"];
  className?: ICommonComponentProps["className"];
}
