import Image from "next/image";
import Link from "next/link";
import React from "react";
import TextAtom from "../../Atoms/Text.Atom";
import TextAtomEnum from "../../Atoms/Text.Atom/enum";
import { UsersBlockProps } from "./type";

const UsersBlock: React.FC<UsersBlockProps> = ({ items }) => {
  return (
    <>
      {items?.map((e, index: number) => (
        <Link href={`/profile/${e.id}`} key={index} className="w-fit">
          <div className="flex gap-[8px]">
            <div className="w-[48px] h-[48px] rounded-[160px]">
              <Image
                src={`/images/${e.img}.png`}
                alt={`${e.first_name}`}
                width={160}
                height={160}
              />
            </div>
            <div className="flex flex-col">
              <TextAtom type={TextAtomEnum.enum_subtitle_2}>
                {e.first_name} {e.last_name}
              </TextAtom>
              <TextAtom
                type={TextAtomEnum.enum_subtitle_2}
                className="text-text_secondary"
              >
                {e.level} {e.position}
              </TextAtom>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default React.memo(UsersBlock);
