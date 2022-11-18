import { AnyARecord } from 'dns';

export interface ProductCategory extends ReposListForksResponseItem {
  forks: number;
  open_issues: number;
  watchers: number;
  data: any;
}

export interface ProductCategoryData {
  categoryName?: string;
  brand?: any;
  metaTagTitle?: string;
  metaTagDescription?: string;
  metaTagKeyword?: string;
  isActive?: boolean;
}
