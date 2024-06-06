// type.ts
export interface TTeam {
  id: number;
  first_name: number;
  middle_name: string;
  last_name: string[];
  birth_date: number;
  hire_date: string;
  country: string;
  city: string;
  salary: string;
  weekly_salary: string;
  account_number: number;
  department: string;
  level: string;
  position: string;
  supervisor: number;
  img: string;
}
export interface TContacts {
  id: number;
  team_id: number;
  phone_number: string;
  telegram: string;
  slack: string;
  email: string;
}

export interface TLeaves {
  id: number;
  team_id: number | string;
  leave_type: string;
  days_count: number;
  start_date: string;
  end_date: string;
}

export interface TEquipment {
  id: number;
  team_id: number;
  equipment_name: string;
  status: string;
}

export interface QueryStore {
  products: TTeam[];
}

export interface ContactsQueryStore {
  contacts: TContacts[];
}

export interface LeavesQueryStore {
  leaves: TLeaves[];
}

export interface EquipmentQueryStore {
  equipment: [];
}
