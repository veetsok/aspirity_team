import { useProducts } from "@/business.InterfaceLayer/hooks/useProducts";
import TextAtom from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.Atom";
import TextAtomEnum from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.Atom/enum";
import UsersOrganisms from "@/user.InterfaceLayer/Libraries/UI_KIT/Organisms/Users.Organisms";
import Spinner from "@/user.InterfaceLayer/Libraries/UI_KIT/Spinner";
import { globalContainer } from "@/user.InterfaceLayer/constants/styles/CommonStyles";

export default function Home() {
  const { products: team, isLoading } = useProducts();

  if (isLoading) return <Spinner />;

  return (
    <main className={`${globalContainer} text-text_primary`}>
      <TextAtom type={TextAtomEnum.enum_h4} className="text-text_primary">
        Команда
      </TextAtom>
      <div className="flex flex-col gap-[18px] mt-[40px]">
        <UsersOrganisms items={team} />
      </div>
    </main>
  );
}
