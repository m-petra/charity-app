
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
 * Model Organisation
 * 
 */
export type Organisation = $Result.DefaultSelection<Prisma.$OrganisationPayload>
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
 * // Fetch zero or more Organisations
 * const organisations = await prisma.organisation.findMany()
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
   * // Fetch zero or more Organisations
   * const organisations = await prisma.organisation.findMany()
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
   * `prisma.organisation`: Exposes CRUD operations for the **Organisation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organisations
    * const organisations = await prisma.organisation.findMany()
    * ```
    */
  get organisation(): Prisma.OrganisationDelegate<ExtArgs, ClientOptions>;

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
    Organisation: 'Organisation',
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
      modelProps: "organisation" | "donation" | "donationItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organisation: {
        payload: Prisma.$OrganisationPayload<ExtArgs>
        fields: Prisma.OrganisationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganisationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganisationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>
          }
          findFirst: {
            args: Prisma.OrganisationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganisationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>
          }
          findMany: {
            args: Prisma.OrganisationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>[]
          }
          create: {
            args: Prisma.OrganisationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>
          }
          createMany: {
            args: Prisma.OrganisationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganisationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>[]
          }
          delete: {
            args: Prisma.OrganisationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>
          }
          update: {
            args: Prisma.OrganisationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>
          }
          deleteMany: {
            args: Prisma.OrganisationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganisationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganisationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>[]
          }
          upsert: {
            args: Prisma.OrganisationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>
          }
          aggregate: {
            args: Prisma.OrganisationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganisation>
          }
          groupBy: {
            args: Prisma.OrganisationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganisationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganisationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganisationCountAggregateOutputType> | number
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
    organisation?: OrganisationOmit
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
   * Count Type OrganisationCountOutputType
   */

  export type OrganisationCountOutputType = {
    donationItems: number
  }

  export type OrganisationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donationItems?: boolean | OrganisationCountOutputTypeCountDonationItemsArgs
  }

  // Custom InputTypes
  /**
   * OrganisationCountOutputType without action
   */
  export type OrganisationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationCountOutputType
     */
    select?: OrganisationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganisationCountOutputType without action
   */
  export type OrganisationCountOutputTypeCountDonationItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model Organisation
   */

  export type AggregateOrganisation = {
    _count: OrganisationCountAggregateOutputType | null
    _avg: OrganisationAvgAggregateOutputType | null
    _sum: OrganisationSumAggregateOutputType | null
    _min: OrganisationMinAggregateOutputType | null
    _max: OrganisationMaxAggregateOutputType | null
  }

  export type OrganisationAvgAggregateOutputType = {
    suggestedAmount: number | null
  }

  export type OrganisationSumAggregateOutputType = {
    suggestedAmount: number | null
  }

  export type OrganisationMinAggregateOutputType = {
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

  export type OrganisationMaxAggregateOutputType = {
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

  export type OrganisationCountAggregateOutputType = {
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


  export type OrganisationAvgAggregateInputType = {
    suggestedAmount?: true
  }

  export type OrganisationSumAggregateInputType = {
    suggestedAmount?: true
  }

  export type OrganisationMinAggregateInputType = {
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

  export type OrganisationMaxAggregateInputType = {
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

  export type OrganisationCountAggregateInputType = {
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

  export type OrganisationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organisation to aggregate.
     */
    where?: OrganisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisations to fetch.
     */
    orderBy?: OrganisationOrderByWithRelationInput | OrganisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organisations
    **/
    _count?: true | OrganisationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganisationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganisationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganisationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganisationMaxAggregateInputType
  }

  export type GetOrganisationAggregateType<T extends OrganisationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganisation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganisation[P]>
      : GetScalarType<T[P], AggregateOrganisation[P]>
  }




  export type OrganisationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganisationWhereInput
    orderBy?: OrganisationOrderByWithAggregationInput | OrganisationOrderByWithAggregationInput[]
    by: OrganisationScalarFieldEnum[] | OrganisationScalarFieldEnum
    having?: OrganisationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganisationCountAggregateInputType | true
    _avg?: OrganisationAvgAggregateInputType
    _sum?: OrganisationSumAggregateInputType
    _min?: OrganisationMinAggregateInputType
    _max?: OrganisationMaxAggregateInputType
  }

  export type OrganisationGroupByOutputType = {
    id: string
    name: string
    description: string
    suggestedAmount: number
    image: string
    stripePriceId: string
    isFeatured: boolean
    createdAt: Date
    updatedAt: Date
    _count: OrganisationCountAggregateOutputType | null
    _avg: OrganisationAvgAggregateOutputType | null
    _sum: OrganisationSumAggregateOutputType | null
    _min: OrganisationMinAggregateOutputType | null
    _max: OrganisationMaxAggregateOutputType | null
  }

  type GetOrganisationGroupByPayload<T extends OrganisationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganisationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganisationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganisationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganisationGroupByOutputType[P]>
        }
      >
    >


  export type OrganisationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    suggestedAmount?: boolean
    image?: boolean
    stripePriceId?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donationItems?: boolean | Organisation$donationItemsArgs<ExtArgs>
    _count?: boolean | OrganisationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organisation"]>

  export type OrganisationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    suggestedAmount?: boolean
    image?: boolean
    stripePriceId?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organisation"]>

  export type OrganisationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    suggestedAmount?: boolean
    image?: boolean
    stripePriceId?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organisation"]>

  export type OrganisationSelectScalar = {
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

  export type OrganisationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "suggestedAmount" | "image" | "stripePriceId" | "isFeatured" | "createdAt" | "updatedAt", ExtArgs["result"]["organisation"]>
  export type OrganisationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donationItems?: boolean | Organisation$donationItemsArgs<ExtArgs>
    _count?: boolean | OrganisationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganisationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganisationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganisationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organisation"
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
    }, ExtArgs["result"]["organisation"]>
    composites: {}
  }

  type OrganisationGetPayload<S extends boolean | null | undefined | OrganisationDefaultArgs> = $Result.GetResult<Prisma.$OrganisationPayload, S>

  type OrganisationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganisationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganisationCountAggregateInputType | true
    }

  export interface OrganisationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organisation'], meta: { name: 'Organisation' } }
    /**
     * Find zero or one Organisation that matches the filter.
     * @param {OrganisationFindUniqueArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganisationFindUniqueArgs>(args: SelectSubset<T, OrganisationFindUniqueArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organisation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganisationFindUniqueOrThrowArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganisationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganisationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organisation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationFindFirstArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganisationFindFirstArgs>(args?: SelectSubset<T, OrganisationFindFirstArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organisation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationFindFirstOrThrowArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganisationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganisationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organisations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organisations
     * const organisations = await prisma.organisation.findMany()
     * 
     * // Get first 10 Organisations
     * const organisations = await prisma.organisation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organisationWithIdOnly = await prisma.organisation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganisationFindManyArgs>(args?: SelectSubset<T, OrganisationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organisation.
     * @param {OrganisationCreateArgs} args - Arguments to create a Organisation.
     * @example
     * // Create one Organisation
     * const Organisation = await prisma.organisation.create({
     *   data: {
     *     // ... data to create a Organisation
     *   }
     * })
     * 
     */
    create<T extends OrganisationCreateArgs>(args: SelectSubset<T, OrganisationCreateArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organisations.
     * @param {OrganisationCreateManyArgs} args - Arguments to create many Organisations.
     * @example
     * // Create many Organisations
     * const organisation = await prisma.organisation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganisationCreateManyArgs>(args?: SelectSubset<T, OrganisationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organisations and returns the data saved in the database.
     * @param {OrganisationCreateManyAndReturnArgs} args - Arguments to create many Organisations.
     * @example
     * // Create many Organisations
     * const organisation = await prisma.organisation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organisations and only return the `id`
     * const organisationWithIdOnly = await prisma.organisation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganisationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganisationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organisation.
     * @param {OrganisationDeleteArgs} args - Arguments to delete one Organisation.
     * @example
     * // Delete one Organisation
     * const Organisation = await prisma.organisation.delete({
     *   where: {
     *     // ... filter to delete one Organisation
     *   }
     * })
     * 
     */
    delete<T extends OrganisationDeleteArgs>(args: SelectSubset<T, OrganisationDeleteArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organisation.
     * @param {OrganisationUpdateArgs} args - Arguments to update one Organisation.
     * @example
     * // Update one Organisation
     * const organisation = await prisma.organisation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganisationUpdateArgs>(args: SelectSubset<T, OrganisationUpdateArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organisations.
     * @param {OrganisationDeleteManyArgs} args - Arguments to filter Organisations to delete.
     * @example
     * // Delete a few Organisations
     * const { count } = await prisma.organisation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganisationDeleteManyArgs>(args?: SelectSubset<T, OrganisationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organisations
     * const organisation = await prisma.organisation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganisationUpdateManyArgs>(args: SelectSubset<T, OrganisationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organisations and returns the data updated in the database.
     * @param {OrganisationUpdateManyAndReturnArgs} args - Arguments to update many Organisations.
     * @example
     * // Update many Organisations
     * const organisation = await prisma.organisation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organisations and only return the `id`
     * const organisationWithIdOnly = await prisma.organisation.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrganisationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganisationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organisation.
     * @param {OrganisationUpsertArgs} args - Arguments to update or create a Organisation.
     * @example
     * // Update or create a Organisation
     * const organisation = await prisma.organisation.upsert({
     *   create: {
     *     // ... data to create a Organisation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organisation we want to update
     *   }
     * })
     */
    upsert<T extends OrganisationUpsertArgs>(args: SelectSubset<T, OrganisationUpsertArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationCountArgs} args - Arguments to filter Organisations to count.
     * @example
     * // Count the number of Organisations
     * const count = await prisma.organisation.count({
     *   where: {
     *     // ... the filter for the Organisations we want to count
     *   }
     * })
    **/
    count<T extends OrganisationCountArgs>(
      args?: Subset<T, OrganisationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganisationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organisation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganisationAggregateArgs>(args: Subset<T, OrganisationAggregateArgs>): Prisma.PrismaPromise<GetOrganisationAggregateType<T>>

    /**
     * Group by Organisation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationGroupByArgs} args - Group by arguments.
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
      T extends OrganisationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganisationGroupByArgs['orderBy'] }
        : { orderBy?: OrganisationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganisationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganisationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organisation model
   */
  readonly fields: OrganisationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organisation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganisationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donationItems<T extends Organisation$donationItemsArgs<ExtArgs> = {}>(args?: Subset<T, Organisation$donationItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Organisation model
   */
  interface OrganisationFieldRefs {
    readonly id: FieldRef<"Organisation", 'String'>
    readonly name: FieldRef<"Organisation", 'String'>
    readonly description: FieldRef<"Organisation", 'String'>
    readonly suggestedAmount: FieldRef<"Organisation", 'Float'>
    readonly image: FieldRef<"Organisation", 'String'>
    readonly stripePriceId: FieldRef<"Organisation", 'String'>
    readonly isFeatured: FieldRef<"Organisation", 'Boolean'>
    readonly createdAt: FieldRef<"Organisation", 'DateTime'>
    readonly updatedAt: FieldRef<"Organisation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organisation findUnique
   */
  export type OrganisationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * Filter, which Organisation to fetch.
     */
    where: OrganisationWhereUniqueInput
  }

  /**
   * Organisation findUniqueOrThrow
   */
  export type OrganisationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * Filter, which Organisation to fetch.
     */
    where: OrganisationWhereUniqueInput
  }

  /**
   * Organisation findFirst
   */
  export type OrganisationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * Filter, which Organisation to fetch.
     */
    where?: OrganisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisations to fetch.
     */
    orderBy?: OrganisationOrderByWithRelationInput | OrganisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organisations.
     */
    cursor?: OrganisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organisations.
     */
    distinct?: OrganisationScalarFieldEnum | OrganisationScalarFieldEnum[]
  }

  /**
   * Organisation findFirstOrThrow
   */
  export type OrganisationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * Filter, which Organisation to fetch.
     */
    where?: OrganisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisations to fetch.
     */
    orderBy?: OrganisationOrderByWithRelationInput | OrganisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organisations.
     */
    cursor?: OrganisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organisations.
     */
    distinct?: OrganisationScalarFieldEnum | OrganisationScalarFieldEnum[]
  }

  /**
   * Organisation findMany
   */
  export type OrganisationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * Filter, which Organisations to fetch.
     */
    where?: OrganisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisations to fetch.
     */
    orderBy?: OrganisationOrderByWithRelationInput | OrganisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organisations.
     */
    cursor?: OrganisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisations.
     */
    skip?: number
    distinct?: OrganisationScalarFieldEnum | OrganisationScalarFieldEnum[]
  }

  /**
   * Organisation create
   */
  export type OrganisationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organisation.
     */
    data: XOR<OrganisationCreateInput, OrganisationUncheckedCreateInput>
  }

  /**
   * Organisation createMany
   */
  export type OrganisationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organisations.
     */
    data: OrganisationCreateManyInput | OrganisationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organisation createManyAndReturn
   */
  export type OrganisationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * The data used to create many Organisations.
     */
    data: OrganisationCreateManyInput | OrganisationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organisation update
   */
  export type OrganisationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organisation.
     */
    data: XOR<OrganisationUpdateInput, OrganisationUncheckedUpdateInput>
    /**
     * Choose, which Organisation to update.
     */
    where: OrganisationWhereUniqueInput
  }

  /**
   * Organisation updateMany
   */
  export type OrganisationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organisations.
     */
    data: XOR<OrganisationUpdateManyMutationInput, OrganisationUncheckedUpdateManyInput>
    /**
     * Filter which Organisations to update
     */
    where?: OrganisationWhereInput
    /**
     * Limit how many Organisations to update.
     */
    limit?: number
  }

  /**
   * Organisation updateManyAndReturn
   */
  export type OrganisationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * The data used to update Organisations.
     */
    data: XOR<OrganisationUpdateManyMutationInput, OrganisationUncheckedUpdateManyInput>
    /**
     * Filter which Organisations to update
     */
    where?: OrganisationWhereInput
    /**
     * Limit how many Organisations to update.
     */
    limit?: number
  }

  /**
   * Organisation upsert
   */
  export type OrganisationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organisation to update in case it exists.
     */
    where: OrganisationWhereUniqueInput
    /**
     * In case the Organisation found by the `where` argument doesn't exist, create a new Organisation with this data.
     */
    create: XOR<OrganisationCreateInput, OrganisationUncheckedCreateInput>
    /**
     * In case the Organisation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganisationUpdateInput, OrganisationUncheckedUpdateInput>
  }

  /**
   * Organisation delete
   */
  export type OrganisationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * Filter which Organisation to delete.
     */
    where: OrganisationWhereUniqueInput
  }

  /**
   * Organisation deleteMany
   */
  export type OrganisationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organisations to delete
     */
    where?: OrganisationWhereInput
    /**
     * Limit how many Organisations to delete.
     */
    limit?: number
  }

  /**
   * Organisation.donationItems
   */
  export type Organisation$donationItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Organisation without action
   */
  export type OrganisationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organisation
     */
    omit?: OrganisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
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
    organisationId: string | null
    quantity: number | null
    amount: number | null
  }

  export type DonationItemMaxAggregateOutputType = {
    id: string | null
    donationId: string | null
    organisationId: string | null
    quantity: number | null
    amount: number | null
  }

  export type DonationItemCountAggregateOutputType = {
    id: number
    donationId: number
    organisationId: number
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
    organisationId?: true
    quantity?: true
    amount?: true
  }

  export type DonationItemMaxAggregateInputType = {
    id?: true
    donationId?: true
    organisationId?: true
    quantity?: true
    amount?: true
  }

  export type DonationItemCountAggregateInputType = {
    id?: true
    donationId?: true
    organisationId?: true
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
    organisationId: string
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
    organisationId?: boolean
    quantity?: boolean
    amount?: boolean
    donation?: boolean | DonationDefaultArgs<ExtArgs>
    Organisation?: boolean | OrganisationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donationItem"]>

  export type DonationItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donationId?: boolean
    organisationId?: boolean
    quantity?: boolean
    amount?: boolean
    donation?: boolean | DonationDefaultArgs<ExtArgs>
    Organisation?: boolean | OrganisationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donationItem"]>

  export type DonationItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donationId?: boolean
    organisationId?: boolean
    quantity?: boolean
    amount?: boolean
    donation?: boolean | DonationDefaultArgs<ExtArgs>
    Organisation?: boolean | OrganisationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donationItem"]>

  export type DonationItemSelectScalar = {
    id?: boolean
    donationId?: boolean
    organisationId?: boolean
    quantity?: boolean
    amount?: boolean
  }

  export type DonationItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "donationId" | "organisationId" | "quantity" | "amount", ExtArgs["result"]["donationItem"]>
  export type DonationItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donation?: boolean | DonationDefaultArgs<ExtArgs>
    Organisation?: boolean | OrganisationDefaultArgs<ExtArgs>
  }
  export type DonationItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donation?: boolean | DonationDefaultArgs<ExtArgs>
    Organisation?: boolean | OrganisationDefaultArgs<ExtArgs>
  }
  export type DonationItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donation?: boolean | DonationDefaultArgs<ExtArgs>
    Organisation?: boolean | OrganisationDefaultArgs<ExtArgs>
  }

  export type $DonationItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DonationItem"
    objects: {
      donation: Prisma.$DonationPayload<ExtArgs>
      Organisation: Prisma.$OrganisationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      donationId: string
      organisationId: string
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
    Organisation<T extends OrganisationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganisationDefaultArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly organisationId: FieldRef<"DonationItem", 'String'>
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


  export const OrganisationScalarFieldEnum: {
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

  export type OrganisationScalarFieldEnum = (typeof OrganisationScalarFieldEnum)[keyof typeof OrganisationScalarFieldEnum]


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
    organisationId: 'organisationId',
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


  export type OrganisationWhereInput = {
    AND?: OrganisationWhereInput | OrganisationWhereInput[]
    OR?: OrganisationWhereInput[]
    NOT?: OrganisationWhereInput | OrganisationWhereInput[]
    id?: StringFilter<"Organisation"> | string
    name?: StringFilter<"Organisation"> | string
    description?: StringFilter<"Organisation"> | string
    suggestedAmount?: FloatFilter<"Organisation"> | number
    image?: StringFilter<"Organisation"> | string
    stripePriceId?: StringFilter<"Organisation"> | string
    isFeatured?: BoolFilter<"Organisation"> | boolean
    createdAt?: DateTimeFilter<"Organisation"> | Date | string
    updatedAt?: DateTimeFilter<"Organisation"> | Date | string
    donationItems?: DonationItemListRelationFilter
  }

  export type OrganisationOrderByWithRelationInput = {
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

  export type OrganisationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganisationWhereInput | OrganisationWhereInput[]
    OR?: OrganisationWhereInput[]
    NOT?: OrganisationWhereInput | OrganisationWhereInput[]
    name?: StringFilter<"Organisation"> | string
    description?: StringFilter<"Organisation"> | string
    suggestedAmount?: FloatFilter<"Organisation"> | number
    image?: StringFilter<"Organisation"> | string
    stripePriceId?: StringFilter<"Organisation"> | string
    isFeatured?: BoolFilter<"Organisation"> | boolean
    createdAt?: DateTimeFilter<"Organisation"> | Date | string
    updatedAt?: DateTimeFilter<"Organisation"> | Date | string
    donationItems?: DonationItemListRelationFilter
  }, "id">

  export type OrganisationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    suggestedAmount?: SortOrder
    image?: SortOrder
    stripePriceId?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganisationCountOrderByAggregateInput
    _avg?: OrganisationAvgOrderByAggregateInput
    _max?: OrganisationMaxOrderByAggregateInput
    _min?: OrganisationMinOrderByAggregateInput
    _sum?: OrganisationSumOrderByAggregateInput
  }

  export type OrganisationScalarWhereWithAggregatesInput = {
    AND?: OrganisationScalarWhereWithAggregatesInput | OrganisationScalarWhereWithAggregatesInput[]
    OR?: OrganisationScalarWhereWithAggregatesInput[]
    NOT?: OrganisationScalarWhereWithAggregatesInput | OrganisationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organisation"> | string
    name?: StringWithAggregatesFilter<"Organisation"> | string
    description?: StringWithAggregatesFilter<"Organisation"> | string
    suggestedAmount?: FloatWithAggregatesFilter<"Organisation"> | number
    image?: StringWithAggregatesFilter<"Organisation"> | string
    stripePriceId?: StringWithAggregatesFilter<"Organisation"> | string
    isFeatured?: BoolWithAggregatesFilter<"Organisation"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Organisation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organisation"> | Date | string
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
    organisationId?: StringFilter<"DonationItem"> | string
    quantity?: IntFilter<"DonationItem"> | number
    amount?: FloatFilter<"DonationItem"> | number
    donation?: XOR<DonationScalarRelationFilter, DonationWhereInput>
    Organisation?: XOR<OrganisationScalarRelationFilter, OrganisationWhereInput>
  }

  export type DonationItemOrderByWithRelationInput = {
    id?: SortOrder
    donationId?: SortOrder
    organisationId?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
    donation?: DonationOrderByWithRelationInput
    Organisation?: OrganisationOrderByWithRelationInput
  }

  export type DonationItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DonationItemWhereInput | DonationItemWhereInput[]
    OR?: DonationItemWhereInput[]
    NOT?: DonationItemWhereInput | DonationItemWhereInput[]
    donationId?: StringFilter<"DonationItem"> | string
    organisationId?: StringFilter<"DonationItem"> | string
    quantity?: IntFilter<"DonationItem"> | number
    amount?: FloatFilter<"DonationItem"> | number
    donation?: XOR<DonationScalarRelationFilter, DonationWhereInput>
    Organisation?: XOR<OrganisationScalarRelationFilter, OrganisationWhereInput>
  }, "id">

  export type DonationItemOrderByWithAggregationInput = {
    id?: SortOrder
    donationId?: SortOrder
    organisationId?: SortOrder
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
    organisationId?: StringWithAggregatesFilter<"DonationItem"> | string
    quantity?: IntWithAggregatesFilter<"DonationItem"> | number
    amount?: FloatWithAggregatesFilter<"DonationItem"> | number
  }

  export type OrganisationCreateInput = {
    id?: string
    name: string
    description: string
    suggestedAmount: number
    image: string
    stripePriceId: string
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    donationItems?: DonationItemCreateNestedManyWithoutOrganisationInput
  }

  export type OrganisationUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    suggestedAmount: number
    image: string
    stripePriceId: string
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    donationItems?: DonationItemUncheckedCreateNestedManyWithoutOrganisationInput
  }

  export type OrganisationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    suggestedAmount?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donationItems?: DonationItemUpdateManyWithoutOrganisationNestedInput
  }

  export type OrganisationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    suggestedAmount?: FloatFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donationItems?: DonationItemUncheckedUpdateManyWithoutOrganisationNestedInput
  }

  export type OrganisationCreateManyInput = {
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

  export type OrganisationUpdateManyMutationInput = {
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

  export type OrganisationUncheckedUpdateManyInput = {
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
    Organisation: OrganisationCreateNestedOneWithoutDonationItemsInput
  }

  export type DonationItemUncheckedCreateInput = {
    id?: string
    donationId: string
    organisationId: string
    quantity: number
    amount: number
  }

  export type DonationItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    donation?: DonationUpdateOneRequiredWithoutItemsNestedInput
    Organisation?: OrganisationUpdateOneRequiredWithoutDonationItemsNestedInput
  }

  export type DonationItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    donationId?: StringFieldUpdateOperationsInput | string
    organisationId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type DonationItemCreateManyInput = {
    id?: string
    donationId: string
    organisationId: string
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
    organisationId?: StringFieldUpdateOperationsInput | string
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

  export type OrganisationCountOrderByAggregateInput = {
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

  export type OrganisationAvgOrderByAggregateInput = {
    suggestedAmount?: SortOrder
  }

  export type OrganisationMaxOrderByAggregateInput = {
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

  export type OrganisationMinOrderByAggregateInput = {
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

  export type OrganisationSumOrderByAggregateInput = {
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

  export type OrganisationScalarRelationFilter = {
    is?: OrganisationWhereInput
    isNot?: OrganisationWhereInput
  }

  export type DonationItemCountOrderByAggregateInput = {
    id?: SortOrder
    donationId?: SortOrder
    organisationId?: SortOrder
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
    organisationId?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
  }

  export type DonationItemMinOrderByAggregateInput = {
    id?: SortOrder
    donationId?: SortOrder
    organisationId?: SortOrder
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

  export type DonationItemCreateNestedManyWithoutOrganisationInput = {
    create?: XOR<DonationItemCreateWithoutOrganisationInput, DonationItemUncheckedCreateWithoutOrganisationInput> | DonationItemCreateWithoutOrganisationInput[] | DonationItemUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: DonationItemCreateOrConnectWithoutOrganisationInput | DonationItemCreateOrConnectWithoutOrganisationInput[]
    createMany?: DonationItemCreateManyOrganisationInputEnvelope
    connect?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
  }

  export type DonationItemUncheckedCreateNestedManyWithoutOrganisationInput = {
    create?: XOR<DonationItemCreateWithoutOrganisationInput, DonationItemUncheckedCreateWithoutOrganisationInput> | DonationItemCreateWithoutOrganisationInput[] | DonationItemUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: DonationItemCreateOrConnectWithoutOrganisationInput | DonationItemCreateOrConnectWithoutOrganisationInput[]
    createMany?: DonationItemCreateManyOrganisationInputEnvelope
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

  export type DonationItemUpdateManyWithoutOrganisationNestedInput = {
    create?: XOR<DonationItemCreateWithoutOrganisationInput, DonationItemUncheckedCreateWithoutOrganisationInput> | DonationItemCreateWithoutOrganisationInput[] | DonationItemUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: DonationItemCreateOrConnectWithoutOrganisationInput | DonationItemCreateOrConnectWithoutOrganisationInput[]
    upsert?: DonationItemUpsertWithWhereUniqueWithoutOrganisationInput | DonationItemUpsertWithWhereUniqueWithoutOrganisationInput[]
    createMany?: DonationItemCreateManyOrganisationInputEnvelope
    set?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
    disconnect?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
    delete?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
    connect?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
    update?: DonationItemUpdateWithWhereUniqueWithoutOrganisationInput | DonationItemUpdateWithWhereUniqueWithoutOrganisationInput[]
    updateMany?: DonationItemUpdateManyWithWhereWithoutOrganisationInput | DonationItemUpdateManyWithWhereWithoutOrganisationInput[]
    deleteMany?: DonationItemScalarWhereInput | DonationItemScalarWhereInput[]
  }

  export type DonationItemUncheckedUpdateManyWithoutOrganisationNestedInput = {
    create?: XOR<DonationItemCreateWithoutOrganisationInput, DonationItemUncheckedCreateWithoutOrganisationInput> | DonationItemCreateWithoutOrganisationInput[] | DonationItemUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: DonationItemCreateOrConnectWithoutOrganisationInput | DonationItemCreateOrConnectWithoutOrganisationInput[]
    upsert?: DonationItemUpsertWithWhereUniqueWithoutOrganisationInput | DonationItemUpsertWithWhereUniqueWithoutOrganisationInput[]
    createMany?: DonationItemCreateManyOrganisationInputEnvelope
    set?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
    disconnect?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
    delete?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
    connect?: DonationItemWhereUniqueInput | DonationItemWhereUniqueInput[]
    update?: DonationItemUpdateWithWhereUniqueWithoutOrganisationInput | DonationItemUpdateWithWhereUniqueWithoutOrganisationInput[]
    updateMany?: DonationItemUpdateManyWithWhereWithoutOrganisationInput | DonationItemUpdateManyWithWhereWithoutOrganisationInput[]
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

  export type OrganisationCreateNestedOneWithoutDonationItemsInput = {
    create?: XOR<OrganisationCreateWithoutDonationItemsInput, OrganisationUncheckedCreateWithoutDonationItemsInput>
    connectOrCreate?: OrganisationCreateOrConnectWithoutDonationItemsInput
    connect?: OrganisationWhereUniqueInput
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

  export type OrganisationUpdateOneRequiredWithoutDonationItemsNestedInput = {
    create?: XOR<OrganisationCreateWithoutDonationItemsInput, OrganisationUncheckedCreateWithoutDonationItemsInput>
    connectOrCreate?: OrganisationCreateOrConnectWithoutDonationItemsInput
    upsert?: OrganisationUpsertWithoutDonationItemsInput
    connect?: OrganisationWhereUniqueInput
    update?: XOR<XOR<OrganisationUpdateToOneWithWhereWithoutDonationItemsInput, OrganisationUpdateWithoutDonationItemsInput>, OrganisationUncheckedUpdateWithoutDonationItemsInput>
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

  export type DonationItemCreateWithoutOrganisationInput = {
    id?: string
    quantity: number
    amount: number
    donation: DonationCreateNestedOneWithoutItemsInput
  }

  export type DonationItemUncheckedCreateWithoutOrganisationInput = {
    id?: string
    donationId: string
    quantity: number
    amount: number
  }

  export type DonationItemCreateOrConnectWithoutOrganisationInput = {
    where: DonationItemWhereUniqueInput
    create: XOR<DonationItemCreateWithoutOrganisationInput, DonationItemUncheckedCreateWithoutOrganisationInput>
  }

  export type DonationItemCreateManyOrganisationInputEnvelope = {
    data: DonationItemCreateManyOrganisationInput | DonationItemCreateManyOrganisationInput[]
    skipDuplicates?: boolean
  }

  export type DonationItemUpsertWithWhereUniqueWithoutOrganisationInput = {
    where: DonationItemWhereUniqueInput
    update: XOR<DonationItemUpdateWithoutOrganisationInput, DonationItemUncheckedUpdateWithoutOrganisationInput>
    create: XOR<DonationItemCreateWithoutOrganisationInput, DonationItemUncheckedCreateWithoutOrganisationInput>
  }

  export type DonationItemUpdateWithWhereUniqueWithoutOrganisationInput = {
    where: DonationItemWhereUniqueInput
    data: XOR<DonationItemUpdateWithoutOrganisationInput, DonationItemUncheckedUpdateWithoutOrganisationInput>
  }

  export type DonationItemUpdateManyWithWhereWithoutOrganisationInput = {
    where: DonationItemScalarWhereInput
    data: XOR<DonationItemUpdateManyMutationInput, DonationItemUncheckedUpdateManyWithoutOrganisationInput>
  }

  export type DonationItemScalarWhereInput = {
    AND?: DonationItemScalarWhereInput | DonationItemScalarWhereInput[]
    OR?: DonationItemScalarWhereInput[]
    NOT?: DonationItemScalarWhereInput | DonationItemScalarWhereInput[]
    id?: StringFilter<"DonationItem"> | string
    donationId?: StringFilter<"DonationItem"> | string
    organisationId?: StringFilter<"DonationItem"> | string
    quantity?: IntFilter<"DonationItem"> | number
    amount?: FloatFilter<"DonationItem"> | number
  }

  export type DonationItemCreateWithoutDonationInput = {
    id?: string
    quantity: number
    amount: number
    Organisation: OrganisationCreateNestedOneWithoutDonationItemsInput
  }

  export type DonationItemUncheckedCreateWithoutDonationInput = {
    id?: string
    organisationId: string
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

  export type OrganisationCreateWithoutDonationItemsInput = {
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

  export type OrganisationUncheckedCreateWithoutDonationItemsInput = {
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

  export type OrganisationCreateOrConnectWithoutDonationItemsInput = {
    where: OrganisationWhereUniqueInput
    create: XOR<OrganisationCreateWithoutDonationItemsInput, OrganisationUncheckedCreateWithoutDonationItemsInput>
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

  export type OrganisationUpsertWithoutDonationItemsInput = {
    update: XOR<OrganisationUpdateWithoutDonationItemsInput, OrganisationUncheckedUpdateWithoutDonationItemsInput>
    create: XOR<OrganisationCreateWithoutDonationItemsInput, OrganisationUncheckedCreateWithoutDonationItemsInput>
    where?: OrganisationWhereInput
  }

  export type OrganisationUpdateToOneWithWhereWithoutDonationItemsInput = {
    where?: OrganisationWhereInput
    data: XOR<OrganisationUpdateWithoutDonationItemsInput, OrganisationUncheckedUpdateWithoutDonationItemsInput>
  }

  export type OrganisationUpdateWithoutDonationItemsInput = {
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

  export type OrganisationUncheckedUpdateWithoutDonationItemsInput = {
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

  export type DonationItemCreateManyOrganisationInput = {
    id?: string
    donationId: string
    quantity: number
    amount: number
  }

  export type DonationItemUpdateWithoutOrganisationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    donation?: DonationUpdateOneRequiredWithoutItemsNestedInput
  }

  export type DonationItemUncheckedUpdateWithoutOrganisationInput = {
    id?: StringFieldUpdateOperationsInput | string
    donationId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type DonationItemUncheckedUpdateManyWithoutOrganisationInput = {
    id?: StringFieldUpdateOperationsInput | string
    donationId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type DonationItemCreateManyDonationInput = {
    id?: string
    organisationId: string
    quantity: number
    amount: number
  }

  export type DonationItemUpdateWithoutDonationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    Organisation?: OrganisationUpdateOneRequiredWithoutDonationItemsNestedInput
  }

  export type DonationItemUncheckedUpdateWithoutDonationInput = {
    id?: StringFieldUpdateOperationsInput | string
    organisationId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type DonationItemUncheckedUpdateManyWithoutDonationInput = {
    id?: StringFieldUpdateOperationsInput | string
    organisationId?: StringFieldUpdateOperationsInput | string
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