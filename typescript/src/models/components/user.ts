/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Address = {
  street?: string | undefined;
  city?: string | undefined;
  state?: string | undefined;
  zip?: string | undefined;
};

export const Gender = {
  Male: "MALE",
  Female: "FEMALE",
  Other: "OTHER",
} as const;
export type Gender = ClosedEnum<typeof Gender>;

export type User = {
  id: string;
  name: string;
  address: Address;
  age: number;
  gender: Gender;
};

/** @internal */
export const Address$inboundSchema: z.ZodType<Address, z.ZodTypeDef, unknown> =
  z.object({
    street: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zip: z.string().optional(),
  });

/** @internal */
export type Address$Outbound = {
  street?: string | undefined;
  city?: string | undefined;
  state?: string | undefined;
  zip?: string | undefined;
};

/** @internal */
export const Address$outboundSchema: z.ZodType<
  Address$Outbound,
  z.ZodTypeDef,
  Address
> = z.object({
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Address$ {
  /** @deprecated use `Address$inboundSchema` instead. */
  export const inboundSchema = Address$inboundSchema;
  /** @deprecated use `Address$outboundSchema` instead. */
  export const outboundSchema = Address$outboundSchema;
  /** @deprecated use `Address$Outbound` instead. */
  export type Outbound = Address$Outbound;
}

export function addressToJSON(address: Address): string {
  return JSON.stringify(Address$outboundSchema.parse(address));
}

export function addressFromJSON(
  jsonString: string,
): SafeParseResult<Address, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Address$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Address' from JSON`,
  );
}

/** @internal */
export const Gender$inboundSchema: z.ZodNativeEnum<typeof Gender> = z
  .nativeEnum(Gender);

/** @internal */
export const Gender$outboundSchema: z.ZodNativeEnum<typeof Gender> =
  Gender$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Gender$ {
  /** @deprecated use `Gender$inboundSchema` instead. */
  export const inboundSchema = Gender$inboundSchema;
  /** @deprecated use `Gender$outboundSchema` instead. */
  export const outboundSchema = Gender$outboundSchema;
}

/** @internal */
export const User$inboundSchema: z.ZodType<User, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string(),
    name: z.string(),
    address: z.lazy(() => Address$inboundSchema),
    age: z.number().int(),
    gender: Gender$inboundSchema,
  });

/** @internal */
export type User$Outbound = {
  id: string;
  name: string;
  address: Address$Outbound;
  age: number;
  gender: string;
};

/** @internal */
export const User$outboundSchema: z.ZodType<User$Outbound, z.ZodTypeDef, User> =
  z.object({
    id: z.string(),
    name: z.string(),
    address: z.lazy(() => Address$outboundSchema),
    age: z.number().int(),
    gender: Gender$outboundSchema,
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace User$ {
  /** @deprecated use `User$inboundSchema` instead. */
  export const inboundSchema = User$inboundSchema;
  /** @deprecated use `User$outboundSchema` instead. */
  export const outboundSchema = User$outboundSchema;
  /** @deprecated use `User$Outbound` instead. */
  export type Outbound = User$Outbound;
}

export function userToJSON(user: User): string {
  return JSON.stringify(User$outboundSchema.parse(user));
}

export function userFromJSON(
  jsonString: string,
): SafeParseResult<User, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => User$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'User' from JSON`,
  );
}
