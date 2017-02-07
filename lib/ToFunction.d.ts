export declare type Function0<Result> = () => Result;
export declare type ToFunction0<Result> = (() => Result) | Result;
export declare function toFunction0<Result>(toFunc: ToFunction0<Result>): Function0<Result>;
export declare type AsyncFunction0<Result> = () => Promise<Result>;
export declare type ToAsyncFunction0<Result> = ToFunction0<Promise<Result> | Result>;
export declare function toAsyncFunction0<Result>(toFunc: ToAsyncFunction0<Result>): AsyncFunction0<Result>;
export declare type Function1<Arg0, Result> = (arg0: Arg0) => Result;
export declare type ToFunction1<Arg0, Result> = ((arg0: Arg0) => Result) | Result;
export declare function toFunction1<Arg0, Result>(toFunc: ToFunction1<Arg0, Result>): Function1<Arg0, Result>;
export declare type AsyncFunction1<Arg0, Result> = (arg0: Arg0) => Promise<Result>;
export declare type ToAsyncFunction1<Arg0, Result> = ToFunction1<Arg0, Promise<Result> | Result>;
export declare function toAsyncFunction1<Arg0, Result>(toFunc: ToAsyncFunction1<Arg0, Result>): AsyncFunction1<Arg0, Result>;
export declare type Function2<Arg0, Arg1, Result> = (arg0: Arg0, arg1: Arg1) => Result;
export declare type ToFunction2<Arg0, Arg1, Result> = ((arg0: Arg0, arg1: Arg1) => Result) | Result;
export declare function toFunction2<Arg0, Arg1, Result>(toFunc: ToFunction2<Arg0, Arg1, Result>): Function2<Arg0, Arg1, Result>;
export declare type AsyncFunction2<Arg0, Arg1, Result> = (arg0: Arg0, arg1: Arg1) => Promise<Result>;
export declare type ToAsyncFunction2<Arg0, Arg1, Result> = ToFunction2<Arg0, Arg1, Promise<Result> | Result>;
export declare function toAsyncFunction2<Arg0, Arg1, Result>(toFunc: ToAsyncFunction2<Arg0, Arg1, Result>): AsyncFunction2<Arg0, Arg1, Result>;
export declare type Function3<Arg0, Arg1, Arg2, Result> = (arg0: Arg0, arg1: Arg1, arg2: Arg2) => Result;
export declare type ToFunction3<Arg0, Arg1, Arg2, Result> = ((arg0: Arg0, arg1: Arg1, arg2: Arg2) => Result) | Result;
export declare function toFunction3<Arg0, Arg1, Arg2, Result>(toFunc: ToFunction3<Arg0, Arg1, Arg2, Result>): Function3<Arg0, Arg1, Arg2, Result>;
export declare type AsyncFunction3<Arg0, Arg1, Arg2, Result> = (arg0: Arg0, arg1: Arg1, arg2: Arg2) => Promise<Result>;
export declare type ToAsyncFunction3<Arg0, Arg1, Arg2, Result> = ToFunction3<Arg0, Arg1, Arg2, Promise<Result> | Result>;
export declare function toAsyncFunction3<Arg0, Arg1, Arg2, Result>(toFunc: ToAsyncFunction3<Arg0, Arg1, Arg2, Result>): AsyncFunction3<Arg0, Arg1, Arg2, Result>;
export declare type Function4<Arg0, Arg1, Arg2, Arg3, Result> = (arg0: Arg0, arg1: Arg1, arg2: Arg2, arg3: Arg3) => Result;
export declare type ToFunction4<Arg0, Arg1, Arg2, Arg3, Result> = ((arg0: Arg0, arg1: Arg1, arg2: Arg2, arg3: Arg3) => Result) | Result;
export declare function toFunction4<Arg0, Arg1, Arg2, Arg3, Result>(toFunc: ToFunction4<Arg0, Arg1, Arg2, Arg3, Result>): Function4<Arg0, Arg1, Arg2, Arg3, Result>;
export declare type AsyncFunction4<Arg0, Arg1, Arg2, Arg3, Result> = (arg0: Arg0, arg1: Arg1, arg2: Arg2, arg3: Arg3) => Promise<Result>;
export declare type ToAsyncFunction4<Arg0, Arg1, Arg2, Arg3, Result> = ToFunction4<Arg0, Arg1, Arg2, Arg3, Promise<Result> | Result>;
export declare function toAsyncFunction4<Arg0, Arg1, Arg2, Arg3, Result>(toFunc: ToAsyncFunction4<Arg0, Arg1, Arg2, Arg3, Result>): AsyncFunction4<Arg0, Arg1, Arg2, Arg3, Result>;
export declare type Function5<Arg0, Arg1, Arg2, Arg3, Arg4, Result> = (arg0: Arg0, arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4) => Result;
export declare type ToFunction5<Arg0, Arg1, Arg2, Arg3, Arg4, Result> = ((arg0: Arg0, arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4) => Result) | Result;
export declare function toFunction5<Arg0, Arg1, Arg2, Arg3, Arg4, Result>(toFunc: ToFunction5<Arg0, Arg1, Arg2, Arg3, Arg4, Result>): Function5<Arg0, Arg1, Arg2, Arg3, Arg4, Result>;
export declare type AsyncFunction5<Arg0, Arg1, Arg2, Arg3, Arg4, Result> = (arg0: Arg0, arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4) => Promise<Result>;
export declare type ToAsyncFunction5<Arg0, Arg1, Arg2, Arg3, Arg4, Result> = ToFunction5<Arg0, Arg1, Arg2, Arg3, Arg4, Promise<Result> | Result>;
export declare function toAsyncFunction5<Arg0, Arg1, Arg2, Arg3, Arg4, Result>(toFunc: ToAsyncFunction5<Arg0, Arg1, Arg2, Arg3, Arg4, Result>): AsyncFunction5<Arg0, Arg1, Arg2, Arg3, Arg4, Result>;
export declare type Function6<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Result> = (arg0: Arg0, arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5) => Result;
export declare type ToFunction6<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Result> = ((arg0: Arg0, arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5) => Result) | Result;
export declare function toFunction6<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Result>(toFunc: ToFunction6<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Result>): Function6<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Result>;
export declare type AsyncFunction6<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Result> = (arg0: Arg0, arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5) => Promise<Result>;
export declare type ToAsyncFunction6<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Result> = ToFunction6<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Promise<Result> | Result>;
export declare function toAsyncFunction6<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Result>(toFunc: ToAsyncFunction6<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Result>): AsyncFunction6<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Result>;
export declare type Function7<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Result> = (arg0: Arg0, arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5, arg6: Arg6) => Result;
export declare type ToFunction7<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Result> = ((arg0: Arg0, arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5, arg6: Arg6) => Result) | Result;
export declare function toFunction7<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Result>(toFunc: ToFunction7<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Result>): Function7<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Result>;
export declare type AsyncFunction7<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Result> = (arg0: Arg0, arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5, arg6: Arg6) => Promise<Result>;
export declare type ToAsyncFunction7<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Result> = ToFunction7<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Promise<Result> | Result>;
export declare function toAsyncFunction7<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Result>(toFunc: ToAsyncFunction7<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Result>): AsyncFunction7<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Result>;
export declare type Function8<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Result> = (arg0: Arg0, arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5, arg6: Arg6, arg7: Arg7) => Result;
export declare type ToFunction8<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Result> = ((arg0: Arg0, arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5, arg6: Arg6, arg7: Arg7) => Result) | Result;
export declare function toFunction8<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Result>(toFunc: ToFunction8<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Result>): Function8<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Result>;
export declare type AsyncFunction8<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Result> = (arg0: Arg0, arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5, arg6: Arg6, arg7: Arg7) => Promise<Result>;
export declare type ToAsyncFunction8<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Result> = ToFunction8<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Promise<Result> | Result>;
export declare function toAsyncFunction8<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Result>(toFunc: ToAsyncFunction8<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Result>): AsyncFunction8<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Result>;
export declare type Function9<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Result> = (arg0: Arg0, arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5, arg6: Arg6, arg7: Arg7, arg8: Arg8) => Result;
export declare type ToFunction9<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Result> = ((arg0: Arg0, arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5, arg6: Arg6, arg7: Arg7, arg8: Arg8) => Result) | Result;
export declare function toFunction9<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Result>(toFunc: ToFunction9<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Result>): Function9<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Result>;
export declare type AsyncFunction9<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Result> = (arg0: Arg0, arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5, arg6: Arg6, arg7: Arg7, arg8: Arg8) => Promise<Result>;
export declare type ToAsyncFunction9<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Result> = ToFunction9<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Promise<Result> | Result>;
export declare function toAsyncFunction9<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Result>(toFunc: ToAsyncFunction9<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Result>): AsyncFunction9<Arg0, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Result>;
