import { AnyARecord } from 'dns';

export interface Repo extends ReposListForksResponseItem {
  forks: number;
  open_issues: number;
  watchers: number;
  data: any;
}
