
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
 * Model city
 * 
 */
export type city = $Result.DefaultSelection<Prisma.$cityPayload>
/**
 * Model person
 * 
 */
export type person = $Result.DefaultSelection<Prisma.$personPayload>
/**
 * Model pet
 * 
 */
export type pet = $Result.DefaultSelection<Prisma.$petPayload>
/**
 * Model province
 * 
 */
export type province = $Result.DefaultSelection<Prisma.$provincePayload>
/**
 * Model shelter
 * 
 */
export type shelter = $Result.DefaultSelection<Prisma.$shelterPayload>
/**
 * Model trait
 * 
 */
export type trait = $Result.DefaultSelection<Prisma.$traitPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cities
 * const cities = await prisma.city.findMany()
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
   * // Fetch zero or more Cities
   * const cities = await prisma.city.findMany()
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
   * `prisma.city`: Exposes CRUD operations for the **city** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.cityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.person`: Exposes CRUD operations for the **person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.personDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pet`: Exposes CRUD operations for the **pet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pets
    * const pets = await prisma.pet.findMany()
    * ```
    */
  get pet(): Prisma.petDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.province`: Exposes CRUD operations for the **province** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Provinces
    * const provinces = await prisma.province.findMany()
    * ```
    */
  get province(): Prisma.provinceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shelter`: Exposes CRUD operations for the **shelter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shelters
    * const shelters = await prisma.shelter.findMany()
    * ```
    */
  get shelter(): Prisma.shelterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trait`: Exposes CRUD operations for the **trait** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Traits
    * const traits = await prisma.trait.findMany()
    * ```
    */
  get trait(): Prisma.traitDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    city: 'city',
    person: 'person',
    pet: 'pet',
    province: 'province',
    shelter: 'shelter',
    trait: 'trait'
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
      modelProps: "city" | "person" | "pet" | "province" | "shelter" | "trait"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      city: {
        payload: Prisma.$cityPayload<ExtArgs>
        fields: Prisma.cityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cityPayload>
          }
          findFirst: {
            args: Prisma.cityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cityPayload>
          }
          findMany: {
            args: Prisma.cityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cityPayload>[]
          }
          create: {
            args: Prisma.cityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cityPayload>
          }
          createMany: {
            args: Prisma.cityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cityPayload>[]
          }
          delete: {
            args: Prisma.cityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cityPayload>
          }
          update: {
            args: Prisma.cityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cityPayload>
          }
          deleteMany: {
            args: Prisma.cityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cityPayload>[]
          }
          upsert: {
            args: Prisma.cityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cityPayload>
          }
          aggregate: {
            args: Prisma.CityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCity>
          }
          groupBy: {
            args: Prisma.cityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CityGroupByOutputType>[]
          }
          count: {
            args: Prisma.cityCountArgs<ExtArgs>
            result: $Utils.Optional<CityCountAggregateOutputType> | number
          }
        }
      }
      person: {
        payload: Prisma.$personPayload<ExtArgs>
        fields: Prisma.personFieldRefs
        operations: {
          findUnique: {
            args: Prisma.personFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.personFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          findFirst: {
            args: Prisma.personFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.personFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          findMany: {
            args: Prisma.personFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>[]
          }
          create: {
            args: Prisma.personCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          createMany: {
            args: Prisma.personCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.personCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>[]
          }
          delete: {
            args: Prisma.personDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          update: {
            args: Prisma.personUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          deleteMany: {
            args: Prisma.personDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.personUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.personUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>[]
          }
          upsert: {
            args: Prisma.personUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.personGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.personCountArgs<ExtArgs>
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
      pet: {
        payload: Prisma.$petPayload<ExtArgs>
        fields: Prisma.petFieldRefs
        operations: {
          findUnique: {
            args: Prisma.petFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.petFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>
          }
          findFirst: {
            args: Prisma.petFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.petFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>
          }
          findMany: {
            args: Prisma.petFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>[]
          }
          create: {
            args: Prisma.petCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>
          }
          createMany: {
            args: Prisma.petCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.petCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>[]
          }
          delete: {
            args: Prisma.petDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>
          }
          update: {
            args: Prisma.petUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>
          }
          deleteMany: {
            args: Prisma.petDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.petUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.petUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>[]
          }
          upsert: {
            args: Prisma.petUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>
          }
          aggregate: {
            args: Prisma.PetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePet>
          }
          groupBy: {
            args: Prisma.petGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetGroupByOutputType>[]
          }
          count: {
            args: Prisma.petCountArgs<ExtArgs>
            result: $Utils.Optional<PetCountAggregateOutputType> | number
          }
        }
      }
      province: {
        payload: Prisma.$provincePayload<ExtArgs>
        fields: Prisma.provinceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.provinceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.provinceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincePayload>
          }
          findFirst: {
            args: Prisma.provinceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.provinceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincePayload>
          }
          findMany: {
            args: Prisma.provinceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincePayload>[]
          }
          create: {
            args: Prisma.provinceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincePayload>
          }
          createMany: {
            args: Prisma.provinceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.provinceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincePayload>[]
          }
          delete: {
            args: Prisma.provinceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincePayload>
          }
          update: {
            args: Prisma.provinceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincePayload>
          }
          deleteMany: {
            args: Prisma.provinceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.provinceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.provinceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincePayload>[]
          }
          upsert: {
            args: Prisma.provinceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincePayload>
          }
          aggregate: {
            args: Prisma.ProvinceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvince>
          }
          groupBy: {
            args: Prisma.provinceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProvinceGroupByOutputType>[]
          }
          count: {
            args: Prisma.provinceCountArgs<ExtArgs>
            result: $Utils.Optional<ProvinceCountAggregateOutputType> | number
          }
        }
      }
      shelter: {
        payload: Prisma.$shelterPayload<ExtArgs>
        fields: Prisma.shelterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.shelterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shelterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.shelterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shelterPayload>
          }
          findFirst: {
            args: Prisma.shelterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shelterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.shelterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shelterPayload>
          }
          findMany: {
            args: Prisma.shelterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shelterPayload>[]
          }
          create: {
            args: Prisma.shelterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shelterPayload>
          }
          createMany: {
            args: Prisma.shelterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.shelterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shelterPayload>[]
          }
          delete: {
            args: Prisma.shelterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shelterPayload>
          }
          update: {
            args: Prisma.shelterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shelterPayload>
          }
          deleteMany: {
            args: Prisma.shelterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.shelterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.shelterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shelterPayload>[]
          }
          upsert: {
            args: Prisma.shelterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shelterPayload>
          }
          aggregate: {
            args: Prisma.ShelterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShelter>
          }
          groupBy: {
            args: Prisma.shelterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShelterGroupByOutputType>[]
          }
          count: {
            args: Prisma.shelterCountArgs<ExtArgs>
            result: $Utils.Optional<ShelterCountAggregateOutputType> | number
          }
        }
      }
      trait: {
        payload: Prisma.$traitPayload<ExtArgs>
        fields: Prisma.traitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.traitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$traitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.traitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$traitPayload>
          }
          findFirst: {
            args: Prisma.traitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$traitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.traitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$traitPayload>
          }
          findMany: {
            args: Prisma.traitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$traitPayload>[]
          }
          create: {
            args: Prisma.traitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$traitPayload>
          }
          createMany: {
            args: Prisma.traitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.traitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$traitPayload>[]
          }
          delete: {
            args: Prisma.traitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$traitPayload>
          }
          update: {
            args: Prisma.traitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$traitPayload>
          }
          deleteMany: {
            args: Prisma.traitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.traitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.traitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$traitPayload>[]
          }
          upsert: {
            args: Prisma.traitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$traitPayload>
          }
          aggregate: {
            args: Prisma.TraitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrait>
          }
          groupBy: {
            args: Prisma.traitGroupByArgs<ExtArgs>
            result: $Utils.Optional<TraitGroupByOutputType>[]
          }
          count: {
            args: Prisma.traitCountArgs<ExtArgs>
            result: $Utils.Optional<TraitCountAggregateOutputType> | number
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
    city?: cityOmit
    person?: personOmit
    pet?: petOmit
    province?: provinceOmit
    shelter?: shelterOmit
    trait?: traitOmit
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
   * Count Type CityCountOutputType
   */

  export type CityCountOutputType = {
    person: number
    shelter: number
  }

  export type CityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | CityCountOutputTypeCountPersonArgs
    shelter?: boolean | CityCountOutputTypeCountShelterArgs
  }

  // Custom InputTypes
  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountPersonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: personWhereInput
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountShelterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shelterWhereInput
  }


  /**
   * Count Type PersonCountOutputType
   */

  export type PersonCountOutputType = {
    pet: number
    shelter: number
  }

  export type PersonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PersonCountOutputTypeCountPetArgs
    shelter?: boolean | PersonCountOutputTypeCountShelterArgs
  }

  // Custom InputTypes
  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCountOutputType
     */
    select?: PersonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountPetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: petWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountShelterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shelterWhereInput
  }


  /**
   * Count Type PetCountOutputType
   */

  export type PetCountOutputType = {
    traits: number
  }

  export type PetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    traits?: boolean | PetCountOutputTypeCountTraitsArgs
  }

  // Custom InputTypes
  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCountOutputType
     */
    select?: PetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountTraitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: traitWhereInput
  }


  /**
   * Count Type ProvinceCountOutputType
   */

  export type ProvinceCountOutputType = {
    city: number
  }

  export type ProvinceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | ProvinceCountOutputTypeCountCityArgs
  }

  // Custom InputTypes
  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvinceCountOutputType
     */
    select?: ProvinceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeCountCityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cityWhereInput
  }


  /**
   * Count Type TraitCountOutputType
   */

  export type TraitCountOutputType = {
    pets: number
  }

  export type TraitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | TraitCountOutputTypeCountPetsArgs
  }

  // Custom InputTypes
  /**
   * TraitCountOutputType without action
   */
  export type TraitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraitCountOutputType
     */
    select?: TraitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TraitCountOutputType without action
   */
  export type TraitCountOutputTypeCountPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: petWhereInput
  }


  /**
   * Models
   */

  /**
   * Model city
   */

  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityAvgAggregateOutputType = {
    id: number | null
    province_id: number | null
  }

  export type CitySumAggregateOutputType = {
    id: bigint | null
    province_id: bigint | null
  }

  export type CityMinAggregateOutputType = {
    id: bigint | null
    city: string | null
    province_id: bigint | null
  }

  export type CityMaxAggregateOutputType = {
    id: bigint | null
    city: string | null
    province_id: bigint | null
  }

  export type CityCountAggregateOutputType = {
    id: number
    city: number
    province_id: number
    _all: number
  }


  export type CityAvgAggregateInputType = {
    id?: true
    province_id?: true
  }

  export type CitySumAggregateInputType = {
    id?: true
    province_id?: true
  }

  export type CityMinAggregateInputType = {
    id?: true
    city?: true
    province_id?: true
  }

  export type CityMaxAggregateInputType = {
    id?: true
    city?: true
    province_id?: true
  }

  export type CityCountAggregateInputType = {
    id?: true
    city?: true
    province_id?: true
    _all?: true
  }

  export type CityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which city to aggregate.
     */
    where?: cityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: cityOrderByWithRelationInput | cityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type cityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cityWhereInput
    orderBy?: cityOrderByWithAggregationInput | cityOrderByWithAggregationInput[]
    by: CityScalarFieldEnum[] | CityScalarFieldEnum
    having?: cityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _avg?: CityAvgAggregateInputType
    _sum?: CitySumAggregateInputType
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }

  export type CityGroupByOutputType = {
    id: bigint
    city: string
    province_id: bigint
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends cityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type citySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    province_id?: boolean
    province?: boolean | provinceDefaultArgs<ExtArgs>
    person?: boolean | city$personArgs<ExtArgs>
    shelter?: boolean | city$shelterArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type citySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    province_id?: boolean
    province?: boolean | provinceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type citySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    province_id?: boolean
    province?: boolean | provinceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type citySelectScalar = {
    id?: boolean
    city?: boolean
    province_id?: boolean
  }

  export type cityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "city" | "province_id", ExtArgs["result"]["city"]>
  export type cityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    province?: boolean | provinceDefaultArgs<ExtArgs>
    person?: boolean | city$personArgs<ExtArgs>
    shelter?: boolean | city$shelterArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    province?: boolean | provinceDefaultArgs<ExtArgs>
  }
  export type cityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    province?: boolean | provinceDefaultArgs<ExtArgs>
  }

  export type $cityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "city"
    objects: {
      province: Prisma.$provincePayload<ExtArgs>
      person: Prisma.$personPayload<ExtArgs>[]
      shelter: Prisma.$shelterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      city: string
      province_id: bigint
    }, ExtArgs["result"]["city"]>
    composites: {}
  }

  type cityGetPayload<S extends boolean | null | undefined | cityDefaultArgs> = $Result.GetResult<Prisma.$cityPayload, S>

  type cityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface cityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['city'], meta: { name: 'city' } }
    /**
     * Find zero or one City that matches the filter.
     * @param {cityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cityFindUniqueArgs>(args: SelectSubset<T, cityFindUniqueArgs<ExtArgs>>): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one City that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cityFindUniqueOrThrowArgs>(args: SelectSubset<T, cityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cityFindFirstArgs>(args?: SelectSubset<T, cityFindFirstArgs<ExtArgs>>): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cityFindFirstOrThrowArgs>(args?: SelectSubset<T, cityFindFirstOrThrowArgs<ExtArgs>>): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cityFindManyArgs>(args?: SelectSubset<T, cityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a City.
     * @param {cityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
     */
    create<T extends cityCreateArgs>(args: SelectSubset<T, cityCreateArgs<ExtArgs>>): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cities.
     * @param {cityCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cityCreateManyArgs>(args?: SelectSubset<T, cityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cities and returns the data saved in the database.
     * @param {cityCreateManyAndReturnArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cities and only return the `id`
     * const cityWithIdOnly = await prisma.city.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cityCreateManyAndReturnArgs>(args?: SelectSubset<T, cityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a City.
     * @param {cityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
     */
    delete<T extends cityDeleteArgs>(args: SelectSubset<T, cityDeleteArgs<ExtArgs>>): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one City.
     * @param {cityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cityUpdateArgs>(args: SelectSubset<T, cityUpdateArgs<ExtArgs>>): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cities.
     * @param {cityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cityDeleteManyArgs>(args?: SelectSubset<T, cityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cityUpdateManyArgs>(args: SelectSubset<T, cityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities and returns the data updated in the database.
     * @param {cityUpdateManyAndReturnArgs} args - Arguments to update many Cities.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cities and only return the `id`
     * const cityWithIdOnly = await prisma.city.updateManyAndReturn({
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
    updateManyAndReturn<T extends cityUpdateManyAndReturnArgs>(args: SelectSubset<T, cityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one City.
     * @param {cityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
     */
    upsert<T extends cityUpsertArgs>(args: SelectSubset<T, cityUpsertArgs<ExtArgs>>): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends cityCountArgs>(
      args?: Subset<T, cityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityGroupByArgs} args - Group by arguments.
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
      T extends cityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cityGroupByArgs['orderBy'] }
        : { orderBy?: cityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the city model
   */
  readonly fields: cityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for city.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    province<T extends provinceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, provinceDefaultArgs<ExtArgs>>): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    person<T extends city$personArgs<ExtArgs> = {}>(args?: Subset<T, city$personArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shelter<T extends city$shelterArgs<ExtArgs> = {}>(args?: Subset<T, city$shelterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shelterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the city model
   */
  interface cityFieldRefs {
    readonly id: FieldRef<"city", 'BigInt'>
    readonly city: FieldRef<"city", 'String'>
    readonly province_id: FieldRef<"city", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * city findUnique
   */
  export type cityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null
    /**
     * Omit specific fields from the city
     */
    omit?: cityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cityInclude<ExtArgs> | null
    /**
     * Filter, which city to fetch.
     */
    where: cityWhereUniqueInput
  }

  /**
   * city findUniqueOrThrow
   */
  export type cityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null
    /**
     * Omit specific fields from the city
     */
    omit?: cityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cityInclude<ExtArgs> | null
    /**
     * Filter, which city to fetch.
     */
    where: cityWhereUniqueInput
  }

  /**
   * city findFirst
   */
  export type cityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null
    /**
     * Omit specific fields from the city
     */
    omit?: cityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cityInclude<ExtArgs> | null
    /**
     * Filter, which city to fetch.
     */
    where?: cityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: cityOrderByWithRelationInput | cityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cities.
     */
    cursor?: cityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * city findFirstOrThrow
   */
  export type cityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null
    /**
     * Omit specific fields from the city
     */
    omit?: cityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cityInclude<ExtArgs> | null
    /**
     * Filter, which city to fetch.
     */
    where?: cityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: cityOrderByWithRelationInput | cityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cities.
     */
    cursor?: cityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * city findMany
   */
  export type cityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null
    /**
     * Omit specific fields from the city
     */
    omit?: cityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cityInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where?: cityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: cityOrderByWithRelationInput | cityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cities.
     */
    cursor?: cityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * city create
   */
  export type cityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null
    /**
     * Omit specific fields from the city
     */
    omit?: cityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cityInclude<ExtArgs> | null
    /**
     * The data needed to create a city.
     */
    data: XOR<cityCreateInput, cityUncheckedCreateInput>
  }

  /**
   * city createMany
   */
  export type cityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cities.
     */
    data: cityCreateManyInput | cityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * city createManyAndReturn
   */
  export type cityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the city
     */
    omit?: cityOmit<ExtArgs> | null
    /**
     * The data used to create many cities.
     */
    data: cityCreateManyInput | cityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * city update
   */
  export type cityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null
    /**
     * Omit specific fields from the city
     */
    omit?: cityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cityInclude<ExtArgs> | null
    /**
     * The data needed to update a city.
     */
    data: XOR<cityUpdateInput, cityUncheckedUpdateInput>
    /**
     * Choose, which city to update.
     */
    where: cityWhereUniqueInput
  }

  /**
   * city updateMany
   */
  export type cityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cities.
     */
    data: XOR<cityUpdateManyMutationInput, cityUncheckedUpdateManyInput>
    /**
     * Filter which cities to update
     */
    where?: cityWhereInput
    /**
     * Limit how many cities to update.
     */
    limit?: number
  }

  /**
   * city updateManyAndReturn
   */
  export type cityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the city
     */
    omit?: cityOmit<ExtArgs> | null
    /**
     * The data used to update cities.
     */
    data: XOR<cityUpdateManyMutationInput, cityUncheckedUpdateManyInput>
    /**
     * Filter which cities to update
     */
    where?: cityWhereInput
    /**
     * Limit how many cities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * city upsert
   */
  export type cityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null
    /**
     * Omit specific fields from the city
     */
    omit?: cityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cityInclude<ExtArgs> | null
    /**
     * The filter to search for the city to update in case it exists.
     */
    where: cityWhereUniqueInput
    /**
     * In case the city found by the `where` argument doesn't exist, create a new city with this data.
     */
    create: XOR<cityCreateInput, cityUncheckedCreateInput>
    /**
     * In case the city was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cityUpdateInput, cityUncheckedUpdateInput>
  }

  /**
   * city delete
   */
  export type cityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null
    /**
     * Omit specific fields from the city
     */
    omit?: cityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cityInclude<ExtArgs> | null
    /**
     * Filter which city to delete.
     */
    where: cityWhereUniqueInput
  }

  /**
   * city deleteMany
   */
  export type cityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cities to delete
     */
    where?: cityWhereInput
    /**
     * Limit how many cities to delete.
     */
    limit?: number
  }

  /**
   * city.person
   */
  export type city$personArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    where?: personWhereInput
    orderBy?: personOrderByWithRelationInput | personOrderByWithRelationInput[]
    cursor?: personWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * city.shelter
   */
  export type city$shelterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shelterInclude<ExtArgs> | null
    where?: shelterWhereInput
    orderBy?: shelterOrderByWithRelationInput | shelterOrderByWithRelationInput[]
    cursor?: shelterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShelterScalarFieldEnum | ShelterScalarFieldEnum[]
  }

  /**
   * city without action
   */
  export type cityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null
    /**
     * Omit specific fields from the city
     */
    omit?: cityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cityInclude<ExtArgs> | null
  }


  /**
   * Model person
   */

  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonAvgAggregateOutputType = {
    id: number | null
    gender: number | null
    city_id: number | null
    phone: number | null
  }

  export type PersonSumAggregateOutputType = {
    id: bigint | null
    gender: number | null
    city_id: bigint | null
    phone: bigint | null
  }

  export type PersonMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    birth_date: Date | null
    gender: number | null
    address: string | null
    city_id: bigint | null
    phone: bigint | null
    last_active_at: Date | null
  }

  export type PersonMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    birth_date: Date | null
    gender: number | null
    address: string | null
    city_id: bigint | null
    phone: bigint | null
    last_active_at: Date | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    name: number
    birth_date: number
    gender: number
    address: number
    city_id: number
    phone: number
    last_active_at: number
    _all: number
  }


  export type PersonAvgAggregateInputType = {
    id?: true
    gender?: true
    city_id?: true
    phone?: true
  }

  export type PersonSumAggregateInputType = {
    id?: true
    gender?: true
    city_id?: true
    phone?: true
  }

  export type PersonMinAggregateInputType = {
    id?: true
    name?: true
    birth_date?: true
    gender?: true
    address?: true
    city_id?: true
    phone?: true
    last_active_at?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    name?: true
    birth_date?: true
    gender?: true
    address?: true
    city_id?: true
    phone?: true
    last_active_at?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    name?: true
    birth_date?: true
    gender?: true
    address?: true
    city_id?: true
    phone?: true
    last_active_at?: true
    _all?: true
  }

  export type PersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which person to aggregate.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: personOrderByWithRelationInput | personOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned people
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type personGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: personWhereInput
    orderBy?: personOrderByWithAggregationInput | personOrderByWithAggregationInput[]
    by: PersonScalarFieldEnum[] | PersonScalarFieldEnum
    having?: personScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _avg?: PersonAvgAggregateInputType
    _sum?: PersonSumAggregateInputType
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }

  export type PersonGroupByOutputType = {
    id: bigint
    name: string
    birth_date: Date
    gender: number
    address: string
    city_id: bigint
    phone: bigint
    last_active_at: Date
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends personGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type personSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birth_date?: boolean
    gender?: boolean
    address?: boolean
    city_id?: boolean
    phone?: boolean
    last_active_at?: boolean
    city?: boolean | cityDefaultArgs<ExtArgs>
    pet?: boolean | person$petArgs<ExtArgs>
    shelter?: boolean | person$shelterArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type personSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birth_date?: boolean
    gender?: boolean
    address?: boolean
    city_id?: boolean
    phone?: boolean
    last_active_at?: boolean
    city?: boolean | cityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type personSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birth_date?: boolean
    gender?: boolean
    address?: boolean
    city_id?: boolean
    phone?: boolean
    last_active_at?: boolean
    city?: boolean | cityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type personSelectScalar = {
    id?: boolean
    name?: boolean
    birth_date?: boolean
    gender?: boolean
    address?: boolean
    city_id?: boolean
    phone?: boolean
    last_active_at?: boolean
  }

  export type personOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "birth_date" | "gender" | "address" | "city_id" | "phone" | "last_active_at", ExtArgs["result"]["person"]>
  export type personInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | cityDefaultArgs<ExtArgs>
    pet?: boolean | person$petArgs<ExtArgs>
    shelter?: boolean | person$shelterArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type personIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | cityDefaultArgs<ExtArgs>
  }
  export type personIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | cityDefaultArgs<ExtArgs>
  }

  export type $personPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "person"
    objects: {
      city: Prisma.$cityPayload<ExtArgs>
      pet: Prisma.$petPayload<ExtArgs>[]
      shelter: Prisma.$shelterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      birth_date: Date
      gender: number
      address: string
      city_id: bigint
      phone: bigint
      last_active_at: Date
    }, ExtArgs["result"]["person"]>
    composites: {}
  }

  type personGetPayload<S extends boolean | null | undefined | personDefaultArgs> = $Result.GetResult<Prisma.$personPayload, S>

  type personCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<personFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface personDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['person'], meta: { name: 'person' } }
    /**
     * Find zero or one Person that matches the filter.
     * @param {personFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends personFindUniqueArgs>(args: SelectSubset<T, personFindUniqueArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Person that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {personFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends personFindUniqueOrThrowArgs>(args: SelectSubset<T, personFindUniqueOrThrowArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends personFindFirstArgs>(args?: SelectSubset<T, personFindFirstArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends personFindFirstOrThrowArgs>(args?: SelectSubset<T, personFindFirstOrThrowArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends personFindManyArgs>(args?: SelectSubset<T, personFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Person.
     * @param {personCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
     */
    create<T extends personCreateArgs>(args: SelectSubset<T, personCreateArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many People.
     * @param {personCreateManyArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends personCreateManyArgs>(args?: SelectSubset<T, personCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many People and returns the data saved in the database.
     * @param {personCreateManyAndReturnArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many People and only return the `id`
     * const personWithIdOnly = await prisma.person.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends personCreateManyAndReturnArgs>(args?: SelectSubset<T, personCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Person.
     * @param {personDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
     */
    delete<T extends personDeleteArgs>(args: SelectSubset<T, personDeleteArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Person.
     * @param {personUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends personUpdateArgs>(args: SelectSubset<T, personUpdateArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more People.
     * @param {personDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends personDeleteManyArgs>(args?: SelectSubset<T, personDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends personUpdateManyArgs>(args: SelectSubset<T, personUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People and returns the data updated in the database.
     * @param {personUpdateManyAndReturnArgs} args - Arguments to update many People.
     * @example
     * // Update many People
     * const person = await prisma.person.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more People and only return the `id`
     * const personWithIdOnly = await prisma.person.updateManyAndReturn({
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
    updateManyAndReturn<T extends personUpdateManyAndReturnArgs>(args: SelectSubset<T, personUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Person.
     * @param {personUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
     */
    upsert<T extends personUpsertArgs>(args: SelectSubset<T, personUpsertArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends personCountArgs>(
      args?: Subset<T, personCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personGroupByArgs} args - Group by arguments.
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
      T extends personGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: personGroupByArgs['orderBy'] }
        : { orderBy?: personGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, personGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the person model
   */
  readonly fields: personFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__personClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    city<T extends cityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cityDefaultArgs<ExtArgs>>): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pet<T extends person$petArgs<ExtArgs> = {}>(args?: Subset<T, person$petArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shelter<T extends person$shelterArgs<ExtArgs> = {}>(args?: Subset<T, person$shelterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shelterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the person model
   */
  interface personFieldRefs {
    readonly id: FieldRef<"person", 'BigInt'>
    readonly name: FieldRef<"person", 'String'>
    readonly birth_date: FieldRef<"person", 'DateTime'>
    readonly gender: FieldRef<"person", 'Int'>
    readonly address: FieldRef<"person", 'String'>
    readonly city_id: FieldRef<"person", 'BigInt'>
    readonly phone: FieldRef<"person", 'BigInt'>
    readonly last_active_at: FieldRef<"person", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * person findUnique
   */
  export type personFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter, which person to fetch.
     */
    where: personWhereUniqueInput
  }

  /**
   * person findUniqueOrThrow
   */
  export type personFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter, which person to fetch.
     */
    where: personWhereUniqueInput
  }

  /**
   * person findFirst
   */
  export type personFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter, which person to fetch.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: personOrderByWithRelationInput | personOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for people.
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of people.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * person findFirstOrThrow
   */
  export type personFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter, which person to fetch.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: personOrderByWithRelationInput | personOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for people.
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of people.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * person findMany
   */
  export type personFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter, which people to fetch.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: personOrderByWithRelationInput | personOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing people.
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * person create
   */
  export type personCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * The data needed to create a person.
     */
    data: XOR<personCreateInput, personUncheckedCreateInput>
  }

  /**
   * person createMany
   */
  export type personCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many people.
     */
    data: personCreateManyInput | personCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * person createManyAndReturn
   */
  export type personCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * The data used to create many people.
     */
    data: personCreateManyInput | personCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * person update
   */
  export type personUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * The data needed to update a person.
     */
    data: XOR<personUpdateInput, personUncheckedUpdateInput>
    /**
     * Choose, which person to update.
     */
    where: personWhereUniqueInput
  }

  /**
   * person updateMany
   */
  export type personUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update people.
     */
    data: XOR<personUpdateManyMutationInput, personUncheckedUpdateManyInput>
    /**
     * Filter which people to update
     */
    where?: personWhereInput
    /**
     * Limit how many people to update.
     */
    limit?: number
  }

  /**
   * person updateManyAndReturn
   */
  export type personUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * The data used to update people.
     */
    data: XOR<personUpdateManyMutationInput, personUncheckedUpdateManyInput>
    /**
     * Filter which people to update
     */
    where?: personWhereInput
    /**
     * Limit how many people to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * person upsert
   */
  export type personUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * The filter to search for the person to update in case it exists.
     */
    where: personWhereUniqueInput
    /**
     * In case the person found by the `where` argument doesn't exist, create a new person with this data.
     */
    create: XOR<personCreateInput, personUncheckedCreateInput>
    /**
     * In case the person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<personUpdateInput, personUncheckedUpdateInput>
  }

  /**
   * person delete
   */
  export type personDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter which person to delete.
     */
    where: personWhereUniqueInput
  }

  /**
   * person deleteMany
   */
  export type personDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which people to delete
     */
    where?: personWhereInput
    /**
     * Limit how many people to delete.
     */
    limit?: number
  }

  /**
   * person.pet
   */
  export type person$petArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    where?: petWhereInput
    orderBy?: petOrderByWithRelationInput | petOrderByWithRelationInput[]
    cursor?: petWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * person.shelter
   */
  export type person$shelterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shelterInclude<ExtArgs> | null
    where?: shelterWhereInput
    orderBy?: shelterOrderByWithRelationInput | shelterOrderByWithRelationInput[]
    cursor?: shelterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShelterScalarFieldEnum | ShelterScalarFieldEnum[]
  }

  /**
   * person without action
   */
  export type personDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
  }


  /**
   * Model pet
   */

  export type AggregatePet = {
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  export type PetAvgAggregateOutputType = {
    id: number | null
    gender: number | null
    person_id: number | null
  }

  export type PetSumAggregateOutputType = {
    id: bigint | null
    gender: number | null
    person_id: bigint | null
  }

  export type PetMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    birth_date: Date | null
    gender: number | null
    person_id: bigint | null
    description: string | null
    has_spotlight: boolean | null
  }

  export type PetMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    birth_date: Date | null
    gender: number | null
    person_id: bigint | null
    description: string | null
    has_spotlight: boolean | null
  }

  export type PetCountAggregateOutputType = {
    id: number
    name: number
    birth_date: number
    gender: number
    person_id: number
    description: number
    has_spotlight: number
    _all: number
  }


  export type PetAvgAggregateInputType = {
    id?: true
    gender?: true
    person_id?: true
  }

  export type PetSumAggregateInputType = {
    id?: true
    gender?: true
    person_id?: true
  }

  export type PetMinAggregateInputType = {
    id?: true
    name?: true
    birth_date?: true
    gender?: true
    person_id?: true
    description?: true
    has_spotlight?: true
  }

  export type PetMaxAggregateInputType = {
    id?: true
    name?: true
    birth_date?: true
    gender?: true
    person_id?: true
    description?: true
    has_spotlight?: true
  }

  export type PetCountAggregateInputType = {
    id?: true
    name?: true
    birth_date?: true
    gender?: true
    person_id?: true
    description?: true
    has_spotlight?: true
    _all?: true
  }

  export type PetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pet to aggregate.
     */
    where?: petWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pets to fetch.
     */
    orderBy?: petOrderByWithRelationInput | petOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: petWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pets
    **/
    _count?: true | PetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetMaxAggregateInputType
  }

  export type GetPetAggregateType<T extends PetAggregateArgs> = {
        [P in keyof T & keyof AggregatePet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePet[P]>
      : GetScalarType<T[P], AggregatePet[P]>
  }




  export type petGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: petWhereInput
    orderBy?: petOrderByWithAggregationInput | petOrderByWithAggregationInput[]
    by: PetScalarFieldEnum[] | PetScalarFieldEnum
    having?: petScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetCountAggregateInputType | true
    _avg?: PetAvgAggregateInputType
    _sum?: PetSumAggregateInputType
    _min?: PetMinAggregateInputType
    _max?: PetMaxAggregateInputType
  }

  export type PetGroupByOutputType = {
    id: bigint
    name: string
    birth_date: Date
    gender: number
    person_id: bigint
    description: string
    has_spotlight: boolean
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  type GetPetGroupByPayload<T extends petGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetGroupByOutputType[P]>
            : GetScalarType<T[P], PetGroupByOutputType[P]>
        }
      >
    >


  export type petSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birth_date?: boolean
    gender?: boolean
    person_id?: boolean
    description?: boolean
    has_spotlight?: boolean
    person?: boolean | personDefaultArgs<ExtArgs>
    traits?: boolean | pet$traitsArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type petSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birth_date?: boolean
    gender?: boolean
    person_id?: boolean
    description?: boolean
    has_spotlight?: boolean
    person?: boolean | personDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type petSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birth_date?: boolean
    gender?: boolean
    person_id?: boolean
    description?: boolean
    has_spotlight?: boolean
    person?: boolean | personDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type petSelectScalar = {
    id?: boolean
    name?: boolean
    birth_date?: boolean
    gender?: boolean
    person_id?: boolean
    description?: boolean
    has_spotlight?: boolean
  }

  export type petOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "birth_date" | "gender" | "person_id" | "description" | "has_spotlight", ExtArgs["result"]["pet"]>
  export type petInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | personDefaultArgs<ExtArgs>
    traits?: boolean | pet$traitsArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type petIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | personDefaultArgs<ExtArgs>
  }
  export type petIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | personDefaultArgs<ExtArgs>
  }

  export type $petPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pet"
    objects: {
      person: Prisma.$personPayload<ExtArgs>
      traits: Prisma.$traitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      birth_date: Date
      gender: number
      person_id: bigint
      description: string
      has_spotlight: boolean
    }, ExtArgs["result"]["pet"]>
    composites: {}
  }

  type petGetPayload<S extends boolean | null | undefined | petDefaultArgs> = $Result.GetResult<Prisma.$petPayload, S>

  type petCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<petFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetCountAggregateInputType | true
    }

  export interface petDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pet'], meta: { name: 'pet' } }
    /**
     * Find zero or one Pet that matches the filter.
     * @param {petFindUniqueArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends petFindUniqueArgs>(args: SelectSubset<T, petFindUniqueArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {petFindUniqueOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends petFindUniqueOrThrowArgs>(args: SelectSubset<T, petFindUniqueOrThrowArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petFindFirstArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends petFindFirstArgs>(args?: SelectSubset<T, petFindFirstArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petFindFirstOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends petFindFirstOrThrowArgs>(args?: SelectSubset<T, petFindFirstOrThrowArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pets
     * const pets = await prisma.pet.findMany()
     * 
     * // Get first 10 Pets
     * const pets = await prisma.pet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petWithIdOnly = await prisma.pet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends petFindManyArgs>(args?: SelectSubset<T, petFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pet.
     * @param {petCreateArgs} args - Arguments to create a Pet.
     * @example
     * // Create one Pet
     * const Pet = await prisma.pet.create({
     *   data: {
     *     // ... data to create a Pet
     *   }
     * })
     * 
     */
    create<T extends petCreateArgs>(args: SelectSubset<T, petCreateArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pets.
     * @param {petCreateManyArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends petCreateManyArgs>(args?: SelectSubset<T, petCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pets and returns the data saved in the database.
     * @param {petCreateManyAndReturnArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends petCreateManyAndReturnArgs>(args?: SelectSubset<T, petCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pet.
     * @param {petDeleteArgs} args - Arguments to delete one Pet.
     * @example
     * // Delete one Pet
     * const Pet = await prisma.pet.delete({
     *   where: {
     *     // ... filter to delete one Pet
     *   }
     * })
     * 
     */
    delete<T extends petDeleteArgs>(args: SelectSubset<T, petDeleteArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pet.
     * @param {petUpdateArgs} args - Arguments to update one Pet.
     * @example
     * // Update one Pet
     * const pet = await prisma.pet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends petUpdateArgs>(args: SelectSubset<T, petUpdateArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pets.
     * @param {petDeleteManyArgs} args - Arguments to filter Pets to delete.
     * @example
     * // Delete a few Pets
     * const { count } = await prisma.pet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends petDeleteManyArgs>(args?: SelectSubset<T, petDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends petUpdateManyArgs>(args: SelectSubset<T, petUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets and returns the data updated in the database.
     * @param {petUpdateManyAndReturnArgs} args - Arguments to update many Pets.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.updateManyAndReturn({
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
    updateManyAndReturn<T extends petUpdateManyAndReturnArgs>(args: SelectSubset<T, petUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pet.
     * @param {petUpsertArgs} args - Arguments to update or create a Pet.
     * @example
     * // Update or create a Pet
     * const pet = await prisma.pet.upsert({
     *   create: {
     *     // ... data to create a Pet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pet we want to update
     *   }
     * })
     */
    upsert<T extends petUpsertArgs>(args: SelectSubset<T, petUpsertArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petCountArgs} args - Arguments to filter Pets to count.
     * @example
     * // Count the number of Pets
     * const count = await prisma.pet.count({
     *   where: {
     *     // ... the filter for the Pets we want to count
     *   }
     * })
    **/
    count<T extends petCountArgs>(
      args?: Subset<T, petCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PetAggregateArgs>(args: Subset<T, PetAggregateArgs>): Prisma.PrismaPromise<GetPetAggregateType<T>>

    /**
     * Group by Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petGroupByArgs} args - Group by arguments.
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
      T extends petGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: petGroupByArgs['orderBy'] }
        : { orderBy?: petGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, petGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pet model
   */
  readonly fields: petFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__petClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends personDefaultArgs<ExtArgs> = {}>(args?: Subset<T, personDefaultArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    traits<T extends pet$traitsArgs<ExtArgs> = {}>(args?: Subset<T, pet$traitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$traitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the pet model
   */
  interface petFieldRefs {
    readonly id: FieldRef<"pet", 'BigInt'>
    readonly name: FieldRef<"pet", 'String'>
    readonly birth_date: FieldRef<"pet", 'DateTime'>
    readonly gender: FieldRef<"pet", 'Int'>
    readonly person_id: FieldRef<"pet", 'BigInt'>
    readonly description: FieldRef<"pet", 'String'>
    readonly has_spotlight: FieldRef<"pet", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * pet findUnique
   */
  export type petFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * Filter, which pet to fetch.
     */
    where: petWhereUniqueInput
  }

  /**
   * pet findUniqueOrThrow
   */
  export type petFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * Filter, which pet to fetch.
     */
    where: petWhereUniqueInput
  }

  /**
   * pet findFirst
   */
  export type petFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * Filter, which pet to fetch.
     */
    where?: petWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pets to fetch.
     */
    orderBy?: petOrderByWithRelationInput | petOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pets.
     */
    cursor?: petWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * pet findFirstOrThrow
   */
  export type petFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * Filter, which pet to fetch.
     */
    where?: petWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pets to fetch.
     */
    orderBy?: petOrderByWithRelationInput | petOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pets.
     */
    cursor?: petWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * pet findMany
   */
  export type petFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * Filter, which pets to fetch.
     */
    where?: petWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pets to fetch.
     */
    orderBy?: petOrderByWithRelationInput | petOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pets.
     */
    cursor?: petWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pets.
     */
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * pet create
   */
  export type petCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * The data needed to create a pet.
     */
    data: XOR<petCreateInput, petUncheckedCreateInput>
  }

  /**
   * pet createMany
   */
  export type petCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pets.
     */
    data: petCreateManyInput | petCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pet createManyAndReturn
   */
  export type petCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * The data used to create many pets.
     */
    data: petCreateManyInput | petCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pet update
   */
  export type petUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * The data needed to update a pet.
     */
    data: XOR<petUpdateInput, petUncheckedUpdateInput>
    /**
     * Choose, which pet to update.
     */
    where: petWhereUniqueInput
  }

  /**
   * pet updateMany
   */
  export type petUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pets.
     */
    data: XOR<petUpdateManyMutationInput, petUncheckedUpdateManyInput>
    /**
     * Filter which pets to update
     */
    where?: petWhereInput
    /**
     * Limit how many pets to update.
     */
    limit?: number
  }

  /**
   * pet updateManyAndReturn
   */
  export type petUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * The data used to update pets.
     */
    data: XOR<petUpdateManyMutationInput, petUncheckedUpdateManyInput>
    /**
     * Filter which pets to update
     */
    where?: petWhereInput
    /**
     * Limit how many pets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pet upsert
   */
  export type petUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * The filter to search for the pet to update in case it exists.
     */
    where: petWhereUniqueInput
    /**
     * In case the pet found by the `where` argument doesn't exist, create a new pet with this data.
     */
    create: XOR<petCreateInput, petUncheckedCreateInput>
    /**
     * In case the pet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<petUpdateInput, petUncheckedUpdateInput>
  }

  /**
   * pet delete
   */
  export type petDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * Filter which pet to delete.
     */
    where: petWhereUniqueInput
  }

  /**
   * pet deleteMany
   */
  export type petDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pets to delete
     */
    where?: petWhereInput
    /**
     * Limit how many pets to delete.
     */
    limit?: number
  }

  /**
   * pet.traits
   */
  export type pet$traitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trait
     */
    select?: traitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trait
     */
    omit?: traitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: traitInclude<ExtArgs> | null
    where?: traitWhereInput
    orderBy?: traitOrderByWithRelationInput | traitOrderByWithRelationInput[]
    cursor?: traitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TraitScalarFieldEnum | TraitScalarFieldEnum[]
  }

  /**
   * pet without action
   */
  export type petDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
  }


  /**
   * Model province
   */

  export type AggregateProvince = {
    _count: ProvinceCountAggregateOutputType | null
    _avg: ProvinceAvgAggregateOutputType | null
    _sum: ProvinceSumAggregateOutputType | null
    _min: ProvinceMinAggregateOutputType | null
    _max: ProvinceMaxAggregateOutputType | null
  }

  export type ProvinceAvgAggregateOutputType = {
    id: number | null
  }

  export type ProvinceSumAggregateOutputType = {
    id: bigint | null
  }

  export type ProvinceMinAggregateOutputType = {
    id: bigint | null
    province: string | null
  }

  export type ProvinceMaxAggregateOutputType = {
    id: bigint | null
    province: string | null
  }

  export type ProvinceCountAggregateOutputType = {
    id: number
    province: number
    _all: number
  }


  export type ProvinceAvgAggregateInputType = {
    id?: true
  }

  export type ProvinceSumAggregateInputType = {
    id?: true
  }

  export type ProvinceMinAggregateInputType = {
    id?: true
    province?: true
  }

  export type ProvinceMaxAggregateInputType = {
    id?: true
    province?: true
  }

  export type ProvinceCountAggregateInputType = {
    id?: true
    province?: true
    _all?: true
  }

  export type ProvinceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which province to aggregate.
     */
    where?: provinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provinces to fetch.
     */
    orderBy?: provinceOrderByWithRelationInput | provinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: provinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned provinces
    **/
    _count?: true | ProvinceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProvinceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProvinceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvinceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvinceMaxAggregateInputType
  }

  export type GetProvinceAggregateType<T extends ProvinceAggregateArgs> = {
        [P in keyof T & keyof AggregateProvince]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvince[P]>
      : GetScalarType<T[P], AggregateProvince[P]>
  }




  export type provinceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: provinceWhereInput
    orderBy?: provinceOrderByWithAggregationInput | provinceOrderByWithAggregationInput[]
    by: ProvinceScalarFieldEnum[] | ProvinceScalarFieldEnum
    having?: provinceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvinceCountAggregateInputType | true
    _avg?: ProvinceAvgAggregateInputType
    _sum?: ProvinceSumAggregateInputType
    _min?: ProvinceMinAggregateInputType
    _max?: ProvinceMaxAggregateInputType
  }

  export type ProvinceGroupByOutputType = {
    id: bigint
    province: string
    _count: ProvinceCountAggregateOutputType | null
    _avg: ProvinceAvgAggregateOutputType | null
    _sum: ProvinceSumAggregateOutputType | null
    _min: ProvinceMinAggregateOutputType | null
    _max: ProvinceMaxAggregateOutputType | null
  }

  type GetProvinceGroupByPayload<T extends provinceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProvinceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvinceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvinceGroupByOutputType[P]>
            : GetScalarType<T[P], ProvinceGroupByOutputType[P]>
        }
      >
    >


  export type provinceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    province?: boolean
    city?: boolean | province$cityArgs<ExtArgs>
    _count?: boolean | ProvinceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["province"]>

  export type provinceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    province?: boolean
  }, ExtArgs["result"]["province"]>

  export type provinceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    province?: boolean
  }, ExtArgs["result"]["province"]>

  export type provinceSelectScalar = {
    id?: boolean
    province?: boolean
  }

  export type provinceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "province", ExtArgs["result"]["province"]>
  export type provinceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | province$cityArgs<ExtArgs>
    _count?: boolean | ProvinceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type provinceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type provinceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $provincePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "province"
    objects: {
      city: Prisma.$cityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      province: string
    }, ExtArgs["result"]["province"]>
    composites: {}
  }

  type provinceGetPayload<S extends boolean | null | undefined | provinceDefaultArgs> = $Result.GetResult<Prisma.$provincePayload, S>

  type provinceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<provinceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProvinceCountAggregateInputType | true
    }

  export interface provinceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['province'], meta: { name: 'province' } }
    /**
     * Find zero or one Province that matches the filter.
     * @param {provinceFindUniqueArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends provinceFindUniqueArgs>(args: SelectSubset<T, provinceFindUniqueArgs<ExtArgs>>): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Province that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {provinceFindUniqueOrThrowArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends provinceFindUniqueOrThrowArgs>(args: SelectSubset<T, provinceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Province that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provinceFindFirstArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends provinceFindFirstArgs>(args?: SelectSubset<T, provinceFindFirstArgs<ExtArgs>>): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Province that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provinceFindFirstOrThrowArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends provinceFindFirstOrThrowArgs>(args?: SelectSubset<T, provinceFindFirstOrThrowArgs<ExtArgs>>): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Provinces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provinceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Provinces
     * const provinces = await prisma.province.findMany()
     * 
     * // Get first 10 Provinces
     * const provinces = await prisma.province.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const provinceWithIdOnly = await prisma.province.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends provinceFindManyArgs>(args?: SelectSubset<T, provinceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Province.
     * @param {provinceCreateArgs} args - Arguments to create a Province.
     * @example
     * // Create one Province
     * const Province = await prisma.province.create({
     *   data: {
     *     // ... data to create a Province
     *   }
     * })
     * 
     */
    create<T extends provinceCreateArgs>(args: SelectSubset<T, provinceCreateArgs<ExtArgs>>): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Provinces.
     * @param {provinceCreateManyArgs} args - Arguments to create many Provinces.
     * @example
     * // Create many Provinces
     * const province = await prisma.province.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends provinceCreateManyArgs>(args?: SelectSubset<T, provinceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Provinces and returns the data saved in the database.
     * @param {provinceCreateManyAndReturnArgs} args - Arguments to create many Provinces.
     * @example
     * // Create many Provinces
     * const province = await prisma.province.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Provinces and only return the `id`
     * const provinceWithIdOnly = await prisma.province.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends provinceCreateManyAndReturnArgs>(args?: SelectSubset<T, provinceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Province.
     * @param {provinceDeleteArgs} args - Arguments to delete one Province.
     * @example
     * // Delete one Province
     * const Province = await prisma.province.delete({
     *   where: {
     *     // ... filter to delete one Province
     *   }
     * })
     * 
     */
    delete<T extends provinceDeleteArgs>(args: SelectSubset<T, provinceDeleteArgs<ExtArgs>>): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Province.
     * @param {provinceUpdateArgs} args - Arguments to update one Province.
     * @example
     * // Update one Province
     * const province = await prisma.province.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends provinceUpdateArgs>(args: SelectSubset<T, provinceUpdateArgs<ExtArgs>>): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Provinces.
     * @param {provinceDeleteManyArgs} args - Arguments to filter Provinces to delete.
     * @example
     * // Delete a few Provinces
     * const { count } = await prisma.province.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends provinceDeleteManyArgs>(args?: SelectSubset<T, provinceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provinceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Provinces
     * const province = await prisma.province.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends provinceUpdateManyArgs>(args: SelectSubset<T, provinceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provinces and returns the data updated in the database.
     * @param {provinceUpdateManyAndReturnArgs} args - Arguments to update many Provinces.
     * @example
     * // Update many Provinces
     * const province = await prisma.province.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Provinces and only return the `id`
     * const provinceWithIdOnly = await prisma.province.updateManyAndReturn({
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
    updateManyAndReturn<T extends provinceUpdateManyAndReturnArgs>(args: SelectSubset<T, provinceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Province.
     * @param {provinceUpsertArgs} args - Arguments to update or create a Province.
     * @example
     * // Update or create a Province
     * const province = await prisma.province.upsert({
     *   create: {
     *     // ... data to create a Province
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Province we want to update
     *   }
     * })
     */
    upsert<T extends provinceUpsertArgs>(args: SelectSubset<T, provinceUpsertArgs<ExtArgs>>): Prisma__provinceClient<$Result.GetResult<Prisma.$provincePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provinceCountArgs} args - Arguments to filter Provinces to count.
     * @example
     * // Count the number of Provinces
     * const count = await prisma.province.count({
     *   where: {
     *     // ... the filter for the Provinces we want to count
     *   }
     * })
    **/
    count<T extends provinceCountArgs>(
      args?: Subset<T, provinceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvinceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Province.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProvinceAggregateArgs>(args: Subset<T, ProvinceAggregateArgs>): Prisma.PrismaPromise<GetProvinceAggregateType<T>>

    /**
     * Group by Province.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provinceGroupByArgs} args - Group by arguments.
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
      T extends provinceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: provinceGroupByArgs['orderBy'] }
        : { orderBy?: provinceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, provinceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvinceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the province model
   */
  readonly fields: provinceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for province.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__provinceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    city<T extends province$cityArgs<ExtArgs> = {}>(args?: Subset<T, province$cityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the province model
   */
  interface provinceFieldRefs {
    readonly id: FieldRef<"province", 'BigInt'>
    readonly province: FieldRef<"province", 'String'>
  }
    

  // Custom InputTypes
  /**
   * province findUnique
   */
  export type provinceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the province
     */
    omit?: provinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * Filter, which province to fetch.
     */
    where: provinceWhereUniqueInput
  }

  /**
   * province findUniqueOrThrow
   */
  export type provinceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the province
     */
    omit?: provinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * Filter, which province to fetch.
     */
    where: provinceWhereUniqueInput
  }

  /**
   * province findFirst
   */
  export type provinceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the province
     */
    omit?: provinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * Filter, which province to fetch.
     */
    where?: provinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provinces to fetch.
     */
    orderBy?: provinceOrderByWithRelationInput | provinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for provinces.
     */
    cursor?: provinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of provinces.
     */
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * province findFirstOrThrow
   */
  export type provinceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the province
     */
    omit?: provinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * Filter, which province to fetch.
     */
    where?: provinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provinces to fetch.
     */
    orderBy?: provinceOrderByWithRelationInput | provinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for provinces.
     */
    cursor?: provinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of provinces.
     */
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * province findMany
   */
  export type provinceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the province
     */
    omit?: provinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * Filter, which provinces to fetch.
     */
    where?: provinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provinces to fetch.
     */
    orderBy?: provinceOrderByWithRelationInput | provinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing provinces.
     */
    cursor?: provinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provinces.
     */
    skip?: number
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * province create
   */
  export type provinceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the province
     */
    omit?: provinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * The data needed to create a province.
     */
    data: XOR<provinceCreateInput, provinceUncheckedCreateInput>
  }

  /**
   * province createMany
   */
  export type provinceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many provinces.
     */
    data: provinceCreateManyInput | provinceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * province createManyAndReturn
   */
  export type provinceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the province
     */
    omit?: provinceOmit<ExtArgs> | null
    /**
     * The data used to create many provinces.
     */
    data: provinceCreateManyInput | provinceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * province update
   */
  export type provinceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the province
     */
    omit?: provinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * The data needed to update a province.
     */
    data: XOR<provinceUpdateInput, provinceUncheckedUpdateInput>
    /**
     * Choose, which province to update.
     */
    where: provinceWhereUniqueInput
  }

  /**
   * province updateMany
   */
  export type provinceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update provinces.
     */
    data: XOR<provinceUpdateManyMutationInput, provinceUncheckedUpdateManyInput>
    /**
     * Filter which provinces to update
     */
    where?: provinceWhereInput
    /**
     * Limit how many provinces to update.
     */
    limit?: number
  }

  /**
   * province updateManyAndReturn
   */
  export type provinceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the province
     */
    omit?: provinceOmit<ExtArgs> | null
    /**
     * The data used to update provinces.
     */
    data: XOR<provinceUpdateManyMutationInput, provinceUncheckedUpdateManyInput>
    /**
     * Filter which provinces to update
     */
    where?: provinceWhereInput
    /**
     * Limit how many provinces to update.
     */
    limit?: number
  }

  /**
   * province upsert
   */
  export type provinceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the province
     */
    omit?: provinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * The filter to search for the province to update in case it exists.
     */
    where: provinceWhereUniqueInput
    /**
     * In case the province found by the `where` argument doesn't exist, create a new province with this data.
     */
    create: XOR<provinceCreateInput, provinceUncheckedCreateInput>
    /**
     * In case the province was found with the provided `where` argument, update it with this data.
     */
    update: XOR<provinceUpdateInput, provinceUncheckedUpdateInput>
  }

  /**
   * province delete
   */
  export type provinceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the province
     */
    omit?: provinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinceInclude<ExtArgs> | null
    /**
     * Filter which province to delete.
     */
    where: provinceWhereUniqueInput
  }

  /**
   * province deleteMany
   */
  export type provinceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which provinces to delete
     */
    where?: provinceWhereInput
    /**
     * Limit how many provinces to delete.
     */
    limit?: number
  }

  /**
   * province.city
   */
  export type province$cityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect<ExtArgs> | null
    /**
     * Omit specific fields from the city
     */
    omit?: cityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cityInclude<ExtArgs> | null
    where?: cityWhereInput
    orderBy?: cityOrderByWithRelationInput | cityOrderByWithRelationInput[]
    cursor?: cityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * province without action
   */
  export type provinceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the province
     */
    select?: provinceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the province
     */
    omit?: provinceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provinceInclude<ExtArgs> | null
  }


  /**
   * Model shelter
   */

  export type AggregateShelter = {
    _count: ShelterCountAggregateOutputType | null
    _avg: ShelterAvgAggregateOutputType | null
    _sum: ShelterSumAggregateOutputType | null
    _min: ShelterMinAggregateOutputType | null
    _max: ShelterMaxAggregateOutputType | null
  }

  export type ShelterAvgAggregateOutputType = {
    id: number | null
    city_id: number | null
    person_id: number | null
  }

  export type ShelterSumAggregateOutputType = {
    id: bigint | null
    city_id: bigint | null
    person_id: bigint | null
  }

  export type ShelterMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    address: string | null
    city_id: bigint | null
    person_id: bigint | null
  }

  export type ShelterMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    address: string | null
    city_id: bigint | null
    person_id: bigint | null
  }

  export type ShelterCountAggregateOutputType = {
    id: number
    name: number
    address: number
    city_id: number
    person_id: number
    _all: number
  }


  export type ShelterAvgAggregateInputType = {
    id?: true
    city_id?: true
    person_id?: true
  }

  export type ShelterSumAggregateInputType = {
    id?: true
    city_id?: true
    person_id?: true
  }

  export type ShelterMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city_id?: true
    person_id?: true
  }

  export type ShelterMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city_id?: true
    person_id?: true
  }

  export type ShelterCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city_id?: true
    person_id?: true
    _all?: true
  }

  export type ShelterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shelter to aggregate.
     */
    where?: shelterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shelters to fetch.
     */
    orderBy?: shelterOrderByWithRelationInput | shelterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: shelterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shelters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shelters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned shelters
    **/
    _count?: true | ShelterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShelterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShelterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShelterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShelterMaxAggregateInputType
  }

  export type GetShelterAggregateType<T extends ShelterAggregateArgs> = {
        [P in keyof T & keyof AggregateShelter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShelter[P]>
      : GetScalarType<T[P], AggregateShelter[P]>
  }




  export type shelterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shelterWhereInput
    orderBy?: shelterOrderByWithAggregationInput | shelterOrderByWithAggregationInput[]
    by: ShelterScalarFieldEnum[] | ShelterScalarFieldEnum
    having?: shelterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShelterCountAggregateInputType | true
    _avg?: ShelterAvgAggregateInputType
    _sum?: ShelterSumAggregateInputType
    _min?: ShelterMinAggregateInputType
    _max?: ShelterMaxAggregateInputType
  }

  export type ShelterGroupByOutputType = {
    id: bigint
    name: string
    address: string
    city_id: bigint
    person_id: bigint
    _count: ShelterCountAggregateOutputType | null
    _avg: ShelterAvgAggregateOutputType | null
    _sum: ShelterSumAggregateOutputType | null
    _min: ShelterMinAggregateOutputType | null
    _max: ShelterMaxAggregateOutputType | null
  }

  type GetShelterGroupByPayload<T extends shelterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShelterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShelterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShelterGroupByOutputType[P]>
            : GetScalarType<T[P], ShelterGroupByOutputType[P]>
        }
      >
    >


  export type shelterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city_id?: boolean
    person_id?: boolean
    city?: boolean | cityDefaultArgs<ExtArgs>
    person?: boolean | personDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shelter"]>

  export type shelterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city_id?: boolean
    person_id?: boolean
    city?: boolean | cityDefaultArgs<ExtArgs>
    person?: boolean | personDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shelter"]>

  export type shelterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city_id?: boolean
    person_id?: boolean
    city?: boolean | cityDefaultArgs<ExtArgs>
    person?: boolean | personDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shelter"]>

  export type shelterSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    city_id?: boolean
    person_id?: boolean
  }

  export type shelterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "city_id" | "person_id", ExtArgs["result"]["shelter"]>
  export type shelterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | cityDefaultArgs<ExtArgs>
    person?: boolean | personDefaultArgs<ExtArgs>
  }
  export type shelterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | cityDefaultArgs<ExtArgs>
    person?: boolean | personDefaultArgs<ExtArgs>
  }
  export type shelterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | cityDefaultArgs<ExtArgs>
    person?: boolean | personDefaultArgs<ExtArgs>
  }

  export type $shelterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "shelter"
    objects: {
      city: Prisma.$cityPayload<ExtArgs>
      person: Prisma.$personPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      address: string
      city_id: bigint
      person_id: bigint
    }, ExtArgs["result"]["shelter"]>
    composites: {}
  }

  type shelterGetPayload<S extends boolean | null | undefined | shelterDefaultArgs> = $Result.GetResult<Prisma.$shelterPayload, S>

  type shelterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<shelterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShelterCountAggregateInputType | true
    }

  export interface shelterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['shelter'], meta: { name: 'shelter' } }
    /**
     * Find zero or one Shelter that matches the filter.
     * @param {shelterFindUniqueArgs} args - Arguments to find a Shelter
     * @example
     * // Get one Shelter
     * const shelter = await prisma.shelter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends shelterFindUniqueArgs>(args: SelectSubset<T, shelterFindUniqueArgs<ExtArgs>>): Prisma__shelterClient<$Result.GetResult<Prisma.$shelterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shelter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {shelterFindUniqueOrThrowArgs} args - Arguments to find a Shelter
     * @example
     * // Get one Shelter
     * const shelter = await prisma.shelter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends shelterFindUniqueOrThrowArgs>(args: SelectSubset<T, shelterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__shelterClient<$Result.GetResult<Prisma.$shelterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shelter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shelterFindFirstArgs} args - Arguments to find a Shelter
     * @example
     * // Get one Shelter
     * const shelter = await prisma.shelter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends shelterFindFirstArgs>(args?: SelectSubset<T, shelterFindFirstArgs<ExtArgs>>): Prisma__shelterClient<$Result.GetResult<Prisma.$shelterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shelter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shelterFindFirstOrThrowArgs} args - Arguments to find a Shelter
     * @example
     * // Get one Shelter
     * const shelter = await prisma.shelter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends shelterFindFirstOrThrowArgs>(args?: SelectSubset<T, shelterFindFirstOrThrowArgs<ExtArgs>>): Prisma__shelterClient<$Result.GetResult<Prisma.$shelterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shelters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shelterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shelters
     * const shelters = await prisma.shelter.findMany()
     * 
     * // Get first 10 Shelters
     * const shelters = await prisma.shelter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shelterWithIdOnly = await prisma.shelter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends shelterFindManyArgs>(args?: SelectSubset<T, shelterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shelterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shelter.
     * @param {shelterCreateArgs} args - Arguments to create a Shelter.
     * @example
     * // Create one Shelter
     * const Shelter = await prisma.shelter.create({
     *   data: {
     *     // ... data to create a Shelter
     *   }
     * })
     * 
     */
    create<T extends shelterCreateArgs>(args: SelectSubset<T, shelterCreateArgs<ExtArgs>>): Prisma__shelterClient<$Result.GetResult<Prisma.$shelterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shelters.
     * @param {shelterCreateManyArgs} args - Arguments to create many Shelters.
     * @example
     * // Create many Shelters
     * const shelter = await prisma.shelter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends shelterCreateManyArgs>(args?: SelectSubset<T, shelterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shelters and returns the data saved in the database.
     * @param {shelterCreateManyAndReturnArgs} args - Arguments to create many Shelters.
     * @example
     * // Create many Shelters
     * const shelter = await prisma.shelter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shelters and only return the `id`
     * const shelterWithIdOnly = await prisma.shelter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends shelterCreateManyAndReturnArgs>(args?: SelectSubset<T, shelterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shelterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shelter.
     * @param {shelterDeleteArgs} args - Arguments to delete one Shelter.
     * @example
     * // Delete one Shelter
     * const Shelter = await prisma.shelter.delete({
     *   where: {
     *     // ... filter to delete one Shelter
     *   }
     * })
     * 
     */
    delete<T extends shelterDeleteArgs>(args: SelectSubset<T, shelterDeleteArgs<ExtArgs>>): Prisma__shelterClient<$Result.GetResult<Prisma.$shelterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shelter.
     * @param {shelterUpdateArgs} args - Arguments to update one Shelter.
     * @example
     * // Update one Shelter
     * const shelter = await prisma.shelter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends shelterUpdateArgs>(args: SelectSubset<T, shelterUpdateArgs<ExtArgs>>): Prisma__shelterClient<$Result.GetResult<Prisma.$shelterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shelters.
     * @param {shelterDeleteManyArgs} args - Arguments to filter Shelters to delete.
     * @example
     * // Delete a few Shelters
     * const { count } = await prisma.shelter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends shelterDeleteManyArgs>(args?: SelectSubset<T, shelterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shelters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shelterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shelters
     * const shelter = await prisma.shelter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends shelterUpdateManyArgs>(args: SelectSubset<T, shelterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shelters and returns the data updated in the database.
     * @param {shelterUpdateManyAndReturnArgs} args - Arguments to update many Shelters.
     * @example
     * // Update many Shelters
     * const shelter = await prisma.shelter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shelters and only return the `id`
     * const shelterWithIdOnly = await prisma.shelter.updateManyAndReturn({
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
    updateManyAndReturn<T extends shelterUpdateManyAndReturnArgs>(args: SelectSubset<T, shelterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shelterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shelter.
     * @param {shelterUpsertArgs} args - Arguments to update or create a Shelter.
     * @example
     * // Update or create a Shelter
     * const shelter = await prisma.shelter.upsert({
     *   create: {
     *     // ... data to create a Shelter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shelter we want to update
     *   }
     * })
     */
    upsert<T extends shelterUpsertArgs>(args: SelectSubset<T, shelterUpsertArgs<ExtArgs>>): Prisma__shelterClient<$Result.GetResult<Prisma.$shelterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shelters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shelterCountArgs} args - Arguments to filter Shelters to count.
     * @example
     * // Count the number of Shelters
     * const count = await prisma.shelter.count({
     *   where: {
     *     // ... the filter for the Shelters we want to count
     *   }
     * })
    **/
    count<T extends shelterCountArgs>(
      args?: Subset<T, shelterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShelterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shelter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShelterAggregateArgs>(args: Subset<T, ShelterAggregateArgs>): Prisma.PrismaPromise<GetShelterAggregateType<T>>

    /**
     * Group by Shelter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shelterGroupByArgs} args - Group by arguments.
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
      T extends shelterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: shelterGroupByArgs['orderBy'] }
        : { orderBy?: shelterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, shelterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShelterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the shelter model
   */
  readonly fields: shelterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for shelter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__shelterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    city<T extends cityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cityDefaultArgs<ExtArgs>>): Prisma__cityClient<$Result.GetResult<Prisma.$cityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    person<T extends personDefaultArgs<ExtArgs> = {}>(args?: Subset<T, personDefaultArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the shelter model
   */
  interface shelterFieldRefs {
    readonly id: FieldRef<"shelter", 'BigInt'>
    readonly name: FieldRef<"shelter", 'String'>
    readonly address: FieldRef<"shelter", 'String'>
    readonly city_id: FieldRef<"shelter", 'BigInt'>
    readonly person_id: FieldRef<"shelter", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * shelter findUnique
   */
  export type shelterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shelterInclude<ExtArgs> | null
    /**
     * Filter, which shelter to fetch.
     */
    where: shelterWhereUniqueInput
  }

  /**
   * shelter findUniqueOrThrow
   */
  export type shelterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shelterInclude<ExtArgs> | null
    /**
     * Filter, which shelter to fetch.
     */
    where: shelterWhereUniqueInput
  }

  /**
   * shelter findFirst
   */
  export type shelterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shelterInclude<ExtArgs> | null
    /**
     * Filter, which shelter to fetch.
     */
    where?: shelterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shelters to fetch.
     */
    orderBy?: shelterOrderByWithRelationInput | shelterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shelters.
     */
    cursor?: shelterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shelters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shelters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shelters.
     */
    distinct?: ShelterScalarFieldEnum | ShelterScalarFieldEnum[]
  }

  /**
   * shelter findFirstOrThrow
   */
  export type shelterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shelterInclude<ExtArgs> | null
    /**
     * Filter, which shelter to fetch.
     */
    where?: shelterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shelters to fetch.
     */
    orderBy?: shelterOrderByWithRelationInput | shelterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shelters.
     */
    cursor?: shelterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shelters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shelters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shelters.
     */
    distinct?: ShelterScalarFieldEnum | ShelterScalarFieldEnum[]
  }

  /**
   * shelter findMany
   */
  export type shelterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shelterInclude<ExtArgs> | null
    /**
     * Filter, which shelters to fetch.
     */
    where?: shelterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shelters to fetch.
     */
    orderBy?: shelterOrderByWithRelationInput | shelterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing shelters.
     */
    cursor?: shelterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shelters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shelters.
     */
    skip?: number
    distinct?: ShelterScalarFieldEnum | ShelterScalarFieldEnum[]
  }

  /**
   * shelter create
   */
  export type shelterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shelterInclude<ExtArgs> | null
    /**
     * The data needed to create a shelter.
     */
    data: XOR<shelterCreateInput, shelterUncheckedCreateInput>
  }

  /**
   * shelter createMany
   */
  export type shelterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many shelters.
     */
    data: shelterCreateManyInput | shelterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * shelter createManyAndReturn
   */
  export type shelterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * The data used to create many shelters.
     */
    data: shelterCreateManyInput | shelterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shelterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * shelter update
   */
  export type shelterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shelterInclude<ExtArgs> | null
    /**
     * The data needed to update a shelter.
     */
    data: XOR<shelterUpdateInput, shelterUncheckedUpdateInput>
    /**
     * Choose, which shelter to update.
     */
    where: shelterWhereUniqueInput
  }

  /**
   * shelter updateMany
   */
  export type shelterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update shelters.
     */
    data: XOR<shelterUpdateManyMutationInput, shelterUncheckedUpdateManyInput>
    /**
     * Filter which shelters to update
     */
    where?: shelterWhereInput
    /**
     * Limit how many shelters to update.
     */
    limit?: number
  }

  /**
   * shelter updateManyAndReturn
   */
  export type shelterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * The data used to update shelters.
     */
    data: XOR<shelterUpdateManyMutationInput, shelterUncheckedUpdateManyInput>
    /**
     * Filter which shelters to update
     */
    where?: shelterWhereInput
    /**
     * Limit how many shelters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shelterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * shelter upsert
   */
  export type shelterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shelterInclude<ExtArgs> | null
    /**
     * The filter to search for the shelter to update in case it exists.
     */
    where: shelterWhereUniqueInput
    /**
     * In case the shelter found by the `where` argument doesn't exist, create a new shelter with this data.
     */
    create: XOR<shelterCreateInput, shelterUncheckedCreateInput>
    /**
     * In case the shelter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<shelterUpdateInput, shelterUncheckedUpdateInput>
  }

  /**
   * shelter delete
   */
  export type shelterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shelterInclude<ExtArgs> | null
    /**
     * Filter which shelter to delete.
     */
    where: shelterWhereUniqueInput
  }

  /**
   * shelter deleteMany
   */
  export type shelterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shelters to delete
     */
    where?: shelterWhereInput
    /**
     * Limit how many shelters to delete.
     */
    limit?: number
  }

  /**
   * shelter without action
   */
  export type shelterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shelterInclude<ExtArgs> | null
  }


  /**
   * Model trait
   */

  export type AggregateTrait = {
    _count: TraitCountAggregateOutputType | null
    _avg: TraitAvgAggregateOutputType | null
    _sum: TraitSumAggregateOutputType | null
    _min: TraitMinAggregateOutputType | null
    _max: TraitMaxAggregateOutputType | null
  }

  export type TraitAvgAggregateOutputType = {
    id: number | null
    code: number | null
  }

  export type TraitSumAggregateOutputType = {
    id: bigint | null
    code: number | null
  }

  export type TraitMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    code: number | null
  }

  export type TraitMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    code: number | null
  }

  export type TraitCountAggregateOutputType = {
    id: number
    name: number
    code: number
    _all: number
  }


  export type TraitAvgAggregateInputType = {
    id?: true
    code?: true
  }

  export type TraitSumAggregateInputType = {
    id?: true
    code?: true
  }

  export type TraitMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
  }

  export type TraitMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
  }

  export type TraitCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    _all?: true
  }

  export type TraitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trait to aggregate.
     */
    where?: traitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of traits to fetch.
     */
    orderBy?: traitOrderByWithRelationInput | traitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: traitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` traits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` traits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned traits
    **/
    _count?: true | TraitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TraitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TraitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TraitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TraitMaxAggregateInputType
  }

  export type GetTraitAggregateType<T extends TraitAggregateArgs> = {
        [P in keyof T & keyof AggregateTrait]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrait[P]>
      : GetScalarType<T[P], AggregateTrait[P]>
  }




  export type traitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: traitWhereInput
    orderBy?: traitOrderByWithAggregationInput | traitOrderByWithAggregationInput[]
    by: TraitScalarFieldEnum[] | TraitScalarFieldEnum
    having?: traitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TraitCountAggregateInputType | true
    _avg?: TraitAvgAggregateInputType
    _sum?: TraitSumAggregateInputType
    _min?: TraitMinAggregateInputType
    _max?: TraitMaxAggregateInputType
  }

  export type TraitGroupByOutputType = {
    id: bigint
    name: string
    code: number
    _count: TraitCountAggregateOutputType | null
    _avg: TraitAvgAggregateOutputType | null
    _sum: TraitSumAggregateOutputType | null
    _min: TraitMinAggregateOutputType | null
    _max: TraitMaxAggregateOutputType | null
  }

  type GetTraitGroupByPayload<T extends traitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TraitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TraitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TraitGroupByOutputType[P]>
            : GetScalarType<T[P], TraitGroupByOutputType[P]>
        }
      >
    >


  export type traitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    pets?: boolean | trait$petsArgs<ExtArgs>
    _count?: boolean | TraitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trait"]>

  export type traitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
  }, ExtArgs["result"]["trait"]>

  export type traitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
  }, ExtArgs["result"]["trait"]>

  export type traitSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
  }

  export type traitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code", ExtArgs["result"]["trait"]>
  export type traitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | trait$petsArgs<ExtArgs>
    _count?: boolean | TraitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type traitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type traitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $traitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "trait"
    objects: {
      pets: Prisma.$petPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      code: number
    }, ExtArgs["result"]["trait"]>
    composites: {}
  }

  type traitGetPayload<S extends boolean | null | undefined | traitDefaultArgs> = $Result.GetResult<Prisma.$traitPayload, S>

  type traitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<traitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TraitCountAggregateInputType | true
    }

  export interface traitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['trait'], meta: { name: 'trait' } }
    /**
     * Find zero or one Trait that matches the filter.
     * @param {traitFindUniqueArgs} args - Arguments to find a Trait
     * @example
     * // Get one Trait
     * const trait = await prisma.trait.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends traitFindUniqueArgs>(args: SelectSubset<T, traitFindUniqueArgs<ExtArgs>>): Prisma__traitClient<$Result.GetResult<Prisma.$traitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trait that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {traitFindUniqueOrThrowArgs} args - Arguments to find a Trait
     * @example
     * // Get one Trait
     * const trait = await prisma.trait.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends traitFindUniqueOrThrowArgs>(args: SelectSubset<T, traitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__traitClient<$Result.GetResult<Prisma.$traitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trait that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {traitFindFirstArgs} args - Arguments to find a Trait
     * @example
     * // Get one Trait
     * const trait = await prisma.trait.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends traitFindFirstArgs>(args?: SelectSubset<T, traitFindFirstArgs<ExtArgs>>): Prisma__traitClient<$Result.GetResult<Prisma.$traitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trait that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {traitFindFirstOrThrowArgs} args - Arguments to find a Trait
     * @example
     * // Get one Trait
     * const trait = await prisma.trait.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends traitFindFirstOrThrowArgs>(args?: SelectSubset<T, traitFindFirstOrThrowArgs<ExtArgs>>): Prisma__traitClient<$Result.GetResult<Prisma.$traitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Traits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {traitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Traits
     * const traits = await prisma.trait.findMany()
     * 
     * // Get first 10 Traits
     * const traits = await prisma.trait.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const traitWithIdOnly = await prisma.trait.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends traitFindManyArgs>(args?: SelectSubset<T, traitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$traitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trait.
     * @param {traitCreateArgs} args - Arguments to create a Trait.
     * @example
     * // Create one Trait
     * const Trait = await prisma.trait.create({
     *   data: {
     *     // ... data to create a Trait
     *   }
     * })
     * 
     */
    create<T extends traitCreateArgs>(args: SelectSubset<T, traitCreateArgs<ExtArgs>>): Prisma__traitClient<$Result.GetResult<Prisma.$traitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Traits.
     * @param {traitCreateManyArgs} args - Arguments to create many Traits.
     * @example
     * // Create many Traits
     * const trait = await prisma.trait.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends traitCreateManyArgs>(args?: SelectSubset<T, traitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Traits and returns the data saved in the database.
     * @param {traitCreateManyAndReturnArgs} args - Arguments to create many Traits.
     * @example
     * // Create many Traits
     * const trait = await prisma.trait.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Traits and only return the `id`
     * const traitWithIdOnly = await prisma.trait.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends traitCreateManyAndReturnArgs>(args?: SelectSubset<T, traitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$traitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trait.
     * @param {traitDeleteArgs} args - Arguments to delete one Trait.
     * @example
     * // Delete one Trait
     * const Trait = await prisma.trait.delete({
     *   where: {
     *     // ... filter to delete one Trait
     *   }
     * })
     * 
     */
    delete<T extends traitDeleteArgs>(args: SelectSubset<T, traitDeleteArgs<ExtArgs>>): Prisma__traitClient<$Result.GetResult<Prisma.$traitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trait.
     * @param {traitUpdateArgs} args - Arguments to update one Trait.
     * @example
     * // Update one Trait
     * const trait = await prisma.trait.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends traitUpdateArgs>(args: SelectSubset<T, traitUpdateArgs<ExtArgs>>): Prisma__traitClient<$Result.GetResult<Prisma.$traitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Traits.
     * @param {traitDeleteManyArgs} args - Arguments to filter Traits to delete.
     * @example
     * // Delete a few Traits
     * const { count } = await prisma.trait.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends traitDeleteManyArgs>(args?: SelectSubset<T, traitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Traits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {traitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Traits
     * const trait = await prisma.trait.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends traitUpdateManyArgs>(args: SelectSubset<T, traitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Traits and returns the data updated in the database.
     * @param {traitUpdateManyAndReturnArgs} args - Arguments to update many Traits.
     * @example
     * // Update many Traits
     * const trait = await prisma.trait.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Traits and only return the `id`
     * const traitWithIdOnly = await prisma.trait.updateManyAndReturn({
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
    updateManyAndReturn<T extends traitUpdateManyAndReturnArgs>(args: SelectSubset<T, traitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$traitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trait.
     * @param {traitUpsertArgs} args - Arguments to update or create a Trait.
     * @example
     * // Update or create a Trait
     * const trait = await prisma.trait.upsert({
     *   create: {
     *     // ... data to create a Trait
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trait we want to update
     *   }
     * })
     */
    upsert<T extends traitUpsertArgs>(args: SelectSubset<T, traitUpsertArgs<ExtArgs>>): Prisma__traitClient<$Result.GetResult<Prisma.$traitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Traits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {traitCountArgs} args - Arguments to filter Traits to count.
     * @example
     * // Count the number of Traits
     * const count = await prisma.trait.count({
     *   where: {
     *     // ... the filter for the Traits we want to count
     *   }
     * })
    **/
    count<T extends traitCountArgs>(
      args?: Subset<T, traitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TraitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trait.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TraitAggregateArgs>(args: Subset<T, TraitAggregateArgs>): Prisma.PrismaPromise<GetTraitAggregateType<T>>

    /**
     * Group by Trait.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {traitGroupByArgs} args - Group by arguments.
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
      T extends traitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: traitGroupByArgs['orderBy'] }
        : { orderBy?: traitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, traitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTraitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the trait model
   */
  readonly fields: traitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trait.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__traitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pets<T extends trait$petsArgs<ExtArgs> = {}>(args?: Subset<T, trait$petsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the trait model
   */
  interface traitFieldRefs {
    readonly id: FieldRef<"trait", 'BigInt'>
    readonly name: FieldRef<"trait", 'String'>
    readonly code: FieldRef<"trait", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * trait findUnique
   */
  export type traitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trait
     */
    select?: traitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trait
     */
    omit?: traitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: traitInclude<ExtArgs> | null
    /**
     * Filter, which trait to fetch.
     */
    where: traitWhereUniqueInput
  }

  /**
   * trait findUniqueOrThrow
   */
  export type traitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trait
     */
    select?: traitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trait
     */
    omit?: traitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: traitInclude<ExtArgs> | null
    /**
     * Filter, which trait to fetch.
     */
    where: traitWhereUniqueInput
  }

  /**
   * trait findFirst
   */
  export type traitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trait
     */
    select?: traitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trait
     */
    omit?: traitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: traitInclude<ExtArgs> | null
    /**
     * Filter, which trait to fetch.
     */
    where?: traitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of traits to fetch.
     */
    orderBy?: traitOrderByWithRelationInput | traitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for traits.
     */
    cursor?: traitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` traits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` traits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of traits.
     */
    distinct?: TraitScalarFieldEnum | TraitScalarFieldEnum[]
  }

  /**
   * trait findFirstOrThrow
   */
  export type traitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trait
     */
    select?: traitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trait
     */
    omit?: traitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: traitInclude<ExtArgs> | null
    /**
     * Filter, which trait to fetch.
     */
    where?: traitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of traits to fetch.
     */
    orderBy?: traitOrderByWithRelationInput | traitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for traits.
     */
    cursor?: traitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` traits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` traits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of traits.
     */
    distinct?: TraitScalarFieldEnum | TraitScalarFieldEnum[]
  }

  /**
   * trait findMany
   */
  export type traitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trait
     */
    select?: traitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trait
     */
    omit?: traitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: traitInclude<ExtArgs> | null
    /**
     * Filter, which traits to fetch.
     */
    where?: traitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of traits to fetch.
     */
    orderBy?: traitOrderByWithRelationInput | traitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing traits.
     */
    cursor?: traitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` traits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` traits.
     */
    skip?: number
    distinct?: TraitScalarFieldEnum | TraitScalarFieldEnum[]
  }

  /**
   * trait create
   */
  export type traitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trait
     */
    select?: traitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trait
     */
    omit?: traitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: traitInclude<ExtArgs> | null
    /**
     * The data needed to create a trait.
     */
    data: XOR<traitCreateInput, traitUncheckedCreateInput>
  }

  /**
   * trait createMany
   */
  export type traitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many traits.
     */
    data: traitCreateManyInput | traitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * trait createManyAndReturn
   */
  export type traitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trait
     */
    select?: traitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the trait
     */
    omit?: traitOmit<ExtArgs> | null
    /**
     * The data used to create many traits.
     */
    data: traitCreateManyInput | traitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * trait update
   */
  export type traitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trait
     */
    select?: traitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trait
     */
    omit?: traitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: traitInclude<ExtArgs> | null
    /**
     * The data needed to update a trait.
     */
    data: XOR<traitUpdateInput, traitUncheckedUpdateInput>
    /**
     * Choose, which trait to update.
     */
    where: traitWhereUniqueInput
  }

  /**
   * trait updateMany
   */
  export type traitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update traits.
     */
    data: XOR<traitUpdateManyMutationInput, traitUncheckedUpdateManyInput>
    /**
     * Filter which traits to update
     */
    where?: traitWhereInput
    /**
     * Limit how many traits to update.
     */
    limit?: number
  }

  /**
   * trait updateManyAndReturn
   */
  export type traitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trait
     */
    select?: traitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the trait
     */
    omit?: traitOmit<ExtArgs> | null
    /**
     * The data used to update traits.
     */
    data: XOR<traitUpdateManyMutationInput, traitUncheckedUpdateManyInput>
    /**
     * Filter which traits to update
     */
    where?: traitWhereInput
    /**
     * Limit how many traits to update.
     */
    limit?: number
  }

  /**
   * trait upsert
   */
  export type traitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trait
     */
    select?: traitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trait
     */
    omit?: traitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: traitInclude<ExtArgs> | null
    /**
     * The filter to search for the trait to update in case it exists.
     */
    where: traitWhereUniqueInput
    /**
     * In case the trait found by the `where` argument doesn't exist, create a new trait with this data.
     */
    create: XOR<traitCreateInput, traitUncheckedCreateInput>
    /**
     * In case the trait was found with the provided `where` argument, update it with this data.
     */
    update: XOR<traitUpdateInput, traitUncheckedUpdateInput>
  }

  /**
   * trait delete
   */
  export type traitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trait
     */
    select?: traitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trait
     */
    omit?: traitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: traitInclude<ExtArgs> | null
    /**
     * Filter which trait to delete.
     */
    where: traitWhereUniqueInput
  }

  /**
   * trait deleteMany
   */
  export type traitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which traits to delete
     */
    where?: traitWhereInput
    /**
     * Limit how many traits to delete.
     */
    limit?: number
  }

  /**
   * trait.pets
   */
  export type trait$petsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    where?: petWhereInput
    orderBy?: petOrderByWithRelationInput | petOrderByWithRelationInput[]
    cursor?: petWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * trait without action
   */
  export type traitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trait
     */
    select?: traitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trait
     */
    omit?: traitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: traitInclude<ExtArgs> | null
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


  export const CityScalarFieldEnum: {
    id: 'id',
    city: 'city',
    province_id: 'province_id'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    birth_date: 'birth_date',
    gender: 'gender',
    address: 'address',
    city_id: 'city_id',
    phone: 'phone',
    last_active_at: 'last_active_at'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const PetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    birth_date: 'birth_date',
    gender: 'gender',
    person_id: 'person_id',
    description: 'description',
    has_spotlight: 'has_spotlight'
  };

  export type PetScalarFieldEnum = (typeof PetScalarFieldEnum)[keyof typeof PetScalarFieldEnum]


  export const ProvinceScalarFieldEnum: {
    id: 'id',
    province: 'province'
  };

  export type ProvinceScalarFieldEnum = (typeof ProvinceScalarFieldEnum)[keyof typeof ProvinceScalarFieldEnum]


  export const ShelterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    city_id: 'city_id',
    person_id: 'person_id'
  };

  export type ShelterScalarFieldEnum = (typeof ShelterScalarFieldEnum)[keyof typeof ShelterScalarFieldEnum]


  export const TraitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code'
  };

  export type TraitScalarFieldEnum = (typeof TraitScalarFieldEnum)[keyof typeof TraitScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type cityWhereInput = {
    AND?: cityWhereInput | cityWhereInput[]
    OR?: cityWhereInput[]
    NOT?: cityWhereInput | cityWhereInput[]
    id?: BigIntFilter<"city"> | bigint | number
    city?: StringFilter<"city"> | string
    province_id?: BigIntFilter<"city"> | bigint | number
    province?: XOR<ProvinceScalarRelationFilter, provinceWhereInput>
    person?: PersonListRelationFilter
    shelter?: ShelterListRelationFilter
  }

  export type cityOrderByWithRelationInput = {
    id?: SortOrder
    city?: SortOrder
    province_id?: SortOrder
    province?: provinceOrderByWithRelationInput
    person?: personOrderByRelationAggregateInput
    shelter?: shelterOrderByRelationAggregateInput
  }

  export type cityWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: cityWhereInput | cityWhereInput[]
    OR?: cityWhereInput[]
    NOT?: cityWhereInput | cityWhereInput[]
    city?: StringFilter<"city"> | string
    province_id?: BigIntFilter<"city"> | bigint | number
    province?: XOR<ProvinceScalarRelationFilter, provinceWhereInput>
    person?: PersonListRelationFilter
    shelter?: ShelterListRelationFilter
  }, "id">

  export type cityOrderByWithAggregationInput = {
    id?: SortOrder
    city?: SortOrder
    province_id?: SortOrder
    _count?: cityCountOrderByAggregateInput
    _avg?: cityAvgOrderByAggregateInput
    _max?: cityMaxOrderByAggregateInput
    _min?: cityMinOrderByAggregateInput
    _sum?: citySumOrderByAggregateInput
  }

  export type cityScalarWhereWithAggregatesInput = {
    AND?: cityScalarWhereWithAggregatesInput | cityScalarWhereWithAggregatesInput[]
    OR?: cityScalarWhereWithAggregatesInput[]
    NOT?: cityScalarWhereWithAggregatesInput | cityScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"city"> | bigint | number
    city?: StringWithAggregatesFilter<"city"> | string
    province_id?: BigIntWithAggregatesFilter<"city"> | bigint | number
  }

  export type personWhereInput = {
    AND?: personWhereInput | personWhereInput[]
    OR?: personWhereInput[]
    NOT?: personWhereInput | personWhereInput[]
    id?: BigIntFilter<"person"> | bigint | number
    name?: StringFilter<"person"> | string
    birth_date?: DateTimeFilter<"person"> | Date | string
    gender?: IntFilter<"person"> | number
    address?: StringFilter<"person"> | string
    city_id?: BigIntFilter<"person"> | bigint | number
    phone?: BigIntFilter<"person"> | bigint | number
    last_active_at?: DateTimeFilter<"person"> | Date | string
    city?: XOR<CityScalarRelationFilter, cityWhereInput>
    pet?: PetListRelationFilter
    shelter?: ShelterListRelationFilter
  }

  export type personOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    city_id?: SortOrder
    phone?: SortOrder
    last_active_at?: SortOrder
    city?: cityOrderByWithRelationInput
    pet?: petOrderByRelationAggregateInput
    shelter?: shelterOrderByRelationAggregateInput
  }

  export type personWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: personWhereInput | personWhereInput[]
    OR?: personWhereInput[]
    NOT?: personWhereInput | personWhereInput[]
    name?: StringFilter<"person"> | string
    birth_date?: DateTimeFilter<"person"> | Date | string
    gender?: IntFilter<"person"> | number
    address?: StringFilter<"person"> | string
    city_id?: BigIntFilter<"person"> | bigint | number
    phone?: BigIntFilter<"person"> | bigint | number
    last_active_at?: DateTimeFilter<"person"> | Date | string
    city?: XOR<CityScalarRelationFilter, cityWhereInput>
    pet?: PetListRelationFilter
    shelter?: ShelterListRelationFilter
  }, "id">

  export type personOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    city_id?: SortOrder
    phone?: SortOrder
    last_active_at?: SortOrder
    _count?: personCountOrderByAggregateInput
    _avg?: personAvgOrderByAggregateInput
    _max?: personMaxOrderByAggregateInput
    _min?: personMinOrderByAggregateInput
    _sum?: personSumOrderByAggregateInput
  }

  export type personScalarWhereWithAggregatesInput = {
    AND?: personScalarWhereWithAggregatesInput | personScalarWhereWithAggregatesInput[]
    OR?: personScalarWhereWithAggregatesInput[]
    NOT?: personScalarWhereWithAggregatesInput | personScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"person"> | bigint | number
    name?: StringWithAggregatesFilter<"person"> | string
    birth_date?: DateTimeWithAggregatesFilter<"person"> | Date | string
    gender?: IntWithAggregatesFilter<"person"> | number
    address?: StringWithAggregatesFilter<"person"> | string
    city_id?: BigIntWithAggregatesFilter<"person"> | bigint | number
    phone?: BigIntWithAggregatesFilter<"person"> | bigint | number
    last_active_at?: DateTimeWithAggregatesFilter<"person"> | Date | string
  }

  export type petWhereInput = {
    AND?: petWhereInput | petWhereInput[]
    OR?: petWhereInput[]
    NOT?: petWhereInput | petWhereInput[]
    id?: BigIntFilter<"pet"> | bigint | number
    name?: StringFilter<"pet"> | string
    birth_date?: DateTimeFilter<"pet"> | Date | string
    gender?: IntFilter<"pet"> | number
    person_id?: BigIntFilter<"pet"> | bigint | number
    description?: StringFilter<"pet"> | string
    has_spotlight?: BoolFilter<"pet"> | boolean
    person?: XOR<PersonScalarRelationFilter, personWhereInput>
    traits?: TraitListRelationFilter
  }

  export type petOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    person_id?: SortOrder
    description?: SortOrder
    has_spotlight?: SortOrder
    person?: personOrderByWithRelationInput
    traits?: traitOrderByRelationAggregateInput
  }

  export type petWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: petWhereInput | petWhereInput[]
    OR?: petWhereInput[]
    NOT?: petWhereInput | petWhereInput[]
    name?: StringFilter<"pet"> | string
    birth_date?: DateTimeFilter<"pet"> | Date | string
    gender?: IntFilter<"pet"> | number
    person_id?: BigIntFilter<"pet"> | bigint | number
    description?: StringFilter<"pet"> | string
    has_spotlight?: BoolFilter<"pet"> | boolean
    person?: XOR<PersonScalarRelationFilter, personWhereInput>
    traits?: TraitListRelationFilter
  }, "id">

  export type petOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    person_id?: SortOrder
    description?: SortOrder
    has_spotlight?: SortOrder
    _count?: petCountOrderByAggregateInput
    _avg?: petAvgOrderByAggregateInput
    _max?: petMaxOrderByAggregateInput
    _min?: petMinOrderByAggregateInput
    _sum?: petSumOrderByAggregateInput
  }

  export type petScalarWhereWithAggregatesInput = {
    AND?: petScalarWhereWithAggregatesInput | petScalarWhereWithAggregatesInput[]
    OR?: petScalarWhereWithAggregatesInput[]
    NOT?: petScalarWhereWithAggregatesInput | petScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"pet"> | bigint | number
    name?: StringWithAggregatesFilter<"pet"> | string
    birth_date?: DateTimeWithAggregatesFilter<"pet"> | Date | string
    gender?: IntWithAggregatesFilter<"pet"> | number
    person_id?: BigIntWithAggregatesFilter<"pet"> | bigint | number
    description?: StringWithAggregatesFilter<"pet"> | string
    has_spotlight?: BoolWithAggregatesFilter<"pet"> | boolean
  }

  export type provinceWhereInput = {
    AND?: provinceWhereInput | provinceWhereInput[]
    OR?: provinceWhereInput[]
    NOT?: provinceWhereInput | provinceWhereInput[]
    id?: BigIntFilter<"province"> | bigint | number
    province?: StringFilter<"province"> | string
    city?: CityListRelationFilter
  }

  export type provinceOrderByWithRelationInput = {
    id?: SortOrder
    province?: SortOrder
    city?: cityOrderByRelationAggregateInput
  }

  export type provinceWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: provinceWhereInput | provinceWhereInput[]
    OR?: provinceWhereInput[]
    NOT?: provinceWhereInput | provinceWhereInput[]
    province?: StringFilter<"province"> | string
    city?: CityListRelationFilter
  }, "id">

  export type provinceOrderByWithAggregationInput = {
    id?: SortOrder
    province?: SortOrder
    _count?: provinceCountOrderByAggregateInput
    _avg?: provinceAvgOrderByAggregateInput
    _max?: provinceMaxOrderByAggregateInput
    _min?: provinceMinOrderByAggregateInput
    _sum?: provinceSumOrderByAggregateInput
  }

  export type provinceScalarWhereWithAggregatesInput = {
    AND?: provinceScalarWhereWithAggregatesInput | provinceScalarWhereWithAggregatesInput[]
    OR?: provinceScalarWhereWithAggregatesInput[]
    NOT?: provinceScalarWhereWithAggregatesInput | provinceScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"province"> | bigint | number
    province?: StringWithAggregatesFilter<"province"> | string
  }

  export type shelterWhereInput = {
    AND?: shelterWhereInput | shelterWhereInput[]
    OR?: shelterWhereInput[]
    NOT?: shelterWhereInput | shelterWhereInput[]
    id?: BigIntFilter<"shelter"> | bigint | number
    name?: StringFilter<"shelter"> | string
    address?: StringFilter<"shelter"> | string
    city_id?: BigIntFilter<"shelter"> | bigint | number
    person_id?: BigIntFilter<"shelter"> | bigint | number
    city?: XOR<CityScalarRelationFilter, cityWhereInput>
    person?: XOR<PersonScalarRelationFilter, personWhereInput>
  }

  export type shelterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city_id?: SortOrder
    person_id?: SortOrder
    city?: cityOrderByWithRelationInput
    person?: personOrderByWithRelationInput
  }

  export type shelterWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: shelterWhereInput | shelterWhereInput[]
    OR?: shelterWhereInput[]
    NOT?: shelterWhereInput | shelterWhereInput[]
    name?: StringFilter<"shelter"> | string
    address?: StringFilter<"shelter"> | string
    city_id?: BigIntFilter<"shelter"> | bigint | number
    person_id?: BigIntFilter<"shelter"> | bigint | number
    city?: XOR<CityScalarRelationFilter, cityWhereInput>
    person?: XOR<PersonScalarRelationFilter, personWhereInput>
  }, "id">

  export type shelterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city_id?: SortOrder
    person_id?: SortOrder
    _count?: shelterCountOrderByAggregateInput
    _avg?: shelterAvgOrderByAggregateInput
    _max?: shelterMaxOrderByAggregateInput
    _min?: shelterMinOrderByAggregateInput
    _sum?: shelterSumOrderByAggregateInput
  }

  export type shelterScalarWhereWithAggregatesInput = {
    AND?: shelterScalarWhereWithAggregatesInput | shelterScalarWhereWithAggregatesInput[]
    OR?: shelterScalarWhereWithAggregatesInput[]
    NOT?: shelterScalarWhereWithAggregatesInput | shelterScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"shelter"> | bigint | number
    name?: StringWithAggregatesFilter<"shelter"> | string
    address?: StringWithAggregatesFilter<"shelter"> | string
    city_id?: BigIntWithAggregatesFilter<"shelter"> | bigint | number
    person_id?: BigIntWithAggregatesFilter<"shelter"> | bigint | number
  }

  export type traitWhereInput = {
    AND?: traitWhereInput | traitWhereInput[]
    OR?: traitWhereInput[]
    NOT?: traitWhereInput | traitWhereInput[]
    id?: BigIntFilter<"trait"> | bigint | number
    name?: StringFilter<"trait"> | string
    code?: IntFilter<"trait"> | number
    pets?: PetListRelationFilter
  }

  export type traitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    pets?: petOrderByRelationAggregateInput
  }

  export type traitWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: traitWhereInput | traitWhereInput[]
    OR?: traitWhereInput[]
    NOT?: traitWhereInput | traitWhereInput[]
    name?: StringFilter<"trait"> | string
    code?: IntFilter<"trait"> | number
    pets?: PetListRelationFilter
  }, "id">

  export type traitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    _count?: traitCountOrderByAggregateInput
    _avg?: traitAvgOrderByAggregateInput
    _max?: traitMaxOrderByAggregateInput
    _min?: traitMinOrderByAggregateInput
    _sum?: traitSumOrderByAggregateInput
  }

  export type traitScalarWhereWithAggregatesInput = {
    AND?: traitScalarWhereWithAggregatesInput | traitScalarWhereWithAggregatesInput[]
    OR?: traitScalarWhereWithAggregatesInput[]
    NOT?: traitScalarWhereWithAggregatesInput | traitScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"trait"> | bigint | number
    name?: StringWithAggregatesFilter<"trait"> | string
    code?: IntWithAggregatesFilter<"trait"> | number
  }

  export type cityCreateInput = {
    id: bigint | number
    city: string
    province: provinceCreateNestedOneWithoutCityInput
    person?: personCreateNestedManyWithoutCityInput
    shelter?: shelterCreateNestedManyWithoutCityInput
  }

  export type cityUncheckedCreateInput = {
    id: bigint | number
    city: string
    province_id: bigint | number
    person?: personUncheckedCreateNestedManyWithoutCityInput
    shelter?: shelterUncheckedCreateNestedManyWithoutCityInput
  }

  export type cityUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    city?: StringFieldUpdateOperationsInput | string
    province?: provinceUpdateOneRequiredWithoutCityNestedInput
    person?: personUpdateManyWithoutCityNestedInput
    shelter?: shelterUpdateManyWithoutCityNestedInput
  }

  export type cityUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    city?: StringFieldUpdateOperationsInput | string
    province_id?: BigIntFieldUpdateOperationsInput | bigint | number
    person?: personUncheckedUpdateManyWithoutCityNestedInput
    shelter?: shelterUncheckedUpdateManyWithoutCityNestedInput
  }

  export type cityCreateManyInput = {
    id: bigint | number
    city: string
    province_id: bigint | number
  }

  export type cityUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    city?: StringFieldUpdateOperationsInput | string
  }

  export type cityUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    city?: StringFieldUpdateOperationsInput | string
    province_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type personCreateInput = {
    id?: bigint | number
    name: string
    birth_date: Date | string
    gender: number
    address: string
    phone: bigint | number
    last_active_at?: Date | string
    city: cityCreateNestedOneWithoutPersonInput
    pet?: petCreateNestedManyWithoutPersonInput
    shelter?: shelterCreateNestedManyWithoutPersonInput
  }

  export type personUncheckedCreateInput = {
    id?: bigint | number
    name: string
    birth_date: Date | string
    gender: number
    address: string
    city_id: bigint | number
    phone: bigint | number
    last_active_at?: Date | string
    pet?: petUncheckedCreateNestedManyWithoutPersonInput
    shelter?: shelterUncheckedCreateNestedManyWithoutPersonInput
  }

  export type personUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    phone?: BigIntFieldUpdateOperationsInput | bigint | number
    last_active_at?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: cityUpdateOneRequiredWithoutPersonNestedInput
    pet?: petUpdateManyWithoutPersonNestedInput
    shelter?: shelterUpdateManyWithoutPersonNestedInput
  }

  export type personUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city_id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone?: BigIntFieldUpdateOperationsInput | bigint | number
    last_active_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: petUncheckedUpdateManyWithoutPersonNestedInput
    shelter?: shelterUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type personCreateManyInput = {
    id?: bigint | number
    name: string
    birth_date: Date | string
    gender: number
    address: string
    city_id: bigint | number
    phone: bigint | number
    last_active_at?: Date | string
  }

  export type personUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    phone?: BigIntFieldUpdateOperationsInput | bigint | number
    last_active_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type personUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city_id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone?: BigIntFieldUpdateOperationsInput | bigint | number
    last_active_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type petCreateInput = {
    id?: bigint | number
    name: string
    birth_date: Date | string
    gender: number
    description: string
    has_spotlight: boolean
    person: personCreateNestedOneWithoutPetInput
    traits?: traitCreateNestedManyWithoutPetsInput
  }

  export type petUncheckedCreateInput = {
    id?: bigint | number
    name: string
    birth_date: Date | string
    gender: number
    person_id: bigint | number
    description: string
    has_spotlight: boolean
    traits?: traitUncheckedCreateNestedManyWithoutPetsInput
  }

  export type petUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    has_spotlight?: BoolFieldUpdateOperationsInput | boolean
    person?: personUpdateOneRequiredWithoutPetNestedInput
    traits?: traitUpdateManyWithoutPetsNestedInput
  }

  export type petUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: IntFieldUpdateOperationsInput | number
    person_id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    has_spotlight?: BoolFieldUpdateOperationsInput | boolean
    traits?: traitUncheckedUpdateManyWithoutPetsNestedInput
  }

  export type petCreateManyInput = {
    id?: bigint | number
    name: string
    birth_date: Date | string
    gender: number
    person_id: bigint | number
    description: string
    has_spotlight: boolean
  }

  export type petUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    has_spotlight?: BoolFieldUpdateOperationsInput | boolean
  }

  export type petUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: IntFieldUpdateOperationsInput | number
    person_id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    has_spotlight?: BoolFieldUpdateOperationsInput | boolean
  }

  export type provinceCreateInput = {
    id: bigint | number
    province: string
    city?: cityCreateNestedManyWithoutProvinceInput
  }

  export type provinceUncheckedCreateInput = {
    id: bigint | number
    province: string
    city?: cityUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type provinceUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    province?: StringFieldUpdateOperationsInput | string
    city?: cityUpdateManyWithoutProvinceNestedInput
  }

  export type provinceUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    province?: StringFieldUpdateOperationsInput | string
    city?: cityUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type provinceCreateManyInput = {
    id: bigint | number
    province: string
  }

  export type provinceUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    province?: StringFieldUpdateOperationsInput | string
  }

  export type provinceUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    province?: StringFieldUpdateOperationsInput | string
  }

  export type shelterCreateInput = {
    id: bigint | number
    name: string
    address: string
    city: cityCreateNestedOneWithoutShelterInput
    person: personCreateNestedOneWithoutShelterInput
  }

  export type shelterUncheckedCreateInput = {
    id: bigint | number
    name: string
    address: string
    city_id: bigint | number
    person_id: bigint | number
  }

  export type shelterUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: cityUpdateOneRequiredWithoutShelterNestedInput
    person?: personUpdateOneRequiredWithoutShelterNestedInput
  }

  export type shelterUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city_id?: BigIntFieldUpdateOperationsInput | bigint | number
    person_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type shelterCreateManyInput = {
    id: bigint | number
    name: string
    address: string
    city_id: bigint | number
    person_id: bigint | number
  }

  export type shelterUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type shelterUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city_id?: BigIntFieldUpdateOperationsInput | bigint | number
    person_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type traitCreateInput = {
    id?: bigint | number
    name: string
    code: number
    pets?: petCreateNestedManyWithoutTraitsInput
  }

  export type traitUncheckedCreateInput = {
    id?: bigint | number
    name: string
    code: number
    pets?: petUncheckedCreateNestedManyWithoutTraitsInput
  }

  export type traitUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    pets?: petUpdateManyWithoutTraitsNestedInput
  }

  export type traitUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    pets?: petUncheckedUpdateManyWithoutTraitsNestedInput
  }

  export type traitCreateManyInput = {
    id?: bigint | number
    name: string
    code: number
  }

  export type traitUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
  }

  export type traitUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type ProvinceScalarRelationFilter = {
    is?: provinceWhereInput
    isNot?: provinceWhereInput
  }

  export type PersonListRelationFilter = {
    every?: personWhereInput
    some?: personWhereInput
    none?: personWhereInput
  }

  export type ShelterListRelationFilter = {
    every?: shelterWhereInput
    some?: shelterWhereInput
    none?: shelterWhereInput
  }

  export type personOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type shelterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cityCountOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    province_id?: SortOrder
  }

  export type cityAvgOrderByAggregateInput = {
    id?: SortOrder
    province_id?: SortOrder
  }

  export type cityMaxOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    province_id?: SortOrder
  }

  export type cityMinOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    province_id?: SortOrder
  }

  export type citySumOrderByAggregateInput = {
    id?: SortOrder
    province_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type CityScalarRelationFilter = {
    is?: cityWhereInput
    isNot?: cityWhereInput
  }

  export type PetListRelationFilter = {
    every?: petWhereInput
    some?: petWhereInput
    none?: petWhereInput
  }

  export type petOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type personCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    city_id?: SortOrder
    phone?: SortOrder
    last_active_at?: SortOrder
  }

  export type personAvgOrderByAggregateInput = {
    id?: SortOrder
    gender?: SortOrder
    city_id?: SortOrder
    phone?: SortOrder
  }

  export type personMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    city_id?: SortOrder
    phone?: SortOrder
    last_active_at?: SortOrder
  }

  export type personMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    city_id?: SortOrder
    phone?: SortOrder
    last_active_at?: SortOrder
  }

  export type personSumOrderByAggregateInput = {
    id?: SortOrder
    gender?: SortOrder
    city_id?: SortOrder
    phone?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PersonScalarRelationFilter = {
    is?: personWhereInput
    isNot?: personWhereInput
  }

  export type TraitListRelationFilter = {
    every?: traitWhereInput
    some?: traitWhereInput
    none?: traitWhereInput
  }

  export type traitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type petCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    person_id?: SortOrder
    description?: SortOrder
    has_spotlight?: SortOrder
  }

  export type petAvgOrderByAggregateInput = {
    id?: SortOrder
    gender?: SortOrder
    person_id?: SortOrder
  }

  export type petMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    person_id?: SortOrder
    description?: SortOrder
    has_spotlight?: SortOrder
  }

  export type petMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    person_id?: SortOrder
    description?: SortOrder
    has_spotlight?: SortOrder
  }

  export type petSumOrderByAggregateInput = {
    id?: SortOrder
    gender?: SortOrder
    person_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CityListRelationFilter = {
    every?: cityWhereInput
    some?: cityWhereInput
    none?: cityWhereInput
  }

  export type cityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type provinceCountOrderByAggregateInput = {
    id?: SortOrder
    province?: SortOrder
  }

  export type provinceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type provinceMaxOrderByAggregateInput = {
    id?: SortOrder
    province?: SortOrder
  }

  export type provinceMinOrderByAggregateInput = {
    id?: SortOrder
    province?: SortOrder
  }

  export type provinceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type shelterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city_id?: SortOrder
    person_id?: SortOrder
  }

  export type shelterAvgOrderByAggregateInput = {
    id?: SortOrder
    city_id?: SortOrder
    person_id?: SortOrder
  }

  export type shelterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city_id?: SortOrder
    person_id?: SortOrder
  }

  export type shelterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city_id?: SortOrder
    person_id?: SortOrder
  }

  export type shelterSumOrderByAggregateInput = {
    id?: SortOrder
    city_id?: SortOrder
    person_id?: SortOrder
  }

  export type traitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
  }

  export type traitAvgOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
  }

  export type traitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
  }

  export type traitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
  }

  export type traitSumOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
  }

  export type provinceCreateNestedOneWithoutCityInput = {
    create?: XOR<provinceCreateWithoutCityInput, provinceUncheckedCreateWithoutCityInput>
    connectOrCreate?: provinceCreateOrConnectWithoutCityInput
    connect?: provinceWhereUniqueInput
  }

  export type personCreateNestedManyWithoutCityInput = {
    create?: XOR<personCreateWithoutCityInput, personUncheckedCreateWithoutCityInput> | personCreateWithoutCityInput[] | personUncheckedCreateWithoutCityInput[]
    connectOrCreate?: personCreateOrConnectWithoutCityInput | personCreateOrConnectWithoutCityInput[]
    createMany?: personCreateManyCityInputEnvelope
    connect?: personWhereUniqueInput | personWhereUniqueInput[]
  }

  export type shelterCreateNestedManyWithoutCityInput = {
    create?: XOR<shelterCreateWithoutCityInput, shelterUncheckedCreateWithoutCityInput> | shelterCreateWithoutCityInput[] | shelterUncheckedCreateWithoutCityInput[]
    connectOrCreate?: shelterCreateOrConnectWithoutCityInput | shelterCreateOrConnectWithoutCityInput[]
    createMany?: shelterCreateManyCityInputEnvelope
    connect?: shelterWhereUniqueInput | shelterWhereUniqueInput[]
  }

  export type personUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<personCreateWithoutCityInput, personUncheckedCreateWithoutCityInput> | personCreateWithoutCityInput[] | personUncheckedCreateWithoutCityInput[]
    connectOrCreate?: personCreateOrConnectWithoutCityInput | personCreateOrConnectWithoutCityInput[]
    createMany?: personCreateManyCityInputEnvelope
    connect?: personWhereUniqueInput | personWhereUniqueInput[]
  }

  export type shelterUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<shelterCreateWithoutCityInput, shelterUncheckedCreateWithoutCityInput> | shelterCreateWithoutCityInput[] | shelterUncheckedCreateWithoutCityInput[]
    connectOrCreate?: shelterCreateOrConnectWithoutCityInput | shelterCreateOrConnectWithoutCityInput[]
    createMany?: shelterCreateManyCityInputEnvelope
    connect?: shelterWhereUniqueInput | shelterWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type provinceUpdateOneRequiredWithoutCityNestedInput = {
    create?: XOR<provinceCreateWithoutCityInput, provinceUncheckedCreateWithoutCityInput>
    connectOrCreate?: provinceCreateOrConnectWithoutCityInput
    upsert?: provinceUpsertWithoutCityInput
    connect?: provinceWhereUniqueInput
    update?: XOR<XOR<provinceUpdateToOneWithWhereWithoutCityInput, provinceUpdateWithoutCityInput>, provinceUncheckedUpdateWithoutCityInput>
  }

  export type personUpdateManyWithoutCityNestedInput = {
    create?: XOR<personCreateWithoutCityInput, personUncheckedCreateWithoutCityInput> | personCreateWithoutCityInput[] | personUncheckedCreateWithoutCityInput[]
    connectOrCreate?: personCreateOrConnectWithoutCityInput | personCreateOrConnectWithoutCityInput[]
    upsert?: personUpsertWithWhereUniqueWithoutCityInput | personUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: personCreateManyCityInputEnvelope
    set?: personWhereUniqueInput | personWhereUniqueInput[]
    disconnect?: personWhereUniqueInput | personWhereUniqueInput[]
    delete?: personWhereUniqueInput | personWhereUniqueInput[]
    connect?: personWhereUniqueInput | personWhereUniqueInput[]
    update?: personUpdateWithWhereUniqueWithoutCityInput | personUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: personUpdateManyWithWhereWithoutCityInput | personUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: personScalarWhereInput | personScalarWhereInput[]
  }

  export type shelterUpdateManyWithoutCityNestedInput = {
    create?: XOR<shelterCreateWithoutCityInput, shelterUncheckedCreateWithoutCityInput> | shelterCreateWithoutCityInput[] | shelterUncheckedCreateWithoutCityInput[]
    connectOrCreate?: shelterCreateOrConnectWithoutCityInput | shelterCreateOrConnectWithoutCityInput[]
    upsert?: shelterUpsertWithWhereUniqueWithoutCityInput | shelterUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: shelterCreateManyCityInputEnvelope
    set?: shelterWhereUniqueInput | shelterWhereUniqueInput[]
    disconnect?: shelterWhereUniqueInput | shelterWhereUniqueInput[]
    delete?: shelterWhereUniqueInput | shelterWhereUniqueInput[]
    connect?: shelterWhereUniqueInput | shelterWhereUniqueInput[]
    update?: shelterUpdateWithWhereUniqueWithoutCityInput | shelterUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: shelterUpdateManyWithWhereWithoutCityInput | shelterUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: shelterScalarWhereInput | shelterScalarWhereInput[]
  }

  export type personUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<personCreateWithoutCityInput, personUncheckedCreateWithoutCityInput> | personCreateWithoutCityInput[] | personUncheckedCreateWithoutCityInput[]
    connectOrCreate?: personCreateOrConnectWithoutCityInput | personCreateOrConnectWithoutCityInput[]
    upsert?: personUpsertWithWhereUniqueWithoutCityInput | personUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: personCreateManyCityInputEnvelope
    set?: personWhereUniqueInput | personWhereUniqueInput[]
    disconnect?: personWhereUniqueInput | personWhereUniqueInput[]
    delete?: personWhereUniqueInput | personWhereUniqueInput[]
    connect?: personWhereUniqueInput | personWhereUniqueInput[]
    update?: personUpdateWithWhereUniqueWithoutCityInput | personUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: personUpdateManyWithWhereWithoutCityInput | personUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: personScalarWhereInput | personScalarWhereInput[]
  }

  export type shelterUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<shelterCreateWithoutCityInput, shelterUncheckedCreateWithoutCityInput> | shelterCreateWithoutCityInput[] | shelterUncheckedCreateWithoutCityInput[]
    connectOrCreate?: shelterCreateOrConnectWithoutCityInput | shelterCreateOrConnectWithoutCityInput[]
    upsert?: shelterUpsertWithWhereUniqueWithoutCityInput | shelterUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: shelterCreateManyCityInputEnvelope
    set?: shelterWhereUniqueInput | shelterWhereUniqueInput[]
    disconnect?: shelterWhereUniqueInput | shelterWhereUniqueInput[]
    delete?: shelterWhereUniqueInput | shelterWhereUniqueInput[]
    connect?: shelterWhereUniqueInput | shelterWhereUniqueInput[]
    update?: shelterUpdateWithWhereUniqueWithoutCityInput | shelterUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: shelterUpdateManyWithWhereWithoutCityInput | shelterUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: shelterScalarWhereInput | shelterScalarWhereInput[]
  }

  export type cityCreateNestedOneWithoutPersonInput = {
    create?: XOR<cityCreateWithoutPersonInput, cityUncheckedCreateWithoutPersonInput>
    connectOrCreate?: cityCreateOrConnectWithoutPersonInput
    connect?: cityWhereUniqueInput
  }

  export type petCreateNestedManyWithoutPersonInput = {
    create?: XOR<petCreateWithoutPersonInput, petUncheckedCreateWithoutPersonInput> | petCreateWithoutPersonInput[] | petUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: petCreateOrConnectWithoutPersonInput | petCreateOrConnectWithoutPersonInput[]
    createMany?: petCreateManyPersonInputEnvelope
    connect?: petWhereUniqueInput | petWhereUniqueInput[]
  }

  export type shelterCreateNestedManyWithoutPersonInput = {
    create?: XOR<shelterCreateWithoutPersonInput, shelterUncheckedCreateWithoutPersonInput> | shelterCreateWithoutPersonInput[] | shelterUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: shelterCreateOrConnectWithoutPersonInput | shelterCreateOrConnectWithoutPersonInput[]
    createMany?: shelterCreateManyPersonInputEnvelope
    connect?: shelterWhereUniqueInput | shelterWhereUniqueInput[]
  }

  export type petUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<petCreateWithoutPersonInput, petUncheckedCreateWithoutPersonInput> | petCreateWithoutPersonInput[] | petUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: petCreateOrConnectWithoutPersonInput | petCreateOrConnectWithoutPersonInput[]
    createMany?: petCreateManyPersonInputEnvelope
    connect?: petWhereUniqueInput | petWhereUniqueInput[]
  }

  export type shelterUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<shelterCreateWithoutPersonInput, shelterUncheckedCreateWithoutPersonInput> | shelterCreateWithoutPersonInput[] | shelterUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: shelterCreateOrConnectWithoutPersonInput | shelterCreateOrConnectWithoutPersonInput[]
    createMany?: shelterCreateManyPersonInputEnvelope
    connect?: shelterWhereUniqueInput | shelterWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type cityUpdateOneRequiredWithoutPersonNestedInput = {
    create?: XOR<cityCreateWithoutPersonInput, cityUncheckedCreateWithoutPersonInput>
    connectOrCreate?: cityCreateOrConnectWithoutPersonInput
    upsert?: cityUpsertWithoutPersonInput
    connect?: cityWhereUniqueInput
    update?: XOR<XOR<cityUpdateToOneWithWhereWithoutPersonInput, cityUpdateWithoutPersonInput>, cityUncheckedUpdateWithoutPersonInput>
  }

  export type petUpdateManyWithoutPersonNestedInput = {
    create?: XOR<petCreateWithoutPersonInput, petUncheckedCreateWithoutPersonInput> | petCreateWithoutPersonInput[] | petUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: petCreateOrConnectWithoutPersonInput | petCreateOrConnectWithoutPersonInput[]
    upsert?: petUpsertWithWhereUniqueWithoutPersonInput | petUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: petCreateManyPersonInputEnvelope
    set?: petWhereUniqueInput | petWhereUniqueInput[]
    disconnect?: petWhereUniqueInput | petWhereUniqueInput[]
    delete?: petWhereUniqueInput | petWhereUniqueInput[]
    connect?: petWhereUniqueInput | petWhereUniqueInput[]
    update?: petUpdateWithWhereUniqueWithoutPersonInput | petUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: petUpdateManyWithWhereWithoutPersonInput | petUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: petScalarWhereInput | petScalarWhereInput[]
  }

  export type shelterUpdateManyWithoutPersonNestedInput = {
    create?: XOR<shelterCreateWithoutPersonInput, shelterUncheckedCreateWithoutPersonInput> | shelterCreateWithoutPersonInput[] | shelterUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: shelterCreateOrConnectWithoutPersonInput | shelterCreateOrConnectWithoutPersonInput[]
    upsert?: shelterUpsertWithWhereUniqueWithoutPersonInput | shelterUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: shelterCreateManyPersonInputEnvelope
    set?: shelterWhereUniqueInput | shelterWhereUniqueInput[]
    disconnect?: shelterWhereUniqueInput | shelterWhereUniqueInput[]
    delete?: shelterWhereUniqueInput | shelterWhereUniqueInput[]
    connect?: shelterWhereUniqueInput | shelterWhereUniqueInput[]
    update?: shelterUpdateWithWhereUniqueWithoutPersonInput | shelterUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: shelterUpdateManyWithWhereWithoutPersonInput | shelterUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: shelterScalarWhereInput | shelterScalarWhereInput[]
  }

  export type petUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<petCreateWithoutPersonInput, petUncheckedCreateWithoutPersonInput> | petCreateWithoutPersonInput[] | petUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: petCreateOrConnectWithoutPersonInput | petCreateOrConnectWithoutPersonInput[]
    upsert?: petUpsertWithWhereUniqueWithoutPersonInput | petUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: petCreateManyPersonInputEnvelope
    set?: petWhereUniqueInput | petWhereUniqueInput[]
    disconnect?: petWhereUniqueInput | petWhereUniqueInput[]
    delete?: petWhereUniqueInput | petWhereUniqueInput[]
    connect?: petWhereUniqueInput | petWhereUniqueInput[]
    update?: petUpdateWithWhereUniqueWithoutPersonInput | petUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: petUpdateManyWithWhereWithoutPersonInput | petUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: petScalarWhereInput | petScalarWhereInput[]
  }

  export type shelterUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<shelterCreateWithoutPersonInput, shelterUncheckedCreateWithoutPersonInput> | shelterCreateWithoutPersonInput[] | shelterUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: shelterCreateOrConnectWithoutPersonInput | shelterCreateOrConnectWithoutPersonInput[]
    upsert?: shelterUpsertWithWhereUniqueWithoutPersonInput | shelterUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: shelterCreateManyPersonInputEnvelope
    set?: shelterWhereUniqueInput | shelterWhereUniqueInput[]
    disconnect?: shelterWhereUniqueInput | shelterWhereUniqueInput[]
    delete?: shelterWhereUniqueInput | shelterWhereUniqueInput[]
    connect?: shelterWhereUniqueInput | shelterWhereUniqueInput[]
    update?: shelterUpdateWithWhereUniqueWithoutPersonInput | shelterUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: shelterUpdateManyWithWhereWithoutPersonInput | shelterUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: shelterScalarWhereInput | shelterScalarWhereInput[]
  }

  export type personCreateNestedOneWithoutPetInput = {
    create?: XOR<personCreateWithoutPetInput, personUncheckedCreateWithoutPetInput>
    connectOrCreate?: personCreateOrConnectWithoutPetInput
    connect?: personWhereUniqueInput
  }

  export type traitCreateNestedManyWithoutPetsInput = {
    create?: XOR<traitCreateWithoutPetsInput, traitUncheckedCreateWithoutPetsInput> | traitCreateWithoutPetsInput[] | traitUncheckedCreateWithoutPetsInput[]
    connectOrCreate?: traitCreateOrConnectWithoutPetsInput | traitCreateOrConnectWithoutPetsInput[]
    connect?: traitWhereUniqueInput | traitWhereUniqueInput[]
  }

  export type traitUncheckedCreateNestedManyWithoutPetsInput = {
    create?: XOR<traitCreateWithoutPetsInput, traitUncheckedCreateWithoutPetsInput> | traitCreateWithoutPetsInput[] | traitUncheckedCreateWithoutPetsInput[]
    connectOrCreate?: traitCreateOrConnectWithoutPetsInput | traitCreateOrConnectWithoutPetsInput[]
    connect?: traitWhereUniqueInput | traitWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type personUpdateOneRequiredWithoutPetNestedInput = {
    create?: XOR<personCreateWithoutPetInput, personUncheckedCreateWithoutPetInput>
    connectOrCreate?: personCreateOrConnectWithoutPetInput
    upsert?: personUpsertWithoutPetInput
    connect?: personWhereUniqueInput
    update?: XOR<XOR<personUpdateToOneWithWhereWithoutPetInput, personUpdateWithoutPetInput>, personUncheckedUpdateWithoutPetInput>
  }

  export type traitUpdateManyWithoutPetsNestedInput = {
    create?: XOR<traitCreateWithoutPetsInput, traitUncheckedCreateWithoutPetsInput> | traitCreateWithoutPetsInput[] | traitUncheckedCreateWithoutPetsInput[]
    connectOrCreate?: traitCreateOrConnectWithoutPetsInput | traitCreateOrConnectWithoutPetsInput[]
    upsert?: traitUpsertWithWhereUniqueWithoutPetsInput | traitUpsertWithWhereUniqueWithoutPetsInput[]
    set?: traitWhereUniqueInput | traitWhereUniqueInput[]
    disconnect?: traitWhereUniqueInput | traitWhereUniqueInput[]
    delete?: traitWhereUniqueInput | traitWhereUniqueInput[]
    connect?: traitWhereUniqueInput | traitWhereUniqueInput[]
    update?: traitUpdateWithWhereUniqueWithoutPetsInput | traitUpdateWithWhereUniqueWithoutPetsInput[]
    updateMany?: traitUpdateManyWithWhereWithoutPetsInput | traitUpdateManyWithWhereWithoutPetsInput[]
    deleteMany?: traitScalarWhereInput | traitScalarWhereInput[]
  }

  export type traitUncheckedUpdateManyWithoutPetsNestedInput = {
    create?: XOR<traitCreateWithoutPetsInput, traitUncheckedCreateWithoutPetsInput> | traitCreateWithoutPetsInput[] | traitUncheckedCreateWithoutPetsInput[]
    connectOrCreate?: traitCreateOrConnectWithoutPetsInput | traitCreateOrConnectWithoutPetsInput[]
    upsert?: traitUpsertWithWhereUniqueWithoutPetsInput | traitUpsertWithWhereUniqueWithoutPetsInput[]
    set?: traitWhereUniqueInput | traitWhereUniqueInput[]
    disconnect?: traitWhereUniqueInput | traitWhereUniqueInput[]
    delete?: traitWhereUniqueInput | traitWhereUniqueInput[]
    connect?: traitWhereUniqueInput | traitWhereUniqueInput[]
    update?: traitUpdateWithWhereUniqueWithoutPetsInput | traitUpdateWithWhereUniqueWithoutPetsInput[]
    updateMany?: traitUpdateManyWithWhereWithoutPetsInput | traitUpdateManyWithWhereWithoutPetsInput[]
    deleteMany?: traitScalarWhereInput | traitScalarWhereInput[]
  }

  export type cityCreateNestedManyWithoutProvinceInput = {
    create?: XOR<cityCreateWithoutProvinceInput, cityUncheckedCreateWithoutProvinceInput> | cityCreateWithoutProvinceInput[] | cityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: cityCreateOrConnectWithoutProvinceInput | cityCreateOrConnectWithoutProvinceInput[]
    createMany?: cityCreateManyProvinceInputEnvelope
    connect?: cityWhereUniqueInput | cityWhereUniqueInput[]
  }

  export type cityUncheckedCreateNestedManyWithoutProvinceInput = {
    create?: XOR<cityCreateWithoutProvinceInput, cityUncheckedCreateWithoutProvinceInput> | cityCreateWithoutProvinceInput[] | cityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: cityCreateOrConnectWithoutProvinceInput | cityCreateOrConnectWithoutProvinceInput[]
    createMany?: cityCreateManyProvinceInputEnvelope
    connect?: cityWhereUniqueInput | cityWhereUniqueInput[]
  }

  export type cityUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<cityCreateWithoutProvinceInput, cityUncheckedCreateWithoutProvinceInput> | cityCreateWithoutProvinceInput[] | cityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: cityCreateOrConnectWithoutProvinceInput | cityCreateOrConnectWithoutProvinceInput[]
    upsert?: cityUpsertWithWhereUniqueWithoutProvinceInput | cityUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: cityCreateManyProvinceInputEnvelope
    set?: cityWhereUniqueInput | cityWhereUniqueInput[]
    disconnect?: cityWhereUniqueInput | cityWhereUniqueInput[]
    delete?: cityWhereUniqueInput | cityWhereUniqueInput[]
    connect?: cityWhereUniqueInput | cityWhereUniqueInput[]
    update?: cityUpdateWithWhereUniqueWithoutProvinceInput | cityUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: cityUpdateManyWithWhereWithoutProvinceInput | cityUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: cityScalarWhereInput | cityScalarWhereInput[]
  }

  export type cityUncheckedUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<cityCreateWithoutProvinceInput, cityUncheckedCreateWithoutProvinceInput> | cityCreateWithoutProvinceInput[] | cityUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: cityCreateOrConnectWithoutProvinceInput | cityCreateOrConnectWithoutProvinceInput[]
    upsert?: cityUpsertWithWhereUniqueWithoutProvinceInput | cityUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: cityCreateManyProvinceInputEnvelope
    set?: cityWhereUniqueInput | cityWhereUniqueInput[]
    disconnect?: cityWhereUniqueInput | cityWhereUniqueInput[]
    delete?: cityWhereUniqueInput | cityWhereUniqueInput[]
    connect?: cityWhereUniqueInput | cityWhereUniqueInput[]
    update?: cityUpdateWithWhereUniqueWithoutProvinceInput | cityUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: cityUpdateManyWithWhereWithoutProvinceInput | cityUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: cityScalarWhereInput | cityScalarWhereInput[]
  }

  export type cityCreateNestedOneWithoutShelterInput = {
    create?: XOR<cityCreateWithoutShelterInput, cityUncheckedCreateWithoutShelterInput>
    connectOrCreate?: cityCreateOrConnectWithoutShelterInput
    connect?: cityWhereUniqueInput
  }

  export type personCreateNestedOneWithoutShelterInput = {
    create?: XOR<personCreateWithoutShelterInput, personUncheckedCreateWithoutShelterInput>
    connectOrCreate?: personCreateOrConnectWithoutShelterInput
    connect?: personWhereUniqueInput
  }

  export type cityUpdateOneRequiredWithoutShelterNestedInput = {
    create?: XOR<cityCreateWithoutShelterInput, cityUncheckedCreateWithoutShelterInput>
    connectOrCreate?: cityCreateOrConnectWithoutShelterInput
    upsert?: cityUpsertWithoutShelterInput
    connect?: cityWhereUniqueInput
    update?: XOR<XOR<cityUpdateToOneWithWhereWithoutShelterInput, cityUpdateWithoutShelterInput>, cityUncheckedUpdateWithoutShelterInput>
  }

  export type personUpdateOneRequiredWithoutShelterNestedInput = {
    create?: XOR<personCreateWithoutShelterInput, personUncheckedCreateWithoutShelterInput>
    connectOrCreate?: personCreateOrConnectWithoutShelterInput
    upsert?: personUpsertWithoutShelterInput
    connect?: personWhereUniqueInput
    update?: XOR<XOR<personUpdateToOneWithWhereWithoutShelterInput, personUpdateWithoutShelterInput>, personUncheckedUpdateWithoutShelterInput>
  }

  export type petCreateNestedManyWithoutTraitsInput = {
    create?: XOR<petCreateWithoutTraitsInput, petUncheckedCreateWithoutTraitsInput> | petCreateWithoutTraitsInput[] | petUncheckedCreateWithoutTraitsInput[]
    connectOrCreate?: petCreateOrConnectWithoutTraitsInput | petCreateOrConnectWithoutTraitsInput[]
    connect?: petWhereUniqueInput | petWhereUniqueInput[]
  }

  export type petUncheckedCreateNestedManyWithoutTraitsInput = {
    create?: XOR<petCreateWithoutTraitsInput, petUncheckedCreateWithoutTraitsInput> | petCreateWithoutTraitsInput[] | petUncheckedCreateWithoutTraitsInput[]
    connectOrCreate?: petCreateOrConnectWithoutTraitsInput | petCreateOrConnectWithoutTraitsInput[]
    connect?: petWhereUniqueInput | petWhereUniqueInput[]
  }

  export type petUpdateManyWithoutTraitsNestedInput = {
    create?: XOR<petCreateWithoutTraitsInput, petUncheckedCreateWithoutTraitsInput> | petCreateWithoutTraitsInput[] | petUncheckedCreateWithoutTraitsInput[]
    connectOrCreate?: petCreateOrConnectWithoutTraitsInput | petCreateOrConnectWithoutTraitsInput[]
    upsert?: petUpsertWithWhereUniqueWithoutTraitsInput | petUpsertWithWhereUniqueWithoutTraitsInput[]
    set?: petWhereUniqueInput | petWhereUniqueInput[]
    disconnect?: petWhereUniqueInput | petWhereUniqueInput[]
    delete?: petWhereUniqueInput | petWhereUniqueInput[]
    connect?: petWhereUniqueInput | petWhereUniqueInput[]
    update?: petUpdateWithWhereUniqueWithoutTraitsInput | petUpdateWithWhereUniqueWithoutTraitsInput[]
    updateMany?: petUpdateManyWithWhereWithoutTraitsInput | petUpdateManyWithWhereWithoutTraitsInput[]
    deleteMany?: petScalarWhereInput | petScalarWhereInput[]
  }

  export type petUncheckedUpdateManyWithoutTraitsNestedInput = {
    create?: XOR<petCreateWithoutTraitsInput, petUncheckedCreateWithoutTraitsInput> | petCreateWithoutTraitsInput[] | petUncheckedCreateWithoutTraitsInput[]
    connectOrCreate?: petCreateOrConnectWithoutTraitsInput | petCreateOrConnectWithoutTraitsInput[]
    upsert?: petUpsertWithWhereUniqueWithoutTraitsInput | petUpsertWithWhereUniqueWithoutTraitsInput[]
    set?: petWhereUniqueInput | petWhereUniqueInput[]
    disconnect?: petWhereUniqueInput | petWhereUniqueInput[]
    delete?: petWhereUniqueInput | petWhereUniqueInput[]
    connect?: petWhereUniqueInput | petWhereUniqueInput[]
    update?: petUpdateWithWhereUniqueWithoutTraitsInput | petUpdateWithWhereUniqueWithoutTraitsInput[]
    updateMany?: petUpdateManyWithWhereWithoutTraitsInput | petUpdateManyWithWhereWithoutTraitsInput[]
    deleteMany?: petScalarWhereInput | petScalarWhereInput[]
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type provinceCreateWithoutCityInput = {
    id: bigint | number
    province: string
  }

  export type provinceUncheckedCreateWithoutCityInput = {
    id: bigint | number
    province: string
  }

  export type provinceCreateOrConnectWithoutCityInput = {
    where: provinceWhereUniqueInput
    create: XOR<provinceCreateWithoutCityInput, provinceUncheckedCreateWithoutCityInput>
  }

  export type personCreateWithoutCityInput = {
    id?: bigint | number
    name: string
    birth_date: Date | string
    gender: number
    address: string
    phone: bigint | number
    last_active_at?: Date | string
    pet?: petCreateNestedManyWithoutPersonInput
    shelter?: shelterCreateNestedManyWithoutPersonInput
  }

  export type personUncheckedCreateWithoutCityInput = {
    id?: bigint | number
    name: string
    birth_date: Date | string
    gender: number
    address: string
    phone: bigint | number
    last_active_at?: Date | string
    pet?: petUncheckedCreateNestedManyWithoutPersonInput
    shelter?: shelterUncheckedCreateNestedManyWithoutPersonInput
  }

  export type personCreateOrConnectWithoutCityInput = {
    where: personWhereUniqueInput
    create: XOR<personCreateWithoutCityInput, personUncheckedCreateWithoutCityInput>
  }

  export type personCreateManyCityInputEnvelope = {
    data: personCreateManyCityInput | personCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type shelterCreateWithoutCityInput = {
    id: bigint | number
    name: string
    address: string
    person: personCreateNestedOneWithoutShelterInput
  }

  export type shelterUncheckedCreateWithoutCityInput = {
    id: bigint | number
    name: string
    address: string
    person_id: bigint | number
  }

  export type shelterCreateOrConnectWithoutCityInput = {
    where: shelterWhereUniqueInput
    create: XOR<shelterCreateWithoutCityInput, shelterUncheckedCreateWithoutCityInput>
  }

  export type shelterCreateManyCityInputEnvelope = {
    data: shelterCreateManyCityInput | shelterCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type provinceUpsertWithoutCityInput = {
    update: XOR<provinceUpdateWithoutCityInput, provinceUncheckedUpdateWithoutCityInput>
    create: XOR<provinceCreateWithoutCityInput, provinceUncheckedCreateWithoutCityInput>
    where?: provinceWhereInput
  }

  export type provinceUpdateToOneWithWhereWithoutCityInput = {
    where?: provinceWhereInput
    data: XOR<provinceUpdateWithoutCityInput, provinceUncheckedUpdateWithoutCityInput>
  }

  export type provinceUpdateWithoutCityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    province?: StringFieldUpdateOperationsInput | string
  }

  export type provinceUncheckedUpdateWithoutCityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    province?: StringFieldUpdateOperationsInput | string
  }

  export type personUpsertWithWhereUniqueWithoutCityInput = {
    where: personWhereUniqueInput
    update: XOR<personUpdateWithoutCityInput, personUncheckedUpdateWithoutCityInput>
    create: XOR<personCreateWithoutCityInput, personUncheckedCreateWithoutCityInput>
  }

  export type personUpdateWithWhereUniqueWithoutCityInput = {
    where: personWhereUniqueInput
    data: XOR<personUpdateWithoutCityInput, personUncheckedUpdateWithoutCityInput>
  }

  export type personUpdateManyWithWhereWithoutCityInput = {
    where: personScalarWhereInput
    data: XOR<personUpdateManyMutationInput, personUncheckedUpdateManyWithoutCityInput>
  }

  export type personScalarWhereInput = {
    AND?: personScalarWhereInput | personScalarWhereInput[]
    OR?: personScalarWhereInput[]
    NOT?: personScalarWhereInput | personScalarWhereInput[]
    id?: BigIntFilter<"person"> | bigint | number
    name?: StringFilter<"person"> | string
    birth_date?: DateTimeFilter<"person"> | Date | string
    gender?: IntFilter<"person"> | number
    address?: StringFilter<"person"> | string
    city_id?: BigIntFilter<"person"> | bigint | number
    phone?: BigIntFilter<"person"> | bigint | number
    last_active_at?: DateTimeFilter<"person"> | Date | string
  }

  export type shelterUpsertWithWhereUniqueWithoutCityInput = {
    where: shelterWhereUniqueInput
    update: XOR<shelterUpdateWithoutCityInput, shelterUncheckedUpdateWithoutCityInput>
    create: XOR<shelterCreateWithoutCityInput, shelterUncheckedCreateWithoutCityInput>
  }

  export type shelterUpdateWithWhereUniqueWithoutCityInput = {
    where: shelterWhereUniqueInput
    data: XOR<shelterUpdateWithoutCityInput, shelterUncheckedUpdateWithoutCityInput>
  }

  export type shelterUpdateManyWithWhereWithoutCityInput = {
    where: shelterScalarWhereInput
    data: XOR<shelterUpdateManyMutationInput, shelterUncheckedUpdateManyWithoutCityInput>
  }

  export type shelterScalarWhereInput = {
    AND?: shelterScalarWhereInput | shelterScalarWhereInput[]
    OR?: shelterScalarWhereInput[]
    NOT?: shelterScalarWhereInput | shelterScalarWhereInput[]
    id?: BigIntFilter<"shelter"> | bigint | number
    name?: StringFilter<"shelter"> | string
    address?: StringFilter<"shelter"> | string
    city_id?: BigIntFilter<"shelter"> | bigint | number
    person_id?: BigIntFilter<"shelter"> | bigint | number
  }

  export type cityCreateWithoutPersonInput = {
    id: bigint | number
    city: string
    province: provinceCreateNestedOneWithoutCityInput
    shelter?: shelterCreateNestedManyWithoutCityInput
  }

  export type cityUncheckedCreateWithoutPersonInput = {
    id: bigint | number
    city: string
    province_id: bigint | number
    shelter?: shelterUncheckedCreateNestedManyWithoutCityInput
  }

  export type cityCreateOrConnectWithoutPersonInput = {
    where: cityWhereUniqueInput
    create: XOR<cityCreateWithoutPersonInput, cityUncheckedCreateWithoutPersonInput>
  }

  export type petCreateWithoutPersonInput = {
    id?: bigint | number
    name: string
    birth_date: Date | string
    gender: number
    description: string
    has_spotlight: boolean
    traits?: traitCreateNestedManyWithoutPetsInput
  }

  export type petUncheckedCreateWithoutPersonInput = {
    id?: bigint | number
    name: string
    birth_date: Date | string
    gender: number
    description: string
    has_spotlight: boolean
    traits?: traitUncheckedCreateNestedManyWithoutPetsInput
  }

  export type petCreateOrConnectWithoutPersonInput = {
    where: petWhereUniqueInput
    create: XOR<petCreateWithoutPersonInput, petUncheckedCreateWithoutPersonInput>
  }

  export type petCreateManyPersonInputEnvelope = {
    data: petCreateManyPersonInput | petCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type shelterCreateWithoutPersonInput = {
    id: bigint | number
    name: string
    address: string
    city: cityCreateNestedOneWithoutShelterInput
  }

  export type shelterUncheckedCreateWithoutPersonInput = {
    id: bigint | number
    name: string
    address: string
    city_id: bigint | number
  }

  export type shelterCreateOrConnectWithoutPersonInput = {
    where: shelterWhereUniqueInput
    create: XOR<shelterCreateWithoutPersonInput, shelterUncheckedCreateWithoutPersonInput>
  }

  export type shelterCreateManyPersonInputEnvelope = {
    data: shelterCreateManyPersonInput | shelterCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type cityUpsertWithoutPersonInput = {
    update: XOR<cityUpdateWithoutPersonInput, cityUncheckedUpdateWithoutPersonInput>
    create: XOR<cityCreateWithoutPersonInput, cityUncheckedCreateWithoutPersonInput>
    where?: cityWhereInput
  }

  export type cityUpdateToOneWithWhereWithoutPersonInput = {
    where?: cityWhereInput
    data: XOR<cityUpdateWithoutPersonInput, cityUncheckedUpdateWithoutPersonInput>
  }

  export type cityUpdateWithoutPersonInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    city?: StringFieldUpdateOperationsInput | string
    province?: provinceUpdateOneRequiredWithoutCityNestedInput
    shelter?: shelterUpdateManyWithoutCityNestedInput
  }

  export type cityUncheckedUpdateWithoutPersonInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    city?: StringFieldUpdateOperationsInput | string
    province_id?: BigIntFieldUpdateOperationsInput | bigint | number
    shelter?: shelterUncheckedUpdateManyWithoutCityNestedInput
  }

  export type petUpsertWithWhereUniqueWithoutPersonInput = {
    where: petWhereUniqueInput
    update: XOR<petUpdateWithoutPersonInput, petUncheckedUpdateWithoutPersonInput>
    create: XOR<petCreateWithoutPersonInput, petUncheckedCreateWithoutPersonInput>
  }

  export type petUpdateWithWhereUniqueWithoutPersonInput = {
    where: petWhereUniqueInput
    data: XOR<petUpdateWithoutPersonInput, petUncheckedUpdateWithoutPersonInput>
  }

  export type petUpdateManyWithWhereWithoutPersonInput = {
    where: petScalarWhereInput
    data: XOR<petUpdateManyMutationInput, petUncheckedUpdateManyWithoutPersonInput>
  }

  export type petScalarWhereInput = {
    AND?: petScalarWhereInput | petScalarWhereInput[]
    OR?: petScalarWhereInput[]
    NOT?: petScalarWhereInput | petScalarWhereInput[]
    id?: BigIntFilter<"pet"> | bigint | number
    name?: StringFilter<"pet"> | string
    birth_date?: DateTimeFilter<"pet"> | Date | string
    gender?: IntFilter<"pet"> | number
    person_id?: BigIntFilter<"pet"> | bigint | number
    description?: StringFilter<"pet"> | string
    has_spotlight?: BoolFilter<"pet"> | boolean
  }

  export type shelterUpsertWithWhereUniqueWithoutPersonInput = {
    where: shelterWhereUniqueInput
    update: XOR<shelterUpdateWithoutPersonInput, shelterUncheckedUpdateWithoutPersonInput>
    create: XOR<shelterCreateWithoutPersonInput, shelterUncheckedCreateWithoutPersonInput>
  }

  export type shelterUpdateWithWhereUniqueWithoutPersonInput = {
    where: shelterWhereUniqueInput
    data: XOR<shelterUpdateWithoutPersonInput, shelterUncheckedUpdateWithoutPersonInput>
  }

  export type shelterUpdateManyWithWhereWithoutPersonInput = {
    where: shelterScalarWhereInput
    data: XOR<shelterUpdateManyMutationInput, shelterUncheckedUpdateManyWithoutPersonInput>
  }

  export type personCreateWithoutPetInput = {
    id?: bigint | number
    name: string
    birth_date: Date | string
    gender: number
    address: string
    phone: bigint | number
    last_active_at?: Date | string
    city: cityCreateNestedOneWithoutPersonInput
    shelter?: shelterCreateNestedManyWithoutPersonInput
  }

  export type personUncheckedCreateWithoutPetInput = {
    id?: bigint | number
    name: string
    birth_date: Date | string
    gender: number
    address: string
    city_id: bigint | number
    phone: bigint | number
    last_active_at?: Date | string
    shelter?: shelterUncheckedCreateNestedManyWithoutPersonInput
  }

  export type personCreateOrConnectWithoutPetInput = {
    where: personWhereUniqueInput
    create: XOR<personCreateWithoutPetInput, personUncheckedCreateWithoutPetInput>
  }

  export type traitCreateWithoutPetsInput = {
    id?: bigint | number
    name: string
    code: number
  }

  export type traitUncheckedCreateWithoutPetsInput = {
    id?: bigint | number
    name: string
    code: number
  }

  export type traitCreateOrConnectWithoutPetsInput = {
    where: traitWhereUniqueInput
    create: XOR<traitCreateWithoutPetsInput, traitUncheckedCreateWithoutPetsInput>
  }

  export type personUpsertWithoutPetInput = {
    update: XOR<personUpdateWithoutPetInput, personUncheckedUpdateWithoutPetInput>
    create: XOR<personCreateWithoutPetInput, personUncheckedCreateWithoutPetInput>
    where?: personWhereInput
  }

  export type personUpdateToOneWithWhereWithoutPetInput = {
    where?: personWhereInput
    data: XOR<personUpdateWithoutPetInput, personUncheckedUpdateWithoutPetInput>
  }

  export type personUpdateWithoutPetInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    phone?: BigIntFieldUpdateOperationsInput | bigint | number
    last_active_at?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: cityUpdateOneRequiredWithoutPersonNestedInput
    shelter?: shelterUpdateManyWithoutPersonNestedInput
  }

  export type personUncheckedUpdateWithoutPetInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city_id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone?: BigIntFieldUpdateOperationsInput | bigint | number
    last_active_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shelter?: shelterUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type traitUpsertWithWhereUniqueWithoutPetsInput = {
    where: traitWhereUniqueInput
    update: XOR<traitUpdateWithoutPetsInput, traitUncheckedUpdateWithoutPetsInput>
    create: XOR<traitCreateWithoutPetsInput, traitUncheckedCreateWithoutPetsInput>
  }

  export type traitUpdateWithWhereUniqueWithoutPetsInput = {
    where: traitWhereUniqueInput
    data: XOR<traitUpdateWithoutPetsInput, traitUncheckedUpdateWithoutPetsInput>
  }

  export type traitUpdateManyWithWhereWithoutPetsInput = {
    where: traitScalarWhereInput
    data: XOR<traitUpdateManyMutationInput, traitUncheckedUpdateManyWithoutPetsInput>
  }

  export type traitScalarWhereInput = {
    AND?: traitScalarWhereInput | traitScalarWhereInput[]
    OR?: traitScalarWhereInput[]
    NOT?: traitScalarWhereInput | traitScalarWhereInput[]
    id?: BigIntFilter<"trait"> | bigint | number
    name?: StringFilter<"trait"> | string
    code?: IntFilter<"trait"> | number
  }

  export type cityCreateWithoutProvinceInput = {
    id: bigint | number
    city: string
    person?: personCreateNestedManyWithoutCityInput
    shelter?: shelterCreateNestedManyWithoutCityInput
  }

  export type cityUncheckedCreateWithoutProvinceInput = {
    id: bigint | number
    city: string
    person?: personUncheckedCreateNestedManyWithoutCityInput
    shelter?: shelterUncheckedCreateNestedManyWithoutCityInput
  }

  export type cityCreateOrConnectWithoutProvinceInput = {
    where: cityWhereUniqueInput
    create: XOR<cityCreateWithoutProvinceInput, cityUncheckedCreateWithoutProvinceInput>
  }

  export type cityCreateManyProvinceInputEnvelope = {
    data: cityCreateManyProvinceInput | cityCreateManyProvinceInput[]
    skipDuplicates?: boolean
  }

  export type cityUpsertWithWhereUniqueWithoutProvinceInput = {
    where: cityWhereUniqueInput
    update: XOR<cityUpdateWithoutProvinceInput, cityUncheckedUpdateWithoutProvinceInput>
    create: XOR<cityCreateWithoutProvinceInput, cityUncheckedCreateWithoutProvinceInput>
  }

  export type cityUpdateWithWhereUniqueWithoutProvinceInput = {
    where: cityWhereUniqueInput
    data: XOR<cityUpdateWithoutProvinceInput, cityUncheckedUpdateWithoutProvinceInput>
  }

  export type cityUpdateManyWithWhereWithoutProvinceInput = {
    where: cityScalarWhereInput
    data: XOR<cityUpdateManyMutationInput, cityUncheckedUpdateManyWithoutProvinceInput>
  }

  export type cityScalarWhereInput = {
    AND?: cityScalarWhereInput | cityScalarWhereInput[]
    OR?: cityScalarWhereInput[]
    NOT?: cityScalarWhereInput | cityScalarWhereInput[]
    id?: BigIntFilter<"city"> | bigint | number
    city?: StringFilter<"city"> | string
    province_id?: BigIntFilter<"city"> | bigint | number
  }

  export type cityCreateWithoutShelterInput = {
    id: bigint | number
    city: string
    province: provinceCreateNestedOneWithoutCityInput
    person?: personCreateNestedManyWithoutCityInput
  }

  export type cityUncheckedCreateWithoutShelterInput = {
    id: bigint | number
    city: string
    province_id: bigint | number
    person?: personUncheckedCreateNestedManyWithoutCityInput
  }

  export type cityCreateOrConnectWithoutShelterInput = {
    where: cityWhereUniqueInput
    create: XOR<cityCreateWithoutShelterInput, cityUncheckedCreateWithoutShelterInput>
  }

  export type personCreateWithoutShelterInput = {
    id?: bigint | number
    name: string
    birth_date: Date | string
    gender: number
    address: string
    phone: bigint | number
    last_active_at?: Date | string
    city: cityCreateNestedOneWithoutPersonInput
    pet?: petCreateNestedManyWithoutPersonInput
  }

  export type personUncheckedCreateWithoutShelterInput = {
    id?: bigint | number
    name: string
    birth_date: Date | string
    gender: number
    address: string
    city_id: bigint | number
    phone: bigint | number
    last_active_at?: Date | string
    pet?: petUncheckedCreateNestedManyWithoutPersonInput
  }

  export type personCreateOrConnectWithoutShelterInput = {
    where: personWhereUniqueInput
    create: XOR<personCreateWithoutShelterInput, personUncheckedCreateWithoutShelterInput>
  }

  export type cityUpsertWithoutShelterInput = {
    update: XOR<cityUpdateWithoutShelterInput, cityUncheckedUpdateWithoutShelterInput>
    create: XOR<cityCreateWithoutShelterInput, cityUncheckedCreateWithoutShelterInput>
    where?: cityWhereInput
  }

  export type cityUpdateToOneWithWhereWithoutShelterInput = {
    where?: cityWhereInput
    data: XOR<cityUpdateWithoutShelterInput, cityUncheckedUpdateWithoutShelterInput>
  }

  export type cityUpdateWithoutShelterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    city?: StringFieldUpdateOperationsInput | string
    province?: provinceUpdateOneRequiredWithoutCityNestedInput
    person?: personUpdateManyWithoutCityNestedInput
  }

  export type cityUncheckedUpdateWithoutShelterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    city?: StringFieldUpdateOperationsInput | string
    province_id?: BigIntFieldUpdateOperationsInput | bigint | number
    person?: personUncheckedUpdateManyWithoutCityNestedInput
  }

  export type personUpsertWithoutShelterInput = {
    update: XOR<personUpdateWithoutShelterInput, personUncheckedUpdateWithoutShelterInput>
    create: XOR<personCreateWithoutShelterInput, personUncheckedCreateWithoutShelterInput>
    where?: personWhereInput
  }

  export type personUpdateToOneWithWhereWithoutShelterInput = {
    where?: personWhereInput
    data: XOR<personUpdateWithoutShelterInput, personUncheckedUpdateWithoutShelterInput>
  }

  export type personUpdateWithoutShelterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    phone?: BigIntFieldUpdateOperationsInput | bigint | number
    last_active_at?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: cityUpdateOneRequiredWithoutPersonNestedInput
    pet?: petUpdateManyWithoutPersonNestedInput
  }

  export type personUncheckedUpdateWithoutShelterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city_id?: BigIntFieldUpdateOperationsInput | bigint | number
    phone?: BigIntFieldUpdateOperationsInput | bigint | number
    last_active_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: petUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type petCreateWithoutTraitsInput = {
    id?: bigint | number
    name: string
    birth_date: Date | string
    gender: number
    description: string
    has_spotlight: boolean
    person: personCreateNestedOneWithoutPetInput
  }

  export type petUncheckedCreateWithoutTraitsInput = {
    id?: bigint | number
    name: string
    birth_date: Date | string
    gender: number
    person_id: bigint | number
    description: string
    has_spotlight: boolean
  }

  export type petCreateOrConnectWithoutTraitsInput = {
    where: petWhereUniqueInput
    create: XOR<petCreateWithoutTraitsInput, petUncheckedCreateWithoutTraitsInput>
  }

  export type petUpsertWithWhereUniqueWithoutTraitsInput = {
    where: petWhereUniqueInput
    update: XOR<petUpdateWithoutTraitsInput, petUncheckedUpdateWithoutTraitsInput>
    create: XOR<petCreateWithoutTraitsInput, petUncheckedCreateWithoutTraitsInput>
  }

  export type petUpdateWithWhereUniqueWithoutTraitsInput = {
    where: petWhereUniqueInput
    data: XOR<petUpdateWithoutTraitsInput, petUncheckedUpdateWithoutTraitsInput>
  }

  export type petUpdateManyWithWhereWithoutTraitsInput = {
    where: petScalarWhereInput
    data: XOR<petUpdateManyMutationInput, petUncheckedUpdateManyWithoutTraitsInput>
  }

  export type personCreateManyCityInput = {
    id?: bigint | number
    name: string
    birth_date: Date | string
    gender: number
    address: string
    phone: bigint | number
    last_active_at?: Date | string
  }

  export type shelterCreateManyCityInput = {
    id: bigint | number
    name: string
    address: string
    person_id: bigint | number
  }

  export type personUpdateWithoutCityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    phone?: BigIntFieldUpdateOperationsInput | bigint | number
    last_active_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: petUpdateManyWithoutPersonNestedInput
    shelter?: shelterUpdateManyWithoutPersonNestedInput
  }

  export type personUncheckedUpdateWithoutCityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    phone?: BigIntFieldUpdateOperationsInput | bigint | number
    last_active_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: petUncheckedUpdateManyWithoutPersonNestedInput
    shelter?: shelterUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type personUncheckedUpdateManyWithoutCityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    phone?: BigIntFieldUpdateOperationsInput | bigint | number
    last_active_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type shelterUpdateWithoutCityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    person?: personUpdateOneRequiredWithoutShelterNestedInput
  }

  export type shelterUncheckedUpdateWithoutCityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    person_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type shelterUncheckedUpdateManyWithoutCityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    person_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type petCreateManyPersonInput = {
    id?: bigint | number
    name: string
    birth_date: Date | string
    gender: number
    description: string
    has_spotlight: boolean
  }

  export type shelterCreateManyPersonInput = {
    id: bigint | number
    name: string
    address: string
    city_id: bigint | number
  }

  export type petUpdateWithoutPersonInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    has_spotlight?: BoolFieldUpdateOperationsInput | boolean
    traits?: traitUpdateManyWithoutPetsNestedInput
  }

  export type petUncheckedUpdateWithoutPersonInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    has_spotlight?: BoolFieldUpdateOperationsInput | boolean
    traits?: traitUncheckedUpdateManyWithoutPetsNestedInput
  }

  export type petUncheckedUpdateManyWithoutPersonInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    has_spotlight?: BoolFieldUpdateOperationsInput | boolean
  }

  export type shelterUpdateWithoutPersonInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: cityUpdateOneRequiredWithoutShelterNestedInput
  }

  export type shelterUncheckedUpdateWithoutPersonInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type shelterUncheckedUpdateManyWithoutPersonInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type traitUpdateWithoutPetsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
  }

  export type traitUncheckedUpdateWithoutPetsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
  }

  export type traitUncheckedUpdateManyWithoutPetsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
  }

  export type cityCreateManyProvinceInput = {
    id: bigint | number
    city: string
  }

  export type cityUpdateWithoutProvinceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    city?: StringFieldUpdateOperationsInput | string
    person?: personUpdateManyWithoutCityNestedInput
    shelter?: shelterUpdateManyWithoutCityNestedInput
  }

  export type cityUncheckedUpdateWithoutProvinceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    city?: StringFieldUpdateOperationsInput | string
    person?: personUncheckedUpdateManyWithoutCityNestedInput
    shelter?: shelterUncheckedUpdateManyWithoutCityNestedInput
  }

  export type cityUncheckedUpdateManyWithoutProvinceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    city?: StringFieldUpdateOperationsInput | string
  }

  export type petUpdateWithoutTraitsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    has_spotlight?: BoolFieldUpdateOperationsInput | boolean
    person?: personUpdateOneRequiredWithoutPetNestedInput
  }

  export type petUncheckedUpdateWithoutTraitsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: IntFieldUpdateOperationsInput | number
    person_id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    has_spotlight?: BoolFieldUpdateOperationsInput | boolean
  }

  export type petUncheckedUpdateManyWithoutTraitsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: IntFieldUpdateOperationsInput | number
    person_id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    has_spotlight?: BoolFieldUpdateOperationsInput | boolean
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