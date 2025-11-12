"use client";

import { ComponentProps, ComponentType, useState } from "react";
import { ComponentMeta } from "./types";
import { getDefaultProps } from "./utils";
import ControlPanel from "./ControlPanel";

function Playground<Comp extends ComponentType<any>>({
  meta,
}: {
  meta: ComponentMeta<Comp>;
}) {
  const Component = meta.component;

  const [props, setProps] = useState<ComponentProps<Comp>>(
    getDefaultProps(meta)
  );

  const handlePropsChange = <K extends keyof ComponentProps<Comp>>(
    key: K,
    value: ComponentProps<Comp>[K]
  ) => {
    setProps((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="flex size-full gap-2 rounded-lg border p-2">
      <ControlPanel
        controls={meta.propControls}
        props={props}
        onChange={handlePropsChange}
      />
      <div className="flex size-full items-center justify-center">
        <Component {...props} />
      </div>
    </div>
  );
}

export default Playground;
