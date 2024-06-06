import { TContacts, TTeam } from "@/business.InterfaceLayer/type";

export interface MainLayoutProps {
  user: TTeam | null;
  supervisor: TTeam | null;
  contacts: TContacts[];
}
