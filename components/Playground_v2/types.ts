import { ComponentProps, ComponentType } from "react";

/**
 * Definitions for different types of prop controls.
 * Each describes how a prop is represented and edited in the UI.
 */
export type StringControl = { type: "string"; default: string };
export type NumberControl = { type: "number"; default: number };
export type BooleanControl = { type: "boolean"; default: boolean };
export type EnumControl = { type: "enum"; options: string[]; default: string };

/**
 * Maps a prop’s TypeScript type to its corresponding control definition.
 * For example:
 *   - string  → StringControl or EnumControl
 *   - number  → NumberControl
 *   - boolean → BooleanControl
 */
export type PropControl<Prop> = Prop extends string
  ? StringControl | EnumControl
  : Prop extends number
  ? NumberControl
  : Prop extends boolean
  ? BooleanControl
  : never;

/**
 * Utility type that extracts only the *required* keys of an object type `T`.
 * A key is considered required if it cannot be omitted (`{} extends Pick<T, K>` is false).
 *
 * Using `Record<string, never>` instead of `{}` avoids lint issues with the empty object type.
 */
type RequiredKeys<T> = {
  [K in keyof T]-?: Record<string, never> extends Pick<T, K> ? never : K;
}[keyof T];

/**
 * Utility type that extracts only the *optional* keys of an object type `T`.
 * A key is considered optional if it can be omitted (`{} extends Pick<T, K>` is true).
 *
 * Using `Record<string, never>` instead of `{}` avoids lint issues with the empty object type.
 */
type OptionalKeys<T> = {
  [K in keyof T]-?: Record<string, never> extends Pick<T, K> ? K : never;
}[keyof T];

/**
 * Maps each prop of a React component to a matching control definition.
 *
 * - Required props in the component must be included here.
 * - Optional props can be omitted.
 */
export type PropControls<Comp extends ComponentType<unknown>> = {
  [K in RequiredKeys<ComponentProps<Comp>>]: PropControl<
    ComponentProps<Comp>[K]
  >;
} & {
  [K in OptionalKeys<ComponentProps<Comp>>]?: PropControl<
    ComponentProps<Comp>[K]
  >;
};

/**
 * Metadata definition for a component in the component playground.
 * Describes:
 *   - which React component to render (`component`)
 *   - how each prop is exposed and controlled (`props`)
 */
export type ComponentMeta<Comp extends ComponentType<unknown>> = {
  component: Comp;
  propControls: PropControls<Comp>;
};
