"use client";

import { ExampleComponent } from "@/components/ExampleComponent";
import Playground from "@/components/Playground_v2/Playground";
import { defineMeta } from "@/components/Playground_v2/utils";

const meta = defineMeta({
  component: ExampleComponent,
  propControls: {
    title: { type: "string", default: "Title" },
    count: { type: "number", default: 0 },
    isHighlighted: { type: "boolean", default: false },
    variant: {
      type: "enum",
      options: ["primary", "secondary", "danger"],
      default: "primary",
    },
  },
});

export default function Home() {
  return <Playground meta={meta} />;
}
