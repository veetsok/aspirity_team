import React from "react";
import TextAtom from "../../Atoms/Text.Atom";
import TextAtomEnum from "../../Atoms/Text.Atom/enum";
import { TableBlockProps } from "./type";

const TableBlock: React.FC<TableBlockProps> = (props) => {
  const { title, subtitle, lengthItems, thead, tbody, tbodyStyle } = props;

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <TextAtom type={TextAtomEnum.enum_h5} className="text-text_primary">
            {title}
          </TextAtom>
          {lengthItems && (
            <TextAtom
              type={TextAtomEnum.enum_h5}
              className="text-text_tertiary"
            >
              {lengthItems}
            </TextAtom>
          )}
        </div>
        <TextAtom
          type={TextAtomEnum.enum_subtitle_2}
          className="text-text_tertiary"
        >
          {subtitle}
        </TextAtom>
      </div>

      {/* Стандартная таблица для десктопов */}
      <div className="flex flex-col text-left md:hidden">
        <div className="thead2 py-2 text-text_tertiary">
          <table className="w-full table-fixed">
            {thead?.map((head, index) => (
              <th
                key={index}
                className={`w-[${100 / thead?.length}%] last-child-right`}
              >
                <TextAtom
                  type={TextAtomEnum.enum_subtitle_1}
                  className="px-2 py-4"
                >
                  {head}
                </TextAtom>
              </th>
            ))}
          </table>
        </div>
        <div className="thead2 text-text_primary">
          <table className="w-full table-fixed">
            {tbody?.map((row, rowIndex) => (
              <tbody
                key={rowIndex}
                className="border-t-[1px] border-border_primary"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`h-[56px] px-2 w-[${100 / row.length}%] ${
                      cellIndex === row.length - 1 ? "last-child-right" : ""
                    }`}
                  >
                    <TextAtom
                      type={TextAtomEnum.enum_subtitle_1}
                      className={`w-fit ${
                        tbodyStyle ? tbodyStyle(cell, cellIndex) : ""
                      }`}
                    >
                      {cell}
                    </TextAtom>
                  </td>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      </div>
      <div className="hidden md:block">
        {tbody?.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="border-b-[1px] last:border-b-[0] border-border_primary last:pb-0 last:mb-0 pb-4 mb-4 flex flex-col gap-4"
          >
            {row.map((cell, cellIndex) => (
              <div key={cellIndex} className="flex flex-col">
                <TextAtom
                  type={TextAtomEnum.enum_subtitle_1}
                  className="text-text_tertiary"
                >
                  {thead?.[cellIndex]}:
                </TextAtom>
                <TextAtom
                  type={TextAtomEnum.enum_subtitle_1}
                  className="text-text_primary"
                >
                  {cell}
                </TextAtom>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default React.memo(TableBlock);
