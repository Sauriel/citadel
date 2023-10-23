export declare type RunnerStatus = 'running' | 'stopped' | 'error';

export declare type SidebarProjectEntry = {
  status: RunnerStatus;
  name: string;
}