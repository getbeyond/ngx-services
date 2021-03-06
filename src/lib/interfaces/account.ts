export interface Account {
  id: number;
  client_id: number;
  brand: string;
  company_name: string;
  display_name: string;
  owned_by: number;
  logo: string;
  logo_big: string;
  address1: string;
  address2: string;
  country: string;
  country_id: number;
  city: string;
  state: string;
  state_id: number;
  zip: string;
  phone: string;
  business_type: string;
  locale: string;
  locations: number;
  week_start_time: string;
  week_start_day: number;
  is_self_service: boolean;
  is_admin: boolean;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  is_demo: boolean;
}
