type Primitive = string | number | boolean | bigint | symbol | null | undefined | Date;

export type NestedKeyOf<T> = T extends Primitive
    ? never
    : T extends readonly unknown[]
      ? never
      : {
            [K in keyof T & string]: T[K] extends Primitive | readonly unknown[] ? K : K | `${K}.${NestedKeyOf<T[K]>}`;
        }[keyof T & string];
