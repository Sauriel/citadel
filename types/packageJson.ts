export declare type PackageJSON = {
  name: string;
  private?: boolean;
  scripts: Record<string, string>;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
}