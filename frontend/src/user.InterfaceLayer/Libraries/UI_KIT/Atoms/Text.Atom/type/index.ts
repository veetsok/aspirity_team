import { ICommonComponentProps } from "@/user.InterfaceLayer/constants/commonComponentProps/type";
import TextAtomEnum from "../enum";

export interface TextAtomProps {
  type: TextAtomEnum;
  children?: ICommonComponentProps["children"];
  isLoading?: ICommonComponentProps["isLoading"];
  className?: string;
}
