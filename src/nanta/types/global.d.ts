export type Nullable<T> = T | null;

export interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}

export type EmitType = (event: string, ...args: any[]) => void;

export type Recordable<T = any> = Record<string, T>;
