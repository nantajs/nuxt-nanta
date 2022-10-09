export declare type Nullable<T> = T | null;

export interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}

export declare type EmitType = (event: string, ...args: any[]) => void;

export declare type Recordable<T = any> = Record<string, T>;

export declare type PropType<T> = VuePropType<T>;

export declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}