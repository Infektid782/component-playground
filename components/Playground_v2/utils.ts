import { ComponentProps, ComponentType } from "react";
import { ComponentMeta, PropControl, PropControls } from "./types";

/**
 * Defines component metadata with type-safe props.
 * Provides autocomplete for props field based on component.
 * Provides type errors if required props are missing or incorrectly typed.
 */
export function defineMeta<Comp extends ComponentType<any>>(meta: {
  component: Comp;
  propControls: PropControls<Comp>;
}): ComponentMeta<Comp> {
  return meta;
}

/**
 * Extracts default values from a component meta's PropControls.
 * Returns an object suitable for spreading into the component.
 */
export function getDefaultProps<Comp extends ComponentType<any>>(
  meta: ComponentMeta<Comp>
): ComponentProps<Comp> {
  const props = Object.fromEntries(
    Object.entries(meta.propControls).map(([key, control]) => [
      key,
      (control as PropControl<any>).default,
    ])
  );
  return props as ComponentProps<Comp>;
}
