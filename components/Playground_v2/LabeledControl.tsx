import { FC, PropsWithChildren } from "react";
import { Label } from "../ui/label";

const LabeledControl: FC<PropsWithChildren & { id: string }> = ({
  id,
  children,
}) => (
  <div className="space-y-1">
    <Label htmlFor={id}>{id}</Label>
    {children}
  </div>
);

export default LabeledControl;
