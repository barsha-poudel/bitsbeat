/* --- STATE --- */
export interface CVselectorState {
  loading: boolean;
  success: boolean;
  error: any;
  data: any;
  requestData: any;
}

export type ContainerState = CVselectorState;
