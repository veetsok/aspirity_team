import React from "react";
import TextAtom from "../../UI_KIT/Atoms/Text.Atom";
import { globalBgBlock } from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import TextAtomEnum from "../../UI_KIT/Atoms/Text.Atom/enum";
import ButtonAtom from "../../UI_KIT/Atoms/Button.Atom";
import ButtonAtomEnum from "../../UI_KIT/Atoms/Button.Atom/enum";
import Image from "next/image";
import { TTeam } from "@/business.InterfaceLayer/type";
import Link from "next/link";
import ImageAtom from "../../UI_KIT/Atoms/Image.Atom";
import ImageEnum from "../../UI_KIT/Atoms/Image.Atom/enum";
import ArrowRight from "../../shared/icons/arrowBlue.svg?react";

interface InfoBlockProps {
  supervisor: TTeam | null;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ supervisor }) => {
  return (
    <div className={`${globalBgBlock} gap-10 w-[45.12%] lg:w-full h-fit`}>
      <div className="flex items-center justify-between">
        <TextAtom type={TextAtomEnum.enum_h5} className="text-text_primary">
          Загрузка сотрудника
        </TextAtom>
        <TextAtom type={TextAtomEnum.enum_h6} className="text-[#d77556]">
          100%
        </TextAtom>
      </div>
      <div className="flex gap-[124px] md:flex-col md:gap-4">
        <div className="flex flex-col gap-2">
          <TextAtom
            type={TextAtomEnum.enum_subtitle_1}
            className="text-text_tertiary"
          >
            Название проекта
          </TextAtom>
          <TextAtom
            type={TextAtomEnum.enum_subtitle_1}
            className="text-text_primary"
          >
            MedPoint 24
          </TextAtom>
        </div>
        <div className="flex flex-col gap-2">
          <TextAtom
            type={TextAtomEnum.enum_subtitle_1}
            className="text-text_tertiary"
          >
            Тип проекта
          </TextAtom>
          <TextAtom
            type={TextAtomEnum.enum_subtitle_1}
            className="text-text_primary"
          >
            Коммерческий
          </TextAtom>
        </div>
      </div>
      <div className="flex gap-[78px]">
        <div className="flex flex-col gap-2">
          <TextAtom
            type={TextAtomEnum.enum_subtitle_1}
            className="text-text_tertiary"
          >
            Ответственный
          </TextAtom>
          <div className="flex items-center">
            {supervisor && (
              <Link href={`/profile/${supervisor.id}`}>
                <div className="flex gap-2 items-center">
                  <div className="w-[48px] h-[48px] rounded-[360px] inline-flex">
                    <Image
                      src={`/images/${supervisor.img}.png`}
                      alt={`${supervisor.id}`}
                      width={48}
                      height={48}
                    />
                  </div>
                  <TextAtom
                    type={TextAtomEnum.enum_subtitle_1}
                    className="text-text_primary"
                  >
                    {`${supervisor.first_name} ${supervisor.last_name}`}
                  </TextAtom>
                </div>
              </Link>
            )}
            {!supervisor && (
              <TextAtom
                type={TextAtomEnum.enum_subtitle_1}
                className="text-text_primary"
              >
                —
              </TextAtom>
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-[124px]">
        <div className="flex flex-col gap-2">
          <TextAtom
            type={TextAtomEnum.enum_subtitle_1}
            className="text-text_tertiary"
          >
            Сроки работы
          </TextAtom>
          <div className="flex items-center gap-2">
            <TextAtom
              type={TextAtomEnum.enum_subtitle_1}
              className="text-text_primary"
            >
              03 марта 2023
            </TextAtom>
            <ImageAtom
              type={ImageEnum.enum_defaultSvg}
              className="[&>svg]:fill-bg_accent deep"
              icon={<ArrowRight />}
            />
            <TextAtom
              type={TextAtomEnum.enum_subtitle_1}
              className="text-text_primary"
            >
              23 марта 2023
            </TextAtom>
          </div>
        </div>
      </div>
      <ButtonAtom type={ButtonAtomEnum.enum_defaultButton}>
        Посмотреть всю загрузку
      </ButtonAtom>
    </div>
  );
};

export default React.memo(InfoBlock);
