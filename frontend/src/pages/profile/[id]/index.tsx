import { useMemo, useState } from "react";
import { useRouter } from "next/router";
import TextAtom from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.Atom";
import TextAtomEnum from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.Atom/enum";
import {
  globalBgBlock,
  globalContainer,
} from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import MainLayout from "@/user.InterfaceLayer/Libraries/Layouts/Main.layout";
import ButtonAtom from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.Atom";
import ButtonAtomEnum from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.Atom/enum";
import EquipmentWidget from "@/user.InterfaceLayer/Libraries/Widgets/Equipment.widget";
import { useProducts } from "@/business.InterfaceLayer/hooks/useProducts";
import { TTeam } from "@/business.InterfaceLayer/type";
import Image from "next/image";
import { useContacts } from "@/business.InterfaceLayer/hooks/useContacts";
import VacationWidget from "@/user.InterfaceLayer/Libraries/Widgets/Vacation.widget";
import ImageAtom from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Image.Atom";
import ImageEnum from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Image.Atom/enum";
import UnionIcon from "@/user.InterfaceLayer/Libraries/shared/icons/arrow_down.svg?react";
import Link from "next/link";
import Spinner from "@/user.InterfaceLayer/Libraries/UI_KIT/Spinner";

export default function Id() {
  const router = useRouter();
  const { id } = router.query;
  const { products: team, isLoading } = useProducts();
  const { contacts: teamContacts } = useContacts();
  const [selectedSection, setSelectedSection] = useState("main");

  const user: TTeam | null = useMemo(() => {
    if (!id || !team) return null;
    return team.reduce((foundMember: TTeam | null, member: TTeam) => {
      if (member.id === Number(id)) {
        foundMember = member;
      }
      return foundMember;
    }, null);
  }, [id, team]);

  const supervisor: TTeam = useMemo(() => {
    if (!user || !user.supervisor) return null;

    const supervisorId = user.supervisor;
    return team.reduce((supervisor: TTeam | null, member: TTeam) => {
      if (member.id === supervisorId) {
        supervisor = member;
      }
      return supervisor;
    }, null);
  }, [user, team]);

  const renderSection = () => {
    switch (selectedSection) {
      case "main":
        return (
          <MainLayout
            user={user}
            supervisor={supervisor}
            contacts={teamContacts}
          />
        );
      case "vacation":
        return <VacationWidget teamId={parseInt(id as string)} />;
      case "equipment":
        return <EquipmentWidget teamId={parseInt(id as string)} />;
      default:
        return (
          <MainLayout
            user={user}
            supervisor={supervisor}
            contacts={teamContacts}
          />
        );
    }
  };

  if (!user) {
    return (
      <main className={`${globalContainer}`}>
        <div className={`${globalBgBlock} p-[40px 40px 20px 40px]`}>
          <TextAtom type={TextAtomEnum.enum_h4} className="text-text_primary">
            Пользователь не найден
          </TextAtom>
        </div>
      </main>
    );
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main className={`${globalContainer}`}>
      <Link
        href={"/"}
        className="my-2 flex items-center gap-4 text-text_tertiary py-[13px] pr-[16px] pl-[24px] w-fit"
      >
        <ImageAtom
          type={ImageEnum.enum_defaultSvg}
          className="rotate-90 w-[14px] h-2 [&>svg]:fill-text_tertiary"
          icon={<UnionIcon />}
        />
        <TextAtom
          type={TextAtomEnum.enum_h6}
          className="!text-[14px] uppercase font-bold"
        >
          Вернуться к сотрудникам
        </TextAtom>
      </Link>
      <div
        className={`${globalBgBlock} p-[40px 40px 20px 40px] gap-[56px] md:gap-6`}
      >
        <div className="flex gap-[48px] text-text_primary md:flex-col md:items-center md:gap-[16px] gap-6">
          <div className="w-[160px] h-[160px] rounded-[360px] inline-flex">
            <Image
              src={`/images/${user.img}.png`}
              alt={`${user.id}`}
              width={160}
              height={160}
            />
          </div>
          <div className="flex flex-col gap-4 max-w-[475px] md:items-center">
            <TextAtom
              type={TextAtomEnum.enum_h3}
              className="md:text-[24px] md:max-w-[70%] md:text-center"
            >
              {user.last_name} {user.first_name} {user.middle_name}
            </TextAtom>
            <div className="flex gap-4 flex-col md:text-center md:gap-6">
              <TextAtom type={TextAtomEnum.enum_subtitle_1}>
                {user.level} {user.position}
              </TextAtom>
              <div className="flex gap-2 items-center">
                <TextAtom type={TextAtomEnum.enum_subtitle_1}>
                  {user.country} {user.city}
                </TextAtom>
                <TextAtom
                  type={TextAtomEnum.enum_subtitle_1}
                  className="text-text_tertiary"
                >
                  •
                </TextAtom>
                <TextAtom
                  type={TextAtomEnum.enum_subtitle_1}
                  className="text-text_tertiary"
                >
                  14:03
                </TextAtom>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:overflow-x-auto md:whitespace-nowrap md:snap-x">
          <ButtonAtom
            type={ButtonAtomEnum.enum_tabButton}
            isActive={selectedSection === "main"}
            onClick={() => setSelectedSection("main")}
          >
            Основная информация
          </ButtonAtom>
          <ButtonAtom
            type={ButtonAtomEnum.enum_tabButton}
            isActive={selectedSection === "vacation"}
            onClick={() => setSelectedSection("vacation")}
          >
            Отпуск
          </ButtonAtom>
          <ButtonAtom
            type={ButtonAtomEnum.enum_tabButton}
            isActive={selectedSection === "equipment"}
            onClick={() => setSelectedSection("equipment")}
          >
            Оборудование
          </ButtonAtom>
        </div>
      </div>
      <div className="my-4 min-h-screen">{renderSection()}</div>
    </main>
  );
}
