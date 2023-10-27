export declare type RunnerStatus = 'running' | 'stopped' | 'error';

export declare type SidebarProjectEntry = {
  hash: string;
  status: RunnerStatus;
  name: string;
}