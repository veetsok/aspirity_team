import React from "react";
import { globalBgBlock } from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import TextAtom from "../../UI_KIT/Atoms/Text.Atom";
import TextAtomEnum from "../../UI_KIT/Atoms/Text.Atom/enum";
import ImageAtom from "../../UI_KIT/Atoms/Image.Atom";
import ImageEnum from "../../UI_KIT/Atoms/Image.Atom/enum";
import Image from "next/image";
import UnionIcon from "../../shared/icons/union.svg?react";
import BadgeGreen from "../../shared/icons/badge_green.svg?react";
import BadgeYellow from "../../shared/icons/badgered_yellow.svg?react";
import BadgeRed from "../../shared/icons/badge_red.svg?react";

interface StatsBlockProps {}

const StatsBlock: React.FC<StatsBlockProps> = () => {
  const items = [
    { label: "Доступно сейчас", length: "32 дня", iconStyle: <BadgeGreen /> },
    { label: "Запланировано", length: "8 дня", iconStyle: <BadgeYellow /> },
    {
      label: "Использовано/недоступно",
      length: "4 дня",
      iconStyle: <BadgeRed />,
    },
  ];

  return (
    <div className={`${globalBgBlock} w-[35%] lg:w-full gap-4`}>
      <div className="flex items-center gap-2">
        <TextAtom
          type={TextAtomEnum.enum_h5}
          className="leading-[133%] text-text_secondary"
        >
          Статистика
        </TextAtom>
        <ImageAtom
          type={ImageEnum.enum_defaultSvg}
          className="[&>svg]:fill-text_secondary deep inline-flex"
          icon={<UnionIcon />}
        />
      </div>
      <div className="flex justify-center">
        <div className="w-[160px] h-[160px] rounded-[360px] inline-flex">
          <Image
            src={`/images/diagram.png`}
            alt={`diagram`}
            width={160}
            height={160}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {items?.map((e, index) => (
          <div
            key={index}
            className="flex items-center gap-2 justify-between rounded-[16px] border-[1px] border-border_primary py-3 px-[10px]"
          >
            <div className="flex items-center gap-2">
              <ImageAtom type={ImageEnum.enum_defaultSvg} icon={e.iconStyle} />
              <TextAtom
                type={TextAtomEnum.enum_subtitle_1}
                className="text-text_primary !font-normal"
              >
                {e.label}
              </TextAtom>
            </div>
            <TextAtom
              type={TextAtomEnum.enum_subtitle_1}
              className="text-text_primary !font-normal"
            >
              {e.length}
            </TextAtom>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(StatsBlock);
