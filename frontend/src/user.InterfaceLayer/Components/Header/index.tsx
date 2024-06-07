import React from "react";
import Link from "next/link";
import ImageAtom from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Image.Atom";
import ImageEnum from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Image.Atom/enum";
import LogoIcon from "@/user.InterfaceLayer/Libraries/shared/icons/logo.svg?react";
import ButtonAtom from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.Atom";
import ButtonAtomEnum from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.Atom/enum";
import {
  globalContainer,
  globalFlex,
} from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import Image from "next/image";
import UnionIcon from "@/user.InterfaceLayer/Libraries/shared/icons/arrow_down.svg?react";
import BurgerIcon from "@/user.InterfaceLayer/Libraries/shared/icons/burger.svg?react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={`${globalContainer} ${globalFlex} py-6 md:mx-4`}>
      <Link href={"/"} className="max-w-[180px] sm:max-w-[135px]">
        <ImageAtom
          className="w-[180px] sm:w-[135px]"
          type={ImageEnum.enum_defaultSvg}
          icon={<LogoIcon />}
        />
      </Link>

      <div className="flex gap-2 items-center">
        <ButtonAtom
          type={ButtonAtomEnum.enum_defaultButton}
          className="md:hidden"
        >
          Создать счет
        </ButtonAtom>
        <ButtonAtom
          type={ButtonAtomEnum.enum_defaultButton}
          className="md:hidden"
        >
          Корзина
        </ButtonAtom>
        <div className="flex items-center py-[6px] px-[16px] rounded-[18px] border-[1px] border-border_primary gap-2 [&>div>svg]:fill-text_primary">
          <div className="w-[24px] h-[24px] rounded-[100%] inline-flex">
            <Image
              src={`/images/avatar.png`}
              alt={`avatar2`}
              width={24}
              height={24}
            />
          </div>
          <ImageAtom
            type={ImageEnum.enum_defaultSvg}
            className="[&>div>svg]:fill-text_primary deep w-[14px] h-2"
            icon={<UnionIcon />}
          />
        </div>
        <ImageAtom
          type={ImageEnum.enum_defaultSvg}
          className="[&>svg]:fill-text_primary deep"
          icon={<BurgerIcon />}
        />
      </div>
    </header>
  );
};
export default React.memo(Header);
