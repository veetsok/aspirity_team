import TextAtomEnum from "../enum";

const TextAtomMock = {
  children: "Demo",
  className: "",
  type: TextAtomEnum.enum_h3,
};

export default TextAtomMock;

export const ITextAtomPropsDefault = {
  children: TextAtomMock.children,
  className: TextAtomMock.className,
  type: TextAtomMock.type,
};
