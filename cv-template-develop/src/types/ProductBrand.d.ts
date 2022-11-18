import { AnyARecord } from 'dns';

export interface ProductBrand extends ReposListForksResponseItem {
  forks: number;
  open_issues: number;
  watchers: number;
  data: any;
}

export interface ProductBrandData {
  brandName?: any;
  metaTagTitle?: string;
  metaTagDescription?: string;
  metaTagKeyword?: string;
  isActive?: boolean;
}
