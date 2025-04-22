
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model DonationOption
 * 
 */
export type DonationOption = $Result.DefaultSelection<Prisma.$DonationOptionPayload>
/**
 * Model Donation
 * 
 */
export type Donation = $Result.DefaultSelection<Prisma.$DonationPayload>
/**
 * Model DonationItem
 * 
 */
export type DonationItem = $Result.DefaultSelection<Prisma.$DonationItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DonationStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED'
};

export type DonationStatus = (typeof DonationStatus)[keyof typeof DonationStatus]

}

export type DonationStatus = $Enums.DonationStatus

export const DonationStatus: typeof $Enums.DonationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DonationOptions
 * const donationOptions = await prisma.donationOption.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more DonationOptions
   * const donationOptions = await prisma.donationOption.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.donationOption`: Exposes CRUD operations for the **DonationOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DonationOptions
    * const donationOptions = await prisma.donationOption.findMany()
    * ```
    */
  get donationOption(): Prisma.DonationOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donation`: Exposes CRUD operations for the **Donation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donations
    * const donations = await prisma.donation.findMany()
    * ```
    */
  get donation(): Prisma.DonationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donationItem`: Exposes CRUD operations for the **DonationItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DonationItems
    * const donationItems = await prisma.donationItem.findMany()
    * ```
    */
  get donationItem(): Prisma.DonationItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    DonationOption: 'DonationOption',
    Donation: 'Donation',
    DonationItem: 'DonationItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "donationOption" | "donation" | "donationItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DonationOption: {
        payload: Prisma.$DonationOptionPayload<ExtArgs>
        fields: Prisma.DonationOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonationOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonationOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationOptionPayload>
          }
          findFirst: {
            args: Prisma.DonationOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonationOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationOptionPayload>
          }
          findMany: {
            args: Prisma.DonationOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationOptionPayload>[]
          }
          create: {
            args: Prisma.DonationOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationOptionPayload>
          }
          createMany: {
            args: Prisma.DonationOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonationOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationOptionPayload>[]
          }
          delete: {
            args: Prisma.DonationOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationOptionPayload>
          }
          update: {
            args: Prisma.DonationOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationOptionPayload>
          }
          deleteMany: {
            args: Prisma.DonationOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonationOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonationOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationOptionPayload>[]
          }
          upsert: {
            args: Prisma.DonationOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationOptionPayload>
          }
          aggregate: {
            args: Prisma.DonationOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonationOption>
          }
          groupBy: {
            args: Prisma.DonationOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonationOptionCountArgs<ExtArgs>
            result: $Utils.Optional<DonationOptionCountAggregateOutputType> | number
          }
        }
      }
      Donation: {
        payload: Prisma.$DonationPayload<ExtArgs>
        fields: Prisma.DonationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findFirst: {
            args: Prisma.DonationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findMany: {
            args: Prisma.DonationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          create: {
            args: Prisma.DonationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          createMany: {
            args: Prisma.DonationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          delete: {
            args: Prisma.DonationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          update: {
            args: Prisma.DonationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          deleteMany: {
            args: Prisma.DonationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          upsert: {
            args: Prisma.DonationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          aggregate: {
            args: Prisma.DonationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonation>
          }
          groupBy: {
            args: Prisma.DonationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonationCountArgs<ExtArgs>
            result: $Utils.Optional<DonationCountAggregateOutputType> | number
          }
        }
      }
      DonationItem: {
        payload: Prisma.$DonationItemPayload<ExtArgs>
        fields: Prisma.DonationItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonationItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonationItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationItemPayload>
          }
          findFirst: {
            args: Prisma.DonationItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonationItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationItemPayload>
          }
          findMany: {
            args: Prisma.DonationItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationItemPayload>[]
          }
          create: {
            args: Prisma.DonationItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationItemPayload>
          }
          createMany: {
            args: Prisma.DonationItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonationItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationItemPayload>[]
          }
          delete: {
            args: Prisma.DonationItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationItemPayload>
          }
          update: {
            args: Prisma.DonationItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationItemPayload>
          }
          deleteMany: {
            args: Prisma.DonationItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonationItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonationItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationItemPayload>[]
          }
          upsert: {
            args: Prisma.DonationItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationItemPayload>
          }
          aggregate: {
            args: Prisma.DonationItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonationItem>
          }
          groupBy: {
            args: Prisma.DonationItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonationItemCountArgs<ExtArgs>
            result: $Utils.Optional<DonationItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    donationOption?: DonationOptionOmit
    donation?: DonationOmit
    donationItem?: DonationItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DonationOptionCountOutputType
   */

  export type DonationOptionCountOutputType = {
    donationItems: number
  }

  export type DonationOptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donationItems?: boolean | DonationOptionCountOutputTypeCountDonationItemsArgs
  }

  // Custom InputTypes
  /**
   * DonationOptionCountOutputType without action
   */
  export type DonationOptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationOptionCountOutputType
     */
    select?: DonationOptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DonationOptionCountOutputType without action
   */
  export type DonationOptionCountOutputTypeCountDonationItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationItemWhereInput
  }


  /**
   * Count Type DonationCountOutputType
   */

  export type DonationCountOutputType = {
    items: number
  }

  export type DonationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | DonationCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * DonationCountOutputType without action
   */
  export type DonationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationCountOutputType
     */
    select?: DonationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DonationCountOutputType without action
   */
  export type DonationCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model DonationOption
   */

  export type AggregateDonationOption = {
    _count: DonationOptionCountAggregateOutputType | null
    _avg: DonationOptionAvgAggregateOutputType | null
    _sum: DonationOptionSumAggregateOutputType | null
    _min: DonationOptionMinAggregateOutputType | null
    _max: DonationOptionMaxAggregateOutputType | null
  }

  export type DonationOptionAvgAggregateOutputType = {
    suggestedAmount: number | null
  }

  export type DonationOptionSumAggregateOutputType = {
    suggestedAmount: number | null
  }

  export type DonationOptionMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    suggestedAmount: number | null
    image: string | null
    stripePriceId: string | null
    isFeatured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonationOptionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    suggestedAmount: number | null
    image: string | null
    stripePriceId: string | null
    isFeatured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonationOptionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    suggestedAmount: number
    image: number
    stripePriceId: number
    isFeatured: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DonationOptionAvgAggregateInputType = {
    suggestedAmount?: true
  }

  export type DonationOptionSumAggregateInputType = {
    suggestedAmount?: true
  }

  export type DonationOptionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    suggestedAmount?: true
    image?: true
    stripePriceId?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonationOptionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    suggestedAmount?: true
    image?: true
    stripePriceId?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonationOptionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    suggestedAmount?: true
    image?: true
    stripePriceId?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DonationOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonationOption to aggregate.
     */
    where?: DonationOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationOptions to fetch.
     */
    orderBy?: DonationOptionOrderByWithRelationInput | DonationOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonationOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DonationOptions
    **/
    _count?: true | DonationOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationOptionMaxAggregateInputType
  }

  export type GetDonationOptionAggregateType<T extends DonationOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateDonationOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonationOption[P]>
      : GetScalarType<T[P], AggregateDonationOption[P]>
  }




  export type DonationOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationOptionWhereInput
    orderBy?: DonationOptionOrderByWithAggregationInput | DonationOptionOrderByWithAggregationInput[]
    by: DonationOptionScalarFieldEnum[] | DonationOptionScalarFieldEnum
    having?: DonationOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationOptionCountAggregateInputType | true
    _avg?: DonationOptionAvgAggregateInputType
    _sum?: DonationOptionSumAggregateInputType
    _min?: DonationOptionMinAggregateInputType
    _max?: DonationOptionMaxAggregateInputType
  }

  export type DonationOptionGroupByOutputType = {
    id: string
    name: string
    description: string
    suggestedAmount: number
    image: string
    stripePriceId: string
    isFeatured: boolean
    createdAt: Date
    updatedAt: Date
    _count: DonationOptionCountAggregateOutputType | null
    _avg: DonationOptionAvgAggregateOutputType | null
    _sum: DonationOptionSumAggregateOutputType | null
    _min: DonationOptionMinAggregateOutputType | null
    _max: DonationOptionMaxAggregateOutputType | null
  }

  type GetDonationOptionGroupByPayload<T extends DonationOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationOptionGroupByOutputType[P]>
            : GetScalarType<T[P], DonationOptionGroupByOutputType[P]>
        }
      >
    >


  export type DonationOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    suggestedAmount?: boolean
    image?: boolean
    stripePriceId?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donationItems?: boolean | DonationOption$donationItemsArgs<ExtArgs>
    _count?: boolean | DonationOptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donationOption"]>

  export type DonationOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    suggestedAmount?: boolean
    image?: boolean
    stripePriceId?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["donationOption"]>

  export type DonationOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    suggestedAmount?: boolean
    image?: boolean
    stripePriceId?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["donationOption"]>

  export type DonationOptionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    suggestedAmount?: boolean
    image?: boolean
    stripePriceId?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DonationOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "suggestedAmount" | "image" | "stripePriceId" | "isFeatured" | "createdAt" | "updatedAt", ExtArgs["result"]["donationOption"]>
  export type DonationOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donationItems?: boolean | DonationOption$donationItemsArgs<ExtArgs>
    _count?: boolean | DonationOptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DonationOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DonationOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DonationOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DonationOption"
    objects: {
      donationItems: Prisma.$DonationItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      suggestedAmount: number
      image: string
      stripePriceId: string
      isFeatured: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["donationOption"]>
    composites: {}
  }

  type DonationOptionGetPayload<S extends boolean | null | undefined | DonationOptionDefaultArgs> = $Result.GetResult<Prisma.$DonationOptionPayload, S>

  type DonationOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonationOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationOptionCountAggregateInputType | true
    }

  export interface DonationOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DonationOption'], meta: { name: 'DonationOption' } }
    /**
     * Find zero or one DonationOption that matches the filter.
     * @param {DonationOptionFindUniqueArgs} args - Arguments to find a DonationOption
     * @example
     * // Get one DonationOption
     * const donationOption = await prisma.donationOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonationOptionFindUniqueArgs>(args: SelectSubset<T, DonationOptionFindUniqueArgs<ExtArgs>>): Prisma__DonationOptionClient<$Result.GetResult<Prisma.$DonationOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DonationOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonationOptionFindUniqueOrThrowArgs} args - Arguments to find a DonationOption
     * @example
     * // Get one DonationOption
     * const donationOption = await prisma.donationOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonationOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, DonationOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonationOptionClient<$Result.GetResult<Prisma.$DonationOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonationOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationOptionFindFirstArgs} args - Arguments to find a DonationOption
     * @example
     * // Get one DonationOption
     * const donationOption = await prisma.donationOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonationOptionFindFirstArgs>(args?: SelectSubset<T, DonationOptionFindFirstArgs<ExtArgs>>): Prisma__DonationOptionClient<$Result.GetResult<Prisma.$DonationOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonationOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationOptionFindFirstOrThrowArgs} args - Arguments to find a DonationOption
     * @example
     * // Get one DonationOption
     * const donationOption = await prisma.donationOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonationOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, DonationOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonationOptionClient<$Result.GetResult<Prisma.$DonationOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DonationOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DonationOptions
     * const donationOptions = await prisma.donationOption.findMany()
     * 
     * // Get first 10 DonationOptions
     * const donationOptions = await prisma.donationOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationOptionWithIdOnly = await prisma.donationOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonationOptionFindManyArgs>(args?: SelectSubset<T, DonationOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DonationOption.
     * @param {DonationOptionCreateArgs} args - Arguments to create a DonationOption.
     * @example
     * // Create one DonationOption
     * const DonationOption = await prisma.donationOption.create({
     *   data: {
     *     // ... data to create a DonationOption
     *   }
     * })
     * 
     */
    create<T extends DonationOptionCreateArgs>(args: SelectSubset<T, DonationOptionCreateArgs<ExtArgs>>): Prisma__DonationOptionClient<$Result.GetResult<Prisma.$DonationOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DonationOptions.
     * @param {DonationOptionCreateManyArgs} args - Arguments to create many DonationOptions.
     * @example
     * // Create many DonationOptions
     * const donationOption = await prisma.donationOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonationOptionCreateManyArgs>(args?: SelectSubset<T, DonationOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DonationOptions and returns the data saved in the database.
     * @param {DonationOptionCreateManyAndReturnArgs} args - Arguments to create many DonationOptions.
     * @example
     * // Create many DonationOptions
     * const donationOption = await prisma.donationOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DonationOptions and only return the `id`
     * const donationOptionWithIdOnly = await prisma.donationOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonationOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, DonationOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DonationOption.
     * @param {DonationOptionDeleteArgs} args - Arguments to delete one DonationOption.
     * @example
     * // Delete one DonationOption
     * const DonationOption = await prisma.donationOption.delete({
     *   where: {
     *     // ... filter to delete one DonationOption
     *   }
     * })
     * 
     */
    delete<T extends DonationOptionDeleteArgs>(args: SelectSubset<T, DonationOptionDeleteArgs<ExtArgs>>): Prisma__DonationOptionClient<$Result.GetResult<Prisma.$DonationOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DonationOption.
     * @param {DonationOptionUpdateArgs} args - Arguments to update one DonationOption.
     * @example
     * // Update one DonationOption
     * const donationOption = await prisma.donationOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonationOptionUpdateArgs>(args: SelectSubset<T, DonationOptionUpdateArgs<ExtArgs>>): Prisma__DonationOptionClient<$Result.GetResult<Prisma.$DonationOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DonationOptions.
     * @param {DonationOptionDeleteManyArgs} args - Arguments to filter DonationOptions to delete.
     * @example
     * // Delete a few DonationOptions
     * const { count } = await prisma.donationOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonationOptionDeleteManyArgs>(args?: SelectSubset<T, DonationOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonationOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DonationOptions
     * const donationOption = await prisma.donationOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonationOptionUpdateManyArgs>(args: SelectSubset<T, DonationOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonationOptions and returns the data updated in the database.
     * @param {DonationOptionUpdateManyAndReturnArgs} args - Arguments to update many DonationOptions.
     * @example
     * // Update many DonationOptions
     * const donationOption = await prisma.donationOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DonationOptions and only return the `id`
     * const donationOptionWithIdOnly = await prisma.donationOption.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DonationOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, DonationOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DonationOption.
     * @param {DonationOptionUpsertArgs} args - Arguments to update or create a DonationOption.
     * @example
     * // Update or create a DonationOption
     * const donationOption = await prisma.donationOption.upsert({
     *   create: {
     *     // ... data to create a DonationOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DonationOption we want to update
     *   }
     * })
     */
    upsert<T extends DonationOptionUpsertArgs>(args: SelectSubset<T, DonationOptionUpsertArgs<ExtArgs>>): Prisma__DonationOptionClient<$Result.GetResult<Prisma.$DonationOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DonationOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationOptionCountArgs} args - Arguments to filter DonationOptions to count.
     * @example
     * // Count the number of DonationOptions
     * const count = await prisma.donationOption.count({
     *   where: {
     *     // ... the filter for the DonationOptions we want to count
     *   }
     * })
    **/
    count<T extends DonationOptionCountArgs>(
      args?: Subset<T, DonationOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DonationOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonationOptionAggregateArgs>(args: Subset<T, DonationOptionAggregateArgs>): Prisma.PrismaPromise<GetDonationOptionAggregateType<T>>

    /**
     * Group by DonationOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationOptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonationOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonationOptionGroupByArgs['orderBy'] }
        : { orderBy?: DonationOptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonationOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DonationOption model
   */
  readonly fields: DonationOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DonationOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonationOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donationItems<T extends DonationOption$donationItemsArgs<ExtArgs> = {}>(args?: Subset<T, DonationOption$donationItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DonationOption model
   */
  interface DonationOptionFieldRefs {
    readonly id: FieldRef<"DonationOption", 'String'>
    readonly name: FieldRef<"DonationOption", 'String'>
    readonly description: FieldRef<"DonationOption", 'String'>
    readonly suggestedAmount: FieldRef<"DonationOption", 'Float'>
    readonly image: FieldRef<"DonationOption", 'String'>
    readonly stripePriceId: FieldRef<"DonationOption", 'String'>
    readonly isFeatured: FieldRef<"DonationOption", 'Boolean'>
    readonly createdAt: FieldRef<"DonationOption", 'DateTime'>
    readonly updatedAt: FieldRef<"DonationOption", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DonationOption findUnique
   */
  export type DonationOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationOption
     */
    select?: DonationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationOption
     */
    omit?: DonationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationOptionInclude<ExtArgs> | null
    /**
     * Filter, which DonationOption to fetch.
     */
    where: DonationOptionWhereUniqueInput
  }

  /**
   * DonationOption findUniqueOrThrow
   */
  export type DonationOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationOption
     */
    select?: DonationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationOption
     */
    omit?: DonationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationOptionInclude<ExtArgs> | null
    /**
     * Filter, which DonationOption to fetch.
     */
    where: DonationOptionWhereUniqueInput
  }

  /**
   * DonationOption findFirst
   */
  export type DonationOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationOption
     */
    select?: DonationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationOption
     */
    omit?: DonationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationOptionInclude<ExtArgs> | null
    /**
     * Filter, which DonationOption to fetch.
     */
    where?: DonationOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationOptions to fetch.
     */
    orderBy?: DonationOptionOrderByWithRelationInput | DonationOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonationOptions.
     */
    cursor?: DonationOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonationOptions.
     */
    distinct?: DonationOptionScalarFieldEnum | DonationOptionScalarFieldEnum[]
  }

  /**
   * DonationOption findFirstOrThrow
   */
  export type DonationOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationOption
     */
    select?: DonationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationOption
     */
    omit?: DonationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationOptionInclude<ExtArgs> | null
    /**
     * Filter, which DonationOption to fetch.
     */
    where?: DonationOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationOptions to fetch.
     */
    orderBy?: DonationOptionOrderByWithRelationInput | DonationOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonationOptions.
     */
    cursor?: DonationOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonationOptions.
     */
    distinct?: DonationOptionScalarFieldEnum | DonationOptionScalarFieldEnum[]
  }

  /**
   * DonationOption findMany
   */
  export type DonationOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationOption
     */
    select?: DonationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationOption
     */
    omit?: DonationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationOptionInclude<ExtArgs> | null
    /**
     * Filter, which DonationOptions to fetch.
     */
    where?: DonationOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationOptions to fetch.
     */
    orderBy?: DonationOptionOrderByWithRelationInput | DonationOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DonationOptions.
     */
    cursor?: DonationOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationOptions.
     */
    skip?: number
    distinct?: DonationOptionScalarFieldEnum | DonationOptionScalarFieldEnum[]
  }

  /**
   * DonationOption create
   */
  export type DonationOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationOption
     */
    select?: DonationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationOption
     */
    omit?: DonationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a DonationOption.
     */
    data: XOR<DonationOptionCreateInput, DonationOptionUncheckedCreateInput>
  }

  /**
   * DonationOption createMany
   */
  export type DonationOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DonationOptions.
     */
    data: DonationOptionCreateManyInput | DonationOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DonationOption createManyAndReturn
   */
  export type DonationOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationOption
     */
    select?: DonationOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonationOption
     */
    omit?: DonationOptionOmit<ExtArgs> | null
    /**
     * The data used to create many DonationOptions.
     */
    data: DonationOptionCreateManyInput | DonationOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DonationOption update
   */
  export type DonationOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationOption
     */
    select?: DonationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationOption
     */
    omit?: DonationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a DonationOption.
     */
    data: XOR<DonationOptionUpdateInput, DonationOptionUncheckedUpdateInput>
    /**
     * Choose, which DonationOption to update.
     */
    where: DonationOptionWhereUniqueInput
  }

  /**
   * DonationOption updateMany
   */
  export type DonationOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DonationOptions.
     */
    data: XOR<DonationOptionUpdateManyMutationInput, DonationOptionUncheckedUpdateManyInput>
    /**
     * Filter which DonationOptions to update
     */
    where?: DonationOptionWhereInput
    /**
     * Limit how many DonationOptions to update.
     */
    limit?: number
  }

  /**
   * DonationOption updateManyAndReturn
   */
  export type DonationOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationOption
     */
    select?: DonationOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonationOption
     */
    omit?: DonationOptionOmit<ExtArgs> | null
    /**
     * The data used to update DonationOptions.
     */
    data: XOR<DonationOptionUpdateManyMutationInput, DonationOptionUncheckedUpdateManyInput>
    /**
     * Filter which DonationOptions to update
     */
    where?: DonationOptionWhereInput
    /**
     * Limit how many DonationOptions to update.
     */
    limit?: number
  }

  /**
   * DonationOption upsert
   */
  export type DonationOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationOption
     */
    select?: DonationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationOption
     */
    omit?: DonationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the DonationOption to update in case it exists.
     */
    where: DonationOptionWhereUniqueInput
    /**
     * In case the DonationOption found by the `where` argument doesn't exist, create a new DonationOption with this data.
     */
    create: XOR<DonationOptionCreateInput, DonationOptionUncheckedCreateInput>
    /**
     * In case the DonationOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonationOptionUpdateInput, DonationOptionUncheckedUpdateInput>
  }

  /**
   * DonationOption delete
   */
  export type DonationOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationOption
     */
    select?: DonationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationOption
     */
    omit?: DonationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationOptionInclude<ExtArgs> | null
    /**
     * Filter which DonationOption to delete.
     */
    where: DonationOptionWhereUniqueInput
  }

  /**
   * DonationOption deleteMany
   */
  export type DonationOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonationOptions to delete
     */
    where?: DonationOptionWhereInput
    /**
     * Limit how many DonationOptions to delete.
     */
    limit?: number
  }

  /**
   * DonationOption.donationItems
   */
  export type DonationOption$donationItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationItem
     */
    select?: DonationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationItem
     */
    omit?: DonationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationItemInclude<ExtArgs> | null
    where?: DonationItemWhereInput
    orderBy?: DonationItemOrderByWithRelationInput | DonationItemOrderByWithRelationInput[]
    cursor?: DonationItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationItemScalarFieldEnum | DonationItemScalarFieldEnum[]
  }

  /**
   * DonationOption without action
   */
  export type DonationOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationOption
     */
    select?: DonationOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationOption
     */
    omit?: DonationOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationOptionInclude<ExtArgs> | null
  }


  /**
   * Model Donation
   */

  export type AggregateDonation = {
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  export type DonationAvgAggregateOutputType = {
    totalAmount: number | null
  }

  export type DonationSumAggregateOutputType = {
    totalAmount: number | null
  }

  export type DonationMinAggregateOutputType = {
    id: string | null
    donorId: string | null
    status: $Enums.DonationStatus | null
    totalAmount: number | null
    paymentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonationMaxAggregateOutputType = {
    id: string | null
    donorId: string | null
    status: $Enums.DonationStatus | null
    totalAmount: number | null
    paymentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonationCountAggregateOutputType = {
    id: number
    donorId: number
    status: number
    totalAmount: number
    paymentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DonationAvgAggregateInputType = {
    totalAmount?: true
  }

  export type DonationSumAggregateInputType = {
    totalAmount?: true
  }

  export type DonationMinAggregateInputType = {
    id?: true
    donorId?: true
    status?: true
    totalAmount?: true
    paymentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonationMaxAggregateInputType = {
    id?: true
    donorId?: true
    status?: true
    totalAmount?: true
    paymentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonationCountAggregateInputType = {
    id?: true
    donorId?: true
    status?: true
    totalAmount?: true
    paymentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DonationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donation to aggregate.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Donations
    **/
    _count?: true | DonationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationMaxAggregateInputType
  }

  export type GetDonationAggregateType<T extends DonationAggregateArgs> = {
        [P in keyof T & keyof AggregateDonation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonation[P]>
      : GetScalarType<T[P], AggregateDonation[P]>
  }




  export type DonationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithAggregationInput | DonationOrderByWithAggregationInput[]
    by: DonationScalarFieldEnum[] | DonationScalarFieldEnum
    having?: DonationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationCountAggregateInputType | true
    _avg?: DonationAvgAggregateInputType
    _sum?: DonationSumAggregateInputType
    _min?: DonationMinAggregateInputType
    _max?: DonationMaxAggregateInputType
  }

  export type DonationGroupByOutputType = {
    id: string
    donorId: string | null
    status: $Enums.DonationStatus
    totalAmount: number
    paymentId: string | null
    createdAt: Date
    updatedAt: Date
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  type GetDonationGroupByPayload<T extends DonationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationGroupByOutputType[P]>
            : GetScalarType<T[P], DonationGroupByOutputType[P]>
        }
      >
    >


  export type DonationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donorId?: boolean
    status?: boolean
    totalAmount?: boolean
    paymentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | Donation$itemsArgs<ExtArgs>
    _count?: boolean | DonationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donorId?: boolean
    status?: boolean
    totalAmount?: boolean
    paymentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donorId?: boolean
    status?: boolean
    totalAmount?: boolean
    paymentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectScalar = {
    id?: boolean
    donorId?: boolean
    status?: boolean
    totalAmount?: boolean
    paymentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DonationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "donorId" | "status" | "totalAmount" | "paymentId" | "createdAt" | "updatedAt", ExtArgs["result"]["donation"]>
  export type DonationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Donation$itemsArgs<ExtArgs>
    _count?: boolean | DonationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DonationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DonationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DonationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Donation"
    objects: {
      items: Prisma.$DonationItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      donorId: string | null
      status: $Enums.DonationStatus
      totalAmount: number
      paymentId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["donation"]>
    composites: {}
  }

  type DonationGetPayload<S extends boolean | null | undefined | DonationDefaultArgs> = $Result.GetResult<Prisma.$DonationPayload, S>

  type DonationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationCountAggregateInputType | true
    }

  export interface DonationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Donation'], meta: { name: 'Donation' } }
    /**
     * Find zero or one Donation that matches the filter.
     * @param {DonationFindUniqueArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonationFindUniqueArgs>(args: SelectSubset<T, DonationFindUniqueArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Donation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonationFindUniqueOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonationFindUniqueOrThrowArgs>(args: SelectSubset<T, DonationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonationFindFirstArgs>(args?: SelectSubset<T, DonationFindFirstArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonationFindFirstOrThrowArgs>(args?: SelectSubset<T, DonationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Donations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donations
     * const donations = await prisma.donation.findMany()
     * 
     * // Get first 10 Donations
     * const donations = await prisma.donation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationWithIdOnly = await prisma.donation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonationFindManyArgs>(args?: SelectSubset<T, DonationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Donation.
     * @param {DonationCreateArgs} args - Arguments to create a Donation.
     * @example
     * // Create one Donation
     * const Donation = await prisma.donation.create({
     *   data: {
     *     // ... data to create a Donation
     *   }
     * })
     * 
     */
    create<T extends DonationCreateArgs>(args: SelectSubset<T, DonationCreateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Donations.
     * @param {DonationCreateManyArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonationCreateManyArgs>(args?: SelectSubset<T, DonationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Donations and returns the data saved in the database.
     * @param {DonationCreateManyAndReturnArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Donations and only return the `id`
     * const donationWithIdOnly = await prisma.donation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonationCreateManyAndReturnArgs>(args?: SelectSubset<T, DonationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Donation.
     * @param {DonationDeleteArgs} args - Arguments to delete one Donation.
     * @example
     * // Delete one Donation
     * const Donation = await prisma.donation.delete({
     *   where: {
     *     // ... filter to delete one Donation
     *   }
     * })
     * 
     */
    delete<T extends DonationDeleteArgs>(args: SelectSubset<T, DonationDeleteArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Donation.
     * @param {DonationUpdateArgs} args - Arguments to update one Donation.
     * @example
     * // Update one Donation
     * const donation = await prisma.donation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonationUpdateArgs>(args: SelectSubset<T, DonationUpdateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Donations.
     * @param {DonationDeleteManyArgs} args - Arguments to filter Donations to delete.
     * @example
     * // Delete a few Donations
     * const { count } = await prisma.donation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonationDeleteManyArgs>(args?: SelectSubset<T, DonationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonationUpdateManyArgs>(args: SelectSubset<T, DonationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations and returns the data updated in the database.
     * @param {DonationUpdateManyAndReturnArgs} args - Arguments to update many Donations.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Donations and only return the `id`
     * const donationWithIdOnly = await prisma.donation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DonationUpdateManyAndReturnArgs>(args: SelectSubset<T, DonationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Donation.
     * @param {DonationUpsertArgs} args - Arguments to update or create a Donation.
     * @example
     * // Update or create a Donation
     * const donation = await prisma.donation.upsert({
     *   create: {
     *     // ... data to create a Donation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donation we want to update
     *   }
     * })
     */
    upsert<T extends DonationUpsertArgs>(args: SelectSubset<T, DonationUpsertArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationCountArgs} args - Arguments to filter Donations to count.
     * @example
     * // Count the number of Donations
     * const count = await prisma.donation.count({
     *   where: {
     *     // ... the filter for the Donations we want to count
     *   }
     * })
    **/
    count<T extends DonationCountArgs>(
      args?: Subset<T, DonationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonationAggregateArgs>(args: Subset<T, DonationAggregateArgs>): Prisma.PrismaPromise<GetDonationAggregateType<T>>

    /**
     * Group by Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonationGroupByArgs['orderBy'] }
        : { orderBy?: DonationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Donation model
   */
  readonly fields: DonationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Donation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Donation$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Donation$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Donation model
   */
  interface DonationFieldRefs {
    readonly id: FieldRef<"Donation", 'String'>
    readonly donorId: FieldRef<"Donation", 'String'>
    readonly status: FieldRef<"Donation", 'DonationStatus'>
    readonly totalAmount: FieldRef<"Donation", 'Float'>
    readonly paymentId: FieldRef<"Donation", 'String'>
    readonly createdAt: FieldRef<"Donation", 'DateTime'>
    readonly updatedAt: FieldRef<"Donation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Donation findUnique
   */
  export type DonationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findUniqueOrThrow
   */
  export type DonationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findFirst
   */
  export type DonationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findFirstOrThrow
   */
  export type DonationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findMany
   */
  export type DonationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donations to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation create
   */
  export type DonationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to create a Donation.
     */
    data: XOR<DonationCreateInput, DonationUncheckedCreateInput>
  }

  /**
   * Donation createMany
   */
  export type DonationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donation createManyAndReturn
   */
  export type DonationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donation update
   */
  export type DonationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to update a Donation.
     */
    data: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
    /**
     * Choose, which Donation to update.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation updateMany
   */
  export type DonationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to update.
     */
    limit?: number
  }

  /**
   * Donation updateManyAndReturn
   */
  export type DonationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to update.
     */
    limit?: number
  }

  /**
   * Donation upsert
   */
  export type DonationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The filter to search for the Donation to update in case it exists.
     */
    where: DonationWhereUniqueInput
    /**
     * In case the Donation found by the `where` argument doesn't exist, create a new Donation with this data.
     */
    create: XOR<DonationCreateInput, DonationUncheckedCreateInput>
    /**
     * In case the Donation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
  }

  /**
   * Donation delete
   */
  export type DonationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter which Donation to delete.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation deleteMany
   */
  export type DonationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donations to delete
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to delete.
     */
    limit?: number
  }

  /**
   * Donation.items
   */
  export type Donation$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationItem
     */
    select?: DonationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationItem
     */
    omit?: DonationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationItemInclude<ExtArgs> | null
    where?: DonationItemWhereInput
    orderBy?: DonationItemOrderByWithRelationInput | DonationItemOrderByWithRelationInput[]
    cursor?: DonationItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationItemScalarFieldEnum | DonationItemScalarFieldEnum[]
  }

  /**
   * Donation without action
   */
  export type DonationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
  }


  /**
   * Model DonationItem
   */

  export type AggregateDonationItem = {
    _count: DonationItemCountAggregateOutputType | null
    _avg: DonationItemAvgAggregateOutputType | null
    _sum: DonationItemSumAggregateOutputType | null
    _min: DonationItemMinAggregateOutputType | null
    _max: DonationItemMaxAggregateOutputType | null
  }

  export type DonationItemAvgAggregateOutputType = {
    quantity: number | null
    amount: number | null
  }

  export type DonationItemSumAggregateOutputType = {
    quantity: number | null
    amount: number | null
  }

  export type DonationItemMinAggregateOutputType = {
    id: string | null
    donationId: string | null
    donationOptionId: string | null
    quantity: number | null
    amount: number | null
  }

  export type DonationItemMaxAggregateOutputType = {
    id: string | null
    donationId: string | null
    donationOptionId: string | null
    quantity: number | null
    amount: number | null
  }

  export type DonationItemCountAggregateOutputType = {
    id: number
    donationId: number
    donationOptionId: number
    quantity: number
    amount: number
    _all: number
  }


  export type DonationItemAvgAggregateInputType = {
    quantity?: true
    amount?: true
  }

  export type DonationItemSumAggregateInputType = {
    quantity?: true
    amount?: true
  }

  export type DonationItemMinAggregateInputType = {
    id?: true
    donationId?: true
    donationOptionId?: true
    quantity?: true
    amount?: true
  }

  export type DonationItemMaxAggregateInputType = {
    id?: true
    donationId?: true
    donationOptionId?: true
    quantity?: true
    amount?: true
  }

  export type DonationItemCountAggregateInputType = {
    id?: true
    donationId?: true
    donationOptionId?: true
    quantity?: true
    amount?: true
    _all?: true
  }

  export type DonationItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonationItem to aggregate.
     */
    where?: DonationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationItems to fetch.
     */
    orderBy?: DonationItemOrderByWithRelationInput | DonationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DonationItems
    **/
    _count?: true | DonationItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationItemMaxAggregateInputType
  }

  export type GetDonationItemAggregateType<T extends DonationItemAggregateArgs> = {
        [P in keyof T & keyof AggregateDonationItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonationItem[P]>
      : GetScalarType<T[P], AggregateDonationItem[P]>
  }




  export type DonationItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationItemWhereInput
    orderBy?: DonationItemOrderByWithAggregationInput | DonationItemOrderByWithAggregationInput[]
    by: DonationItemScalarFieldEnum[] | DonationItemScalarFieldEnum
    having?: DonationItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationItemCountAggregateInputType | true
    _avg?: DonationItemAvgAggregateInputType
    _sum?: DonationItemSumAggregateInputType
    _min?: DonationItemMinAggregateInputType
    _max?: DonationItemMaxAggregateInputType
  }

  export type DonationItemGroupByOutputType = {
    id: string
    donationId: string
    donationOptionId: string
    quantity: number
    amount: number
    _count: DonationItemCountAggregateOutputType | null
    _avg: DonationItemAvgAggregateOutputType | null
    _sum: DonationItemSumAggregateOutputType | null
    _min: DonationItemMinAggregateOutputType | null
    _max: DonationItemMaxAggregateOutputType | null
  }

  type GetDonationItemGroupByPayload<T extends DonationItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationItemGroupByOutputType[P]>
            : GetScalarType<T[P], DonationItemGroupByOutputType[P]>
        }
      >
    >


  export type DonationItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donationId?: boolean
    donationOptionId?: boolean
    quantity?: boolean
    amount?: boolean
    donation?: boolean | DonationDefaultArgs<ExtArgs>
    donationOption?: boolean | DonationOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donationItem"]>

  export type DonationItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donationId?: boolean
    donationOptionId?: boolean
    quantity?: boolean
    amount?: boolean
    donation?: boolean | DonationDefaultArgs<ExtArgs>
    donationOption?: boolean | DonationOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donationItem"]>

  export type DonationItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donationId?: boolean
    donationOptionId?: boolean
    quantity?: boolean
    amount?: boolean
    donation?: boolean | DonationDefaultArgs<ExtArgs>
    donationOption?: boolean | DonationOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donationItem"]>

  export type DonationItemSelectScalar = {
    id?: boolean
    donationId?: boolean
    donationOptionId?: boolean
    quantity?: boolean
    amount?: boolean
  }

  export type DonationItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "donationId" | "donationOptionId" | "quantity" | "amount", ExtArgs["result"]["donationItem"]>
  export type DonationItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donation?: boolean | DonationDefaultArgs<ExtArgs>
    donationOption?: boolean | DonationOptionDefaultArgs<ExtArgs>
  }
  export type DonationItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donation?: boolean | DonationDefaultArgs<ExtArgs>
    donationOption?: boolean | DonationOptionDefaultArgs<ExtArgs>
  }
  export type DonationItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donation?: boolean | DonationDefaultArgs<ExtArgs>
    donationOption?: boolean | DonationOptionDefaultArgs<ExtArgs>
  }

  export type $DonationItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DonationItem"
    objects: {
      donation: Prisma.$DonationPayload<ExtArgs>
      donationOption: Prisma.$DonationOptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      donationId: string
      donationOptionId: string
      quantity: number
      amount: number
    }, ExtArgs["result"]["donationItem"]>
    composites: {}
  }

  type DonationItemGetPayload<S extends boolean | null | undefined | DonationItemDefaultArgs> = $Result.GetResult<Prisma.$DonationItemPayload, S>

  type DonationItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonationItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationItemCountAggregateInputType | true
    }

  export interface DonationItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DonationItem'], meta: { name: 'DonationItem' } }
    /**
     * Find zero or one DonationItem that matches the filter.
     * @param {DonationItemFindUniqueArgs} args - Arguments to find a DonationItem
     * @example
     * // Get one DonationItem
     * const donationItem = await prisma.donationItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonationItemFindUniqueArgs>(args: SelectSubset<T, DonationItemFindUniqueArgs<ExtArgs>>): Prisma__DonationItemClient<$Result.GetResult<Prisma.$DonationItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DonationItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonationItemFindUniqueOrThrowArgs} args - Arguments to find a DonationItem
     * @example
     * // Get one DonationItem
     * const donationItem = await prisma.donationItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonationItemFindUniqueOrThrowArgs>(args: SelectSubset<T, DonationItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonationItemClient<$Result.GetResult<Prisma.$DonationItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonationItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationItemFindFirstArgs} args - Arguments to find a DonationItem
     * @example
     * // Get one DonationItem
     * const donationItem = await prisma.donationItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonationItemFindFirstArgs>(args?: SelectSubset<T, DonationItemFindFirstArgs<ExtArgs>>): Prisma__DonationItemClient<$Result.GetResult<Prisma.$DonationItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonationItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationItemFindFirstOrThrowArgs} args - Arguments to find a DonationItem
     * @example
     * // Get one DonationItem
     * const donationItem = await prisma.donationItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonationItemFindFirstOrThrowArgs>(args?: SelectSubset<T, DonationItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonationItemClient<$Result.GetResult<Prisma.$DonationItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DonationItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DonationItems
     * const donationItems = await prisma.donationItem.findMany()
     * 
     * // Get first 10 DonationItems
     * const donationItems = await prisma.donationItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationItemWithIdOnly = await prisma.donationItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonationItemFindManyArgs>(args?: SelectSubset<T, DonationItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DonationItem.
     * @param {DonationItemCreateArgs} args - Arguments to create a DonationItem.
     * @example
     * // Create one DonationItem
     * const DonationItem = await prisma.donationItem.create({
     *   data: {
     *     // ... data to create a DonationItem
     *   }
     * })
     * 
     */
    create<T extends DonationItemCreateArgs>(args: SelectSubset<T, DonationItemCreateArgs<ExtArgs>>): Prisma__DonationItemClient<$Result.GetResult<Prisma.$DonationItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DonationItems.
     * @param {DonationItemCreateManyArgs} args - Arguments to create many DonationItems.
     * @example
     * // Create many DonationItems
     * const donationItem = await prisma.donationItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonationItemCreateManyArgs>(args?: SelectSubset<T, DonationItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DonationItems and returns the data saved in the database.
     * @param {DonationItemCreateManyAndReturnArgs} args - Arguments to create many DonationItems.
     * @example
     * // Create many DonationItems
     * const donationItem = await prisma.donationItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DonationItems and only return the `id`
     * const donationItemWithIdOnly = await prisma.donationItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonationItemCreateManyAndReturnArgs>(args?: SelectSubset<T, DonationItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DonationItem.
     * @param {DonationItemDeleteArgs} args - Arguments to delete one DonationItem.
     * @example
     * // Delete one DonationItem
     * const DonationItem = await prisma.donationItem.delete({
     *   where: {
     *     // ... filter to delete one DonationItem
     *   }
     * })
     * 
     */
    delete<T extends DonationItemDeleteArgs>(args: SelectSubset<T, DonationItemDeleteArgs<ExtArgs>>): Prisma__DonationItemClient<$Result.GetResult<Prisma.$DonationItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DonationItem.
     * @param {DonationItemUpdateArgs} args - Arguments to update one DonationItem.
     * @example
     * // Update one DonationItem
     * const donationItem = await prisma.donationItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonationItemUpdateArgs>(args: SelectSubset<T, DonationItemUpdateArgs<ExtArgs>>): Prisma__DonationItemClient<$Result.GetResult<Prisma.$DonationItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DonationItems.
     * @param {DonationItemDeleteManyArgs} args - Arguments to filter DonationItems to delete.
     * @example
     * // Delete a few DonationItems
     * const { count } = await prisma.donationItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonationItemDeleteManyArgs>(args?: SelectSubset<T, DonationItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonationItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DonationItems
     * const donationItem = await prisma.donationItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonationItemUpdateManyArgs>(args: SelectSubset<T, DonationItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonationItems and returns the data updated in the database.
     * @param {DonationItemUpdateManyAndReturnArgs} args - Arguments to update many DonationItems.
     * @example
     * // Update many DonationItems
     * const donationItem = await prisma.donationItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DonationItems and only return the `id`
     * const donationItemWithIdOnly = await prisma.donationItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DonationItemUpdateManyAndReturnArgs>(args: SelectSubset<T, DonationItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DonationItem.
     * @param {DonationItemUpsertArgs} args - Arguments to update or create a DonationItem.
     * @example
     * // Update or create a DonationItem
     * const donationItem = await prisma.donationItem.upsert({
     *   create: {
     *     // ... data to create a DonationItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DonationItem we want to update
     *   }
     * })
     */
    upsert<T extends DonationItemUpsertArgs>(args: SelectSubset<T, DonationItemUpsertArgs<ExtArgs>>): Prisma__DonationItemClient<$Result.GetResult<Prisma.$DonationItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DonationItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationItemCountArgs} args - Arguments to filter DonationItems to count.
     * @example
     * // Count the number of DonationItems
     * const count = await prisma.donationItem.count({
     *   where: {
     *     // ... the filter for the DonationItems we want to count
     *   }
     * })
    **/
    count<T extends DonationItemCountArgs>(
      args?: Subset<T, DonationItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DonationItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonationItemAggregateArgs>(args: Subset<T, DonationItemAggregateArgs>): Prisma.PrismaPromise<GetDonationItemAggregateType<T>>

    /**
     * Group by DonationItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonationItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonationItemGroupByArgs['orderBy'] }
        : { orderBy?: DonationItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonationItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DonationItem model
   */
  readonly fields: DonationItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DonationItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonationItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donation<T extends DonationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DonationDefaultArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    donationOption<T extends DonationOptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DonationOptionDefaultArgs<ExtArgs>>): Prisma__DonationOptionClient<$Result.GetResult<Prisma.$DonationOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DonationItem model
   */
  interface DonationItemFieldRefs {
    readonly id: FieldRef<"DonationItem", 'String'>
    readonly donationId: FieldRef<"DonationItem", 'String'>
    readonly donationOptionId: FieldRef<"DonationItem", 'String'>
    readonly quantity: FieldRef<"DonationItem", 'Int'>
    readonly amount: FieldRef<"DonationItem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * DonationItem findUnique
   */
  export type DonationItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationItem
     */
    select?: DonationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationItem
     */
    omit?: DonationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationItemInclude<ExtArgs> | null
    /**
     * Filter, which DonationItem to fetch.
     */
    where: DonationItemWhereUniqueInput
  }

  /**
   * DonationItem findUniqueOrThrow
   */
  export type DonationItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationItem
     */
    select?: DonationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationItem
     */
    omit?: DonationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationItemInclude<ExtArgs> | null
    /**
     * Filter, which DonationItem to fetch.
     */
    where: DonationItemWhereUniqueInput
  }

  /**
   * DonationItem findFirst
   */
  export type DonationItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationItem
     */
    select?: DonationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationItem
     */
    omit?: DonationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationItemInclude<ExtArgs> | null
    /**
     * Filter, which DonationItem to fetch.
     */
    where?: DonationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationItems to fetch.
     */
    orderBy?: DonationItemOrderByWithRelationInput | DonationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonationItems.
     */
    cursor?: DonationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonationItems.
     */
    distinct?: DonationItemScalarFieldEnum | DonationItemScalarFieldEnum[]
  }

  /**
   * DonationItem findFirstOrThrow
   */
  export type DonationItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationItem
     */
    select?: DonationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationItem
     */
    omit?: DonationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationItemInclude<ExtArgs> | null
    /**
     * Filter, which DonationItem to fetch.
     */
    where?: DonationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationItems to fetch.
     */
    orderBy?: DonationItemOrderByWithRelationInput | DonationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonationItems.
     */
    cursor?: DonationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonationItems.
     */
    distinct?: DonationItemScalarFieldEnum | DonationItemScalarFieldEnum[]
  }

  /**
   * DonationItem findMany
   */
  export type DonationItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationItem
     */
    select?: DonationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationItem
     */
    omit?: DonationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationItemInclude<ExtArgs> | null
    /**
     * Filter, which DonationItems to fetch.
     */
    where?: DonationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationItems to fetch.
     */
    orderBy?: DonationItemOrderByWithRelationInput | DonationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DonationItems.
     */
    cursor?: DonationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationItems.
     */
    skip?: number
    distinct?: DonationItemScalarFieldEnum | DonationItemScalarFieldEnum[]
  }

  /**
   * DonationItem create
   */
  export type DonationItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationItem
     */
    select?: DonationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationItem
     */
    omit?: DonationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationItemInclude<ExtArgs> | null
    /**
     * The data needed to create a DonationItem.
     */
    data: XOR<DonationItemCreateInput, DonationItemUncheckedCreateInput>
  }

  /**
   * DonationItem createMany
   */
  export type DonationItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DonationItems.
     */
    data: DonationItemCreateManyInput | DonationItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DonationItem createManyAndReturn
   */
  export type DonationItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationItem
     */
    select?: DonationItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonationItem
     */
    omit?: DonationItemOmit<ExtArgs> | null
    /**
     * The data used to create many DonationItems.
     */
    data: DonationItemCreateManyInput | DonationItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DonationItem update
   */
  export type DonationItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationItem
     */
    select?: DonationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationItem
     */
    omit?: DonationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationItemInclude<ExtArgs> | null
    /**
     * The data needed to update a DonationItem.
     */
    data: XOR<DonationItemUpdateInput, DonationItemUncheckedUpdateInput>
    /**
     * Choose, which DonationItem to update.
     */
    where: DonationItemWhereUniqueInput
  }

  /**
   * DonationItem updateMany
   */
  export type DonationItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DonationItems.
     */
    data: XOR<DonationItemUpdateManyMutationInput, DonationItemUncheckedUpdateManyInput>
    /**
     * Filter which DonationItems to update
     */
    where?: DonationItemWhereInput
    /**
     * Limit how many DonationItems to update.
     */
    limit?: number
  }

  /**
   * DonationItem updateManyAndReturn
   */
  export type DonationItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationItem
     */
    select?: DonationItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonationItem
     */
    omit?: DonationItemOmit<ExtArgs> | null
    /**
     * The data used to update DonationItems.
     */
    data: XOR<DonationItemUpdateManyMutationInput, DonationItemUncheckedUpdateManyInput>
    /**
     * Filter which DonationItems to update
     */
    where?: DonationItemWhereInput
    /**
     * Limit how many DonationItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DonationItem upsert
   */
  export type DonationItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationItem
     */
    select?: DonationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationItem
     */
    omit?: DonationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationItemInclude<ExtArgs> | null
    /**
     * The filter to search for the DonationItem to update in case it exists.
     */
    where: DonationItemWhereUniqueInput
    /**
     * In case the DonationItem found by the `where` argument doesn't exist, create a new DonationItem with this data.
     */
    create: XOR<DonationItemCreateInput, DonationItemUncheckedCreateInput>
    /**
     * In case the DonationItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonationItemUpdateInput, DonationItemUncheckedUpdateInput>
  }

  /**
   * DonationItem delete
   */
  export type DonationItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationItem
     */
    select?: DonationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationItem
     */
    omit?: DonationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationItemInclude<ExtArgs> | null
    /**
     * Filter which DonationItem to delete.
     */
    where: DonationItemWhereUniqueInput
  }

  /**
   * DonationItem deleteMany
   */
  export type DonationItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonationItems to delete
     */
    where?: DonationItemWhereInput
    /**
     * Limit how many DonationItems to delete.
     */
    limit?: number
  }

  /**
   * DonationItem without action
   */
  export type DonationItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationItem
     */
    select?: DonationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationItem
     */
    omit?: DonationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DonationOptionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    suggestedAmount: 'suggestedAmount',
    image: 'image',
    stripePriceId: 'stripePriceId',
    isFeatured: 'isFeatured',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DonationOptionScalarFieldEnum = (typeof DonationOptionScalarFieldEnum)[keyof typeof DonationOptionScalarFieldEnum]


  export const DonationScalarFieldEnum: {
    id: 'id',
    donorId: 'donorId',
    status: 'status',
    totalAmount: 'totalAmount',
    paymentId: 'paymentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DonationScalarFieldEnum = (typeof DonationScalarFieldEnum)[keyof typeof DonationScalarFieldEnum]


  export const DonationItemScalarFieldEnum: {
    id: 'id',
    donationId: 'donationId',
    donationOptionId: 'donationOptionId',
    quantity: 'quantity',
    amount: 'amount'
  };

  export type DonationItemScalarFieldEnum = (typeof DonationItemScalarFieldEnum)[keyof typeof DonationItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'DonationStatus'
   */
  export type EnumDonationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DonationStatus'>
    


  /**
   * Reference to a field of type 'DonationStatus[]'
   */
  export type ListEnumDonationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DonationStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type DonationOptionWhereInput = {
    AND?: DonationOptionWhereInput | DonationOptionWhereInput[]
    OR?: DonationOptionWhereInput[]
    NOT?: DonationOptionWhereInput | DonationOptionWhereInput[]
    id?: StringFilter<"DonationOption"> | string
    name?: StringFilter<"DonationOption"> | string
    description?: StringFilter<"DonationOption"> | string
    suggestedAmount?: FloatFilter<"DonationOption"> | number
    image?: StringFilter<"DonationOption"> | string
    stripePriceId?: StringFilter<"DonationOption"> | string
    isFeatured?: BoolFilter<"DonationOption"> | boolean
    createdAt?: DateTimeFilter<"DonationOption"> | Date | string
    updatedAt?: DateTimeFilter<"DonationOption"> | Date | string
    donationItems?: DonationItemListRelationFilter
  }

  export type DonationOptionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    suggestedAmount?: SortOrder
    image?: SortOrder
    stripePriceId?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    donationItems?: DonationItemOrderByRelationAggregateInput
  }

  export type DonationOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DonationOptionWhereInput | DonationOptionWhereInput[]
    OR?: DonationOptionWhereInput[]
    NOT?: DonationOptionWhereInput | DonationOptionWhereInput[]
    name?: StringFilter<"DonationOption"> | string
    description?: StringFilter<"DonationOption"> | string
    suggestedAmount?: FloatFilter<"DonationOption"> | number
    image?: StringFilter<"DonationOption"> | string
    stripePriceId?: StringFilter<"DonationOption"> | string
    isFeatured?: BoolFilter<"DonationOption"> | boolean
    createdAt?: DateTimeFilter<"DonationOption"> | Date | string
    updatedAt?: DateTimeFilter<"DonationOption"> | Date | string
    donationItems?: DonationItemListRelationFilter
  }, "id">

  export type DonationOptionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    suggestedAmount?: SortOrder
    image?: SortOrder
    stripePriceId?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DonationOptionCountOrderByAggregateInput
    _avg?: DonationOptionAvgOrderByAggregateInput
    _max?: DonationOptionMaxOrderByAggregateInput
    _min?: DonationOptionMinOrderByAggregateInput
    _sum?: DonationOptionSumOrderByAggregateInput
  }

  export type DonationOptionScalarWhereWithAggregatesInput = {
    AND?: DonationOptionScalarWhereWithAggregatesInput | DonationOptionScalarWhereWithAggregatesInput[]
    OR?: DonationOptionScalarWhereWithAggregatesInput[]
    NOT?: DonationOptionScalarWhereWithAggregatesInput | DonationOptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DonationOption"> | string
    name?: StringWithAggregatesFilter<"DonationOption"> | string
    description?: StringWithAggregatesFilter<"DonationOption"> | string
    suggestedAmount?: FloatWithAggregatesFilter<"DonationOption"> | number
    image?: StringWithAggregatesFilter<"DonationOption"> | string
    stripePriceId?: StringWithAggregatesFilter<"DonationOption"> | string
    isFeatured?: BoolWithAggregatesFilter<"DonationOption"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DonationOption"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DonationOption"> | Date | string
  }

  export type DonationWhereInput = {
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    id?: StringFilter<"Donation"> | string
    donorId?: StringNullableFilter<"Donation"> | string | null
    status?: EnumDonationStatusFilter<"Donation"> | $Enums.DonationStatus
    totalAmount?: FloatFilter<"Donation"> | number
    paymentId?: StringNullableFilter<"Donation"> | string | null
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    updatedAt?: DateTimeFilter<"Donation"> | Date | string
    items?: DonationItemListRelationFilter
  }

  export type DonationOrderByWithRelationInput = {
    id?: SortOrder
    donorId?: SortOrderInput | SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: DonationItemOrderByRelationAggregateInput
  }

  export type DonationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    donorId?: StringNullableFilter<"Donation"> | string | null
    status?: EnumDonationStatusFilter<"Donation"> | $Enums.DonationStatus
    totalAmount?: FloatFilter<"Donation"> | number
    paymentId?: StringNullableFilter<"Donation"> | string | null
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    updatedAt?: DateTimeFilter<"Donation"> | Date | string
    items?: DonationItemListRelationFilter
  }, "id">

  export type DonationOrderByWithAggregationInput = {
    id?: SortOrder
    donorId?: SortOrderInput | SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DonationCountOrderByAggregateInput
    _avg?: DonationAvgOrderByAggregateInput
    _max?: DonationMaxOrderByAggregateInput
    _min?: DonationMinOrderByAggregateInput
    _sum?: DonationSumOrderByAggregateInput
  }

  export type DonationScalarWhereWithAggregatesInput = {
    AND?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    OR?: DonationScalarWhereWithAggregatesInput[]
    NOT?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Donation"> | string
    donorId?: StringNullableWithAggregatesFilter<"Donation"> | string | null
    status?: EnumDonationStatusWithAggregatesFilter<"Donation"> | $Enums.DonationStatus
    totalAmount?: FloatWithAggregatesFilter<"Donation"> | number
    paymentId?: StringNullableWithAggregatesFilter<"Donation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Donation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Donation"> | Date | string
  }

  export type DonationItemWhereInput = {
    AND?: DonationItemWhereInput | DonationItemWhereInput[]
    OR?: DonationItemWhereInput[]
    NOT?: DonationItemWhereInput | DonationItemWhereInput[]
    id?: StringFilter<"DonationItem"> | string
    donationId?: StringFilter<"DonationItem"> | string
    donationOptionId?: StringFilter<"DonationItem"> | string
    quantity?: IntFilter<"DonationItem"> | number
    amount?: FloatFilter<"DonationItem"> | number
    donation?: XOR<DonationScalarRelationFilter, DonationWhereInput>
    donationOption?: XOR<DonationOptionScalarRelationFilter, DonationOptionWhereInput>
  }

  export type DonationItemOrderByWithRelationInput = {
    id?: SortOrder
    donationId?: SortOrder
    donationOptionId?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
    donation?: DonationOrderByWithRelationInput
    donationOption?: DonationOptionOrderByWithRelationInput
  }

  export type DonationItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DonationItemWhereInput | DonationItemWhereInput[]
    OR?: DonationItemWhereInput[]
    NOT?: DonationItemWhereInput | DonationItemWhereInput[]
    donationId?: StringFilter<"DonationItem"> | string
    donationOptionId?: StringFilter<"DonationItem"> | string
    quantity?: IntFilter<"DonationItem"> | number
    amount?: FloatFilter<"DonationItem"> | number
    donation?: XOR<DonationScalarRelationFilter, DonationWhereInput>
    donationOption?: XOR<DonationOptionScalarRelationFilter, DonationOptionWhereInput>
  }, "id">

  export type DonationItemOrderByWithAggregationInput = {
    id?: SortOrder
    donationId?: SortOrder
    donationOptionId?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
    _count?: DonationItemCountOrderByAggregateInput
    _avg?: DonationItemAvgOrderByAggregateInput
    _max?: DonationItemMaxOrderByAggregateInput
    _min?: DonationItemMinOrderByAggregateInput
    _sum?: DonationItemSumOrderByAggregateInput
  }

  export type DonationItemScalarWhereWithAggregatesInput = {
    AND?: DonationItemScalarWhereWithAggregatesInput | DonationItemScalarWhereWithAggregatesInput[]
    OR?: DonationItemScalarWhereWithAggregatesInput[]
    NOT?: DonationItemScalarWhereWithAggregatesInput | DonationItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DonationItem"> | string
    donationId?: StringWithAggregatesFilter<"DonationItem"> | string
    donationOptionId?: StringWithAggregatesFilter<"DonationItem"> | string
    quantity?: IntWithAggregatesFilter<"DonationItem"> | number
    amount?: FloatWithAggregatesFilter<"DonationItem"> | number
  }

  export type DonationOptionCreateInput = {
    id?: string
    name: string
    description: string
    suggestedAmount: number
    image: string
    stripePriceId: string
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    donationItems?: DonationItemCreateNestedManyWithoutDonationOptionInput
  }

  export type DonationOptionUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    suggestedAmount: number
    image: string
    stripePriceId: string
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    donationItems?: DonationItemUncheckedCreateNestedManyWithoutDonationOptionInput
  }

  export type DonationOptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    suggestedAmount?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donationItems?: DonationItemUpdateManyWithoutDonationOptionNestedInput
  }

  export type DonationOptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    suggestedAmount?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donationItems?: DonationItemUncheckedUpdateManyWithoutDonationOptionNestedInput
  }

  export type DonationOptionCreateManyInput = {
    id?: string
    name: string
    description: string
    suggestedAmount: number
    image: string
    stripePriceId: string
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationOptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    suggestedAmount?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationOptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    suggestedAmount?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationCreateInput = {
    id?: string
    donorId?: string | null
    status?: $Enums.DonationStatus
    totalAmount: number
    paymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: DonationItemCreateNestedManyWithoutDonationInput
  }

  export type DonationUncheckedCreateInput = {
    id?: string
    donorId?: string | null
    status?: $Enums.DonationStatus
    totalAmount: number
    paymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: DonationItemUncheckedCreateNestedManyWithoutDonationInput
  }

  export type DonationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    donorId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDonationStatusFieldUpdateOperationsInput | $Enums.DonationStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: DonationItemUpdateManyWithoutDonationNestedInput
  }

  export type DonationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    donorId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDonationStatusFieldUpdateOperationsInput | $Enums.DonationStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: DonationItemUncheckedUpdateManyWithoutDonationNestedInput
  }

  export type DonationCreateManyInput = {
    id?: string
    donorId?: string | null
    status?: $Enums.DonationStatus
    totalAmount: number
    paymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    donorId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDonationStatusFieldUpdateOperationsInput | $Enums.DonationStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    donorId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDonationStatusFieldUpdateOperationsInput | $Enums.DonationStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationItemCreateInput = {
    id?: string
    quantity: number
    amount: number
    donation: DonationCreateNestedOneWithoutItemsInput
    donationOption: DonationOptionCreateNestedOneWithoutDonationItemsInput
  }

  export type DonationItemUncheckedCreateInput = {
    id?: string
    donationId: string
    donationOptionId: string
    quantity: number
    amount: number
  }

  export type DonationItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    donation?: DonationUpdateOneRequiredWithoutItemsNestedInput
    donationOption?: DonationOptionUpdateOneRequiredWithoutDonationItemsNestedInput
  }

  export type DonationItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    donationId?: StringFieldUpdateOperationsInput | string
    donationOptionId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type DonationItemCreateManyInput = {
    id?: string
    donationId: string
    donationOptionId: string
    quantity: number
    amount: number
  }

  export type DonationItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type DonationItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    donationId?: StringFieldUpdateOperationsInput | string
    donationOptionId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DonationItemListRelationFilter = {
    every?: DonationItemWhereInput
    some?: DonationItemWhereInput
    none?: DonationItemWhereInput
  }

  export type DonationItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DonationOptionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    suggestedAmount?: SortOrder
    image?: SortOrder
    stripePriceId?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationOptionAvgOrderByAggregateInput = {
    suggestedAmount?: SortOrder
  }

  export type DonationOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    suggestedAmount?: SortOrder
    image?: SortOrder
    stripePriceId?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationOptionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    suggestedAmount?: SortOrder
    image?: SortOrder
    stripePriceId?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationOptionSumOrderByAggregateInput = {
    suggestedAmount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumDonationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DonationStatus | EnumDonationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DonationStatus[] | ListEnumDonationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DonationStatus[] | ListEnumDonationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDonationStatusFilter<$PrismaModel> | $Enums.DonationStatus
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DonationCountOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    paymentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type DonationMaxOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    paymentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationMinOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    paymentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumDonationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DonationStatus | EnumDonationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DonationStatus[] | ListEnumDonationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DonationStatus[] | ListEnumDonationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDonationStatusWithAggregatesFilter<$PrismaModel> | $Enums.DonationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDonationStatusFilter<$PrismaModel>
    _max?: NestedEnumDonationStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DonationScalarRelationFilter = {
    is?: DonationWhereInput
    isNot?: DonationWhereInput
  }

  export type DonationOptionScalarRelationFilter = {
    is?: DonationOptionWhereInput
    isNot?: DonationOptionWhereInput
  }

  export type DonationItemCountOrderByAggregateInput = {
    id?: SortOrder
    donationId?: SortOrder
    donationOptionId?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
  }

  export type DonationItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    amount?: SortOrder
  }

  export type DonationItemMaxOrderByAggregateInput = {
    id?: SortOrder
    donationId?: SortOrder
    donationOptionId?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
  }

  export type DonationItemMinOrderByAggregateInput = {
    id?: SortOrder
    donationId?: SortOrder
    donationOptionId?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
  }

  export type DonationItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    amount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DonationItemCreateNestedManyWithoutDonationOptionInput = {
    create?: XOR<DonationItemCreateWithoutDonationOptionInput, DonationItemUncheckedCreateWithoutDonationOptionInput> | DonationItemCreateWithoutDonationOptionInput[] | DonationItemUncheckedCreateWithoutDonationOptionInput[]
    connectOrCreate?: DonationItemCreateOrConnectWithoutDonationOptionInput | DonationItemCreateOrConnectWithoutDonationOptionInput[]
    createMany?: DonationItemCreateManyDonationOptionInputEnvelope
    connect?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
  }

  export type DonationItemUncheckedCreateNestedManyWithoutDonationOptionInput = {
    create?: XOR<DonationItemCreateWithoutDonationOptionInput, DonationItemUncheckedCreateWithoutDonationOptionInput> | DonationItemCreateWithoutDonationOptionInput[] | DonationItemUncheckedCreateWithoutDonationOptionInput[]
    connectOrCreate?: DonationItemCreateOrConnectWithoutDonationOptionInput | DonationItemCreateOrConnectWithoutDonationOptionInput[]
    createMany?: DonationItemCreateManyDonationOptionInputEnvelope
    connect?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DonationItemUpdateManyWithoutDonationOptionNestedInput = {
    create?: XOR<DonationItemCreateWithoutDonationOptionInput, DonationItemUncheckedCreateWithoutDonationOptionInput> | DonationItemCreateWithoutDonationOptionInput[] | DonationItemUncheckedCreateWithoutDonationOptionInput[]
    connectOrCreate?: DonationItemCreateOrConnectWithoutDonationOptionInput | DonationItemCreateOrConnectWithoutDonationOptionInput[]
    upsert?: DonationItemUpsertWithWhereUniqueWithoutDonationOptionInput | DonationItemUpsertWithWhereUniqueWithoutDonationOptionInput[]
    createMany?: DonationItemCreateManyDonationOptionInputEnvelope
    set?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
    disconnect?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
    delete?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
    connect?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
    update?: DonationItemUpdateWithWhereUniqueWithoutDonationOptionInput | DonationItemUpdateWithWhereUniqueWithoutDonationOptionInput[]
    updateMany?: DonationItemUpdateManyWithWhereWithoutDonationOptionInput | DonationItemUpdateManyWithWhereWithoutDonationOptionInput[]
    deleteMany?: DonationItemScalarWhereInput | DonationItemScalarWhereInput[]
  }

  export type DonationItemUncheckedUpdateManyWithoutDonationOptionNestedInput = {
    create?: XOR<DonationItemCreateWithoutDonationOptionInput, DonationItemUncheckedCreateWithoutDonationOptionInput> | DonationItemCreateWithoutDonationOptionInput[] | DonationItemUncheckedCreateWithoutDonationOptionInput[]
    connectOrCreate?: DonationItemCreateOrConnectWithoutDonationOptionInput | DonationItemCreateOrConnectWithoutDonationOptionInput[]
    upsert?: DonationItemUpsertWithWhereUniqueWithoutDonationOptionInput | DonationItemUpsertWithWhereUniqueWithoutDonationOptionInput[]
    createMany?: DonationItemCreateManyDonationOptionInputEnvelope
    set?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
    disconnect?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
    delete?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
    connect?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
    update?: DonationItemUpdateWithWhereUniqueWithoutDonationOptionInput | DonationItemUpdateWithWhereUniqueWithoutDonationOptionInput[]
    updateMany?: DonationItemUpdateManyWithWhereWithoutDonationOptionInput | DonationItemUpdateManyWithWhereWithoutDonationOptionInput[]
    deleteMany?: DonationItemScalarWhereInput | DonationItemScalarWhereInput[]
  }

  export type DonationItemCreateNestedManyWithoutDonationInput = {
    create?: XOR<DonationItemCreateWithoutDonationInput, DonationItemUncheckedCreateWithoutDonationInput> | DonationItemCreateWithoutDonationInput[] | DonationItemUncheckedCreateWithoutDonationInput[]
    connectOrCreate?: DonationItemCreateOrConnectWithoutDonationInput | DonationItemCreateOrConnectWithoutDonationInput[]
    createMany?: DonationItemCreateManyDonationInputEnvelope
    connect?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
  }

  export type DonationItemUncheckedCreateNestedManyWithoutDonationInput = {
    create?: XOR<DonationItemCreateWithoutDonationInput, DonationItemUncheckedCreateWithoutDonationInput> | DonationItemCreateWithoutDonationInput[] | DonationItemUncheckedCreateWithoutDonationInput[]
    connectOrCreate?: DonationItemCreateOrConnectWithoutDonationInput | DonationItemCreateOrConnectWithoutDonationInput[]
    createMany?: DonationItemCreateManyDonationInputEnvelope
    connect?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumDonationStatusFieldUpdateOperationsInput = {
    set?: $Enums.DonationStatus
  }

  export type DonationItemUpdateManyWithoutDonationNestedInput = {
    create?: XOR<DonationItemCreateWithoutDonationInput, DonationItemUncheckedCreateWithoutDonationInput> | DonationItemCreateWithoutDonationInput[] | DonationItemUncheckedCreateWithoutDonationInput[]
    connectOrCreate?: DonationItemCreateOrConnectWithoutDonationInput | DonationItemCreateOrConnectWithoutDonationInput[]
    upsert?: DonationItemUpsertWithWhereUniqueWithoutDonationInput | DonationItemUpsertWithWhereUniqueWithoutDonationInput[]
    createMany?: DonationItemCreateManyDonationInputEnvelope
    set?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
    disconnect?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
    delete?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
    connect?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
    update?: DonationItemUpdateWithWhereUniqueWithoutDonationInput | DonationItemUpdateWithWhereUniqueWithoutDonationInput[]
    updateMany?: DonationItemUpdateManyWithWhereWithoutDonationInput | DonationItemUpdateManyWithWhereWithoutDonationInput[]
    deleteMany?: DonationItemScalarWhereInput | DonationItemScalarWhereInput[]
  }

  export type DonationItemUncheckedUpdateManyWithoutDonationNestedInput = {
    create?: XOR<DonationItemCreateWithoutDonationInput, DonationItemUncheckedCreateWithoutDonationInput> | DonationItemCreateWithoutDonationInput[] | DonationItemUncheckedCreateWithoutDonationInput[]
    connectOrCreate?: DonationItemCreateOrConnectWithoutDonationInput | DonationItemCreateOrConnectWithoutDonationInput[]
    upsert?: DonationItemUpsertWithWhereUniqueWithoutDonationInput | DonationItemUpsertWithWhereUniqueWithoutDonationInput[]
    createMany?: DonationItemCreateManyDonationInputEnvelope
    set?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
    disconnect?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
    delete?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
    connect?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
    update?: DonationItemUpdateWithWhereUniqueWithoutDonationInput | DonationItemUpdateWithWhereUniqueWithoutDonationInput[]
    updateMany?: DonationItemUpdateManyWithWhereWithoutDonationInput | DonationItemUpdateManyWithWhereWithoutDonationInput[]
    deleteMany?: DonationItemScalarWhereInput | DonationItemScalarWhereInput[]
  }

  export type DonationCreateNestedOneWithoutItemsInput = {
    create?: XOR<DonationCreateWithoutItemsInput, DonationUncheckedCreateWithoutItemsInput>
    connectOrCreate?: DonationCreateOrConnectWithoutItemsInput
    connect?: DonationWhereUniqueInput
  }

  export type DonationOptionCreateNestedOneWithoutDonationItemsInput = {
    create?: XOR<DonationOptionCreateWithoutDonationItemsInput, DonationOptionUncheckedCreateWithoutDonationItemsInput>
    connectOrCreate?: DonationOptionCreateOrConnectWithoutDonationItemsInput
    connect?: DonationOptionWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DonationUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<DonationCreateWithoutItemsInput, DonationUncheckedCreateWithoutItemsInput>
    connectOrCreate?: DonationCreateOrConnectWithoutItemsInput
    upsert?: DonationUpsertWithoutItemsInput
    connect?: DonationWhereUniqueInput
    update?: XOR<XOR<DonationUpdateToOneWithWhereWithoutItemsInput, DonationUpdateWithoutItemsInput>, DonationUncheckedUpdateWithoutItemsInput>
  }

  export type DonationOptionUpdateOneRequiredWithoutDonationItemsNestedInput = {
    create?: XOR<DonationOptionCreateWithoutDonationItemsInput, DonationOptionUncheckedCreateWithoutDonationItemsInput>
    connectOrCreate?: DonationOptionCreateOrConnectWithoutDonationItemsInput
    upsert?: DonationOptionUpsertWithoutDonationItemsInput
    connect?: DonationOptionWhereUniqueInput
    update?: XOR<XOR<DonationOptionUpdateToOneWithWhereWithoutDonationItemsInput, DonationOptionUpdateWithoutDonationItemsInput>, DonationOptionUncheckedUpdateWithoutDonationItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumDonationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DonationStatus | EnumDonationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DonationStatus[] | ListEnumDonationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DonationStatus[] | ListEnumDonationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDonationStatusFilter<$PrismaModel> | $Enums.DonationStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDonationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DonationStatus | EnumDonationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DonationStatus[] | ListEnumDonationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DonationStatus[] | ListEnumDonationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDonationStatusWithAggregatesFilter<$PrismaModel> | $Enums.DonationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDonationStatusFilter<$PrismaModel>
    _max?: NestedEnumDonationStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DonationItemCreateWithoutDonationOptionInput = {
    id?: string
    quantity: number
    amount: number
    donation: DonationCreateNestedOneWithoutItemsInput
  }

  export type DonationItemUncheckedCreateWithoutDonationOptionInput = {
    id?: string
    donationId: string
    quantity: number
    amount: number
  }

  export type DonationItemCreateOrConnectWithoutDonationOptionInput = {
    where: DonationItemWhereUniqueInput
    create: XOR<DonationItemCreateWithoutDonationOptionInput, DonationItemUncheckedCreateWithoutDonationOptionInput>
  }

  export type DonationItemCreateManyDonationOptionInputEnvelope = {
    data: DonationItemCreateManyDonationOptionInput | DonationItemCreateManyDonationOptionInput[]
    skipDuplicates?: boolean
  }

  export type DonationItemUpsertWithWhereUniqueWithoutDonationOptionInput = {
    where: DonationItemWhereUniqueInput
    update: XOR<DonationItemUpdateWithoutDonationOptionInput, DonationItemUncheckedUpdateWithoutDonationOptionInput>
    create: XOR<DonationItemCreateWithoutDonationOptionInput, DonationItemUncheckedCreateWithoutDonationOptionInput>
  }

  export type DonationItemUpdateWithWhereUniqueWithoutDonationOptionInput = {
    where: DonationItemWhereUniqueInput
    data: XOR<DonationItemUpdateWithoutDonationOptionInput, DonationItemUncheckedUpdateWithoutDonationOptionInput>
  }

  export type DonationItemUpdateManyWithWhereWithoutDonationOptionInput = {
    where: DonationItemScalarWhereInput
    data: XOR<DonationItemUpdateManyMutationInput, DonationItemUncheckedUpdateManyWithoutDonationOptionInput>
  }

  export type DonationItemScalarWhereInput = {
    AND?: DonationItemScalarWhereInput | DonationItemScalarWhereInput[]
    OR?: DonationItemScalarWhereInput[]
    NOT?: DonationItemScalarWhereInput | DonationItemScalarWhereInput[]
    id?: StringFilter<"DonationItem"> | string
    donationId?: StringFilter<"DonationItem"> | string
    donationOptionId?: StringFilter<"DonationItem"> | string
    quantity?: IntFilter<"DonationItem"> | number
    amount?: FloatFilter<"DonationItem"> | number
  }

  export type DonationItemCreateWithoutDonationInput = {
    id?: string
    quantity: number
    amount: number
    donationOption: DonationOptionCreateNestedOneWithoutDonationItemsInput
  }

  export type DonationItemUncheckedCreateWithoutDonationInput = {
    id?: string
    donationOptionId: string
    quantity: number
    amount: number
  }

  export type DonationItemCreateOrConnectWithoutDonationInput = {
    where: DonationItemWhereUniqueInput
    create: XOR<DonationItemCreateWithoutDonationInput, DonationItemUncheckedCreateWithoutDonationInput>
  }

  export type DonationItemCreateManyDonationInputEnvelope = {
    data: DonationItemCreateManyDonationInput | DonationItemCreateManyDonationInput[]
    skipDuplicates?: boolean
  }

  export type DonationItemUpsertWithWhereUniqueWithoutDonationInput = {
    where: DonationItemWhereUniqueInput
    update: XOR<DonationItemUpdateWithoutDonationInput, DonationItemUncheckedUpdateWithoutDonationInput>
    create: XOR<DonationItemCreateWithoutDonationInput, DonationItemUncheckedCreateWithoutDonationInput>
  }

  export type DonationItemUpdateWithWhereUniqueWithoutDonationInput = {
    where: DonationItemWhereUniqueInput
    data: XOR<DonationItemUpdateWithoutDonationInput, DonationItemUncheckedUpdateWithoutDonationInput>
  }

  export type DonationItemUpdateManyWithWhereWithoutDonationInput = {
    where: DonationItemScalarWhereInput
    data: XOR<DonationItemUpdateManyMutationInput, DonationItemUncheckedUpdateManyWithoutDonationInput>
  }

  export type DonationCreateWithoutItemsInput = {
    id?: string
    donorId?: string | null
    status?: $Enums.DonationStatus
    totalAmount: number
    paymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationUncheckedCreateWithoutItemsInput = {
    id?: string
    donorId?: string | null
    status?: $Enums.DonationStatus
    totalAmount: number
    paymentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationCreateOrConnectWithoutItemsInput = {
    where: DonationWhereUniqueInput
    create: XOR<DonationCreateWithoutItemsInput, DonationUncheckedCreateWithoutItemsInput>
  }

  export type DonationOptionCreateWithoutDonationItemsInput = {
    id?: string
    name: string
    description: string
    suggestedAmount: number
    image: string
    stripePriceId: string
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationOptionUncheckedCreateWithoutDonationItemsInput = {
    id?: string
    name: string
    description: string
    suggestedAmount: number
    image: string
    stripePriceId: string
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationOptionCreateOrConnectWithoutDonationItemsInput = {
    where: DonationOptionWhereUniqueInput
    create: XOR<DonationOptionCreateWithoutDonationItemsInput, DonationOptionUncheckedCreateWithoutDonationItemsInput>
  }

  export type DonationUpsertWithoutItemsInput = {
    update: XOR<DonationUpdateWithoutItemsInput, DonationUncheckedUpdateWithoutItemsInput>
    create: XOR<DonationCreateWithoutItemsInput, DonationUncheckedCreateWithoutItemsInput>
    where?: DonationWhereInput
  }

  export type DonationUpdateToOneWithWhereWithoutItemsInput = {
    where?: DonationWhereInput
    data: XOR<DonationUpdateWithoutItemsInput, DonationUncheckedUpdateWithoutItemsInput>
  }

  export type DonationUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    donorId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDonationStatusFieldUpdateOperationsInput | $Enums.DonationStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    donorId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDonationStatusFieldUpdateOperationsInput | $Enums.DonationStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationOptionUpsertWithoutDonationItemsInput = {
    update: XOR<DonationOptionUpdateWithoutDonationItemsInput, DonationOptionUncheckedUpdateWithoutDonationItemsInput>
    create: XOR<DonationOptionCreateWithoutDonationItemsInput, DonationOptionUncheckedCreateWithoutDonationItemsInput>
    where?: DonationOptionWhereInput
  }

  export type DonationOptionUpdateToOneWithWhereWithoutDonationItemsInput = {
    where?: DonationOptionWhereInput
    data: XOR<DonationOptionUpdateWithoutDonationItemsInput, DonationOptionUncheckedUpdateWithoutDonationItemsInput>
  }

  export type DonationOptionUpdateWithoutDonationItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    suggestedAmount?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationOptionUncheckedUpdateWithoutDonationItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    suggestedAmount?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationItemCreateManyDonationOptionInput = {
    id?: string
    donationId: string
    quantity: number
    amount: number
  }

  export type DonationItemUpdateWithoutDonationOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    donation?: DonationUpdateOneRequiredWithoutItemsNestedInput
  }

  export type DonationItemUncheckedUpdateWithoutDonationOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    donationId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type DonationItemUncheckedUpdateManyWithoutDonationOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    donationId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type DonationItemCreateManyDonationInput = {
    id?: string
    donationOptionId: string
    quantity: number
    amount: number
  }

  export type DonationItemUpdateWithoutDonationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    donationOption?: DonationOptionUpdateOneRequiredWithoutDonationItemsNestedInput
  }

  export type DonationItemUncheckedUpdateWithoutDonationInput = {
    id?: StringFieldUpdateOperationsInput | string
    donationOptionId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type DonationItemUncheckedUpdateManyWithoutDonationInput = {
    id?: StringFieldUpdateOperationsInput | string
    donationOptionId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}