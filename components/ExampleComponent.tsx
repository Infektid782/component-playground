import { FC } from "react";

export type ExampleComponentProps = {
  title: string;
  count: number;
  isHighlighted: boolean;
  variant: "primary" | "secondary" | "danger";
};

export const ExampleComponent: FC<ExampleComponentProps> = ({
  title,
  count,
  isHighlighted,
  variant,
}) => {
  const baseStyles =
    "rounded-2xl border-2 p-4 shadow-md transition-all duration-300";

  const variantStyles =
    variant === "primary"
      ? "border-blue-500 text-blue-800"
      : variant === "secondary"
      ? "border-gray-500 text-gray-800"
      : "border-red-500 text-red-800";

  const highlightStyles = isHighlighted ? "bg-gray-50" : "bg-white";

  return (
    <div className={`${baseStyles} ${variantStyles} ${highlightStyles}`}>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-base">Count: {count}</p>
      <p className="text-sm text-gray-600 mt-1">Variant: {variant}</p>
    </div>
  );
};
