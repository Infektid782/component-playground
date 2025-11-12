import { ComponentProps, ComponentType } from "react";
import { PropControl, PropControls } from "./types";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import LabeledControl from "./LabeledControl";

function renderControl<Comp extends ComponentType<any>>({
  control,
  propKey,
  propValue,
  onChange,
}: {
  control: PropControl<any>;
  propKey: string;
  propValue: ComponentProps<Comp>[keyof ComponentProps<Comp>];
  onChange: <K extends keyof ComponentProps<Comp>>(
    key: K,
    value: ComponentProps<Comp>[K]
  ) => void;
}) {
  switch (control.type) {
    case "string":
      return (
        <Input
          value={propValue}
          onChange={(e) => onChange(propKey, e.target.value)}
        />
      );

    case "number":
      return (
        <Input
          type="number"
          value={propValue}
          onChange={(e) => onChange(propKey, e.target.value)}
        />
      );
    case "boolean":
      return (
        <Switch
          checked={propValue}
          onCheckedChange={(checked) => {
            onChange(propKey, checked);
          }}
        />
      );
    case "enum":
      return (
        <Select value={propValue} onValueChange={(v) => onChange(propKey, v)}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {control.options.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    default:
      const _exhaustiveCheck: never = control;
      return null;
  }
}

function ControlPanel<Comp extends ComponentType<any>>({
  props,
  controls,
  onChange,
}: {
  props: ComponentProps<Comp>;
  controls: PropControls<Comp>;
  onChange: <K extends keyof ComponentProps<Comp>>(
    key: K,
    value: ComponentProps<Comp>[K]
  ) => void;
}) {
  return (
    <div className="bg-sidebar w-72 shrink-0 flex gap-4 flex-col rounded-lg p-3">
      <div className="mb-2 text-sm font-medium">Controls</div>
      {Object.entries(controls).map(([propKey, value]) => {
        const control = value as PropControl<any>;
        const propValue = props[propKey as keyof ComponentProps<Comp>];
        return (
          <LabeledControl key={propKey} id={propKey}>
            {renderControl({ control, propKey, propValue, onChange })}
          </LabeledControl>
        );
      })}
    </div>
  );
}

export default ControlPanel;
