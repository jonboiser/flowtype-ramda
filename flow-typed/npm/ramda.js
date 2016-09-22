declare module ramda {

  // common function types
  declare type UnaryFn<T1, R> = (t1: T1) => R;
  declare type UnaryFnSame<T> = UnaryFn<T, T>;
  declare type UnaryFnSameList<T> = UnaryFn<T[], T>;

  declare type CurriedFn2<T1, T2, R> =
  & ((t1: T1, t2: T2) => R)
  & ((t1: T1) => UnaryFn<T2, R>)

  declare type CurriedFn2Same<T> = CurriedFn2<T, T, T>

  // math
  declare var add: CurriedFn2Same<number>;
  declare var dec: UnaryFnSame<number>;
  declare var divide: CurriedFn2Same<number>;
  declare var inc: UnaryFnSame<number>;
  declare var mathMod: CurriedFn2Same<number>;
  declare var mean: UnaryFnSameList<number>;
  declare var median: UnaryFnSameList<number>;
  declare var modulo: CurriedFn2Same<number>;
  declare var multiply: CurriedFn2Same<number>;
  declare var negate: UnaryFnSame<number>;
  declare var product: UnaryFnSameList<number>;
  declare var subtract: CurriedFn2Same<number>;
  declare var sum: UnaryFnSameList<number>;

  // logic
  declare var allPass: UnaryFn<Array<(x: any) => boolean>, boolean>;
  declare function and<T1, T2>(t1: T1, ...rest: Array<void>): (t2: T2) => T1 | T2;
  declare function and<T1, T2>(t1: T1, t2: T2, ...rest: Array<void>): T1 | T2
}
