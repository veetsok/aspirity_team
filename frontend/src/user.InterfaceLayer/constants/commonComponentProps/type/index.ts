import { ReactNode } from "react";

export enum CommonComponentsProps {
  onClick = "onClick",
  children = "children",
  checked = "checked",
  isLoading = "isLoading",
  icon = "icon",
  className = "className",
}

export interface ICommonComponentProps {
  [CommonComponentsProps.onClick]?: (event: React.MouseEvent<HTMLDivElement>) => void;
  [CommonComponentsProps.children]?: JSX.Element | ReactNode;
  [CommonComponentsProps.checked]?: boolean;
  [CommonComponentsProps.isLoading]?: boolean;
  [CommonComponentsProps.icon]?: JSX.Element | ReactNode;
  [CommonComponentsProps.className]?: string;
}
