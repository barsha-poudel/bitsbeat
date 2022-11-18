import { AnyARecord } from 'dns';

export interface Users extends ReposListForksResponseItem {
  forks: number;
  open_issues: number;
  watchers: number;
  data: any;
}

export interface UsersData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: number;
  role: any;
  password: string;
  confirmPassword: string;
  isActive: boolean;
}
