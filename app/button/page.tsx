"use client";

import Playground from "@/components/Playground_v2/Playground";
import { defineMeta } from "@/components/Playground_v2/utils";
import { Button } from "@/components/ui/button";

const meta = defineMeta({
  component: Button,
  propControls: {
    variant: {
      type: "enum",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      default: "default",
    },
    size: {
      type: "enum",
      options: ["default", "sm", "lg", "icon"],
      default: "default",
    },
    children: { type: "string", default: "Click me" },
    disabled: { type: "boolean", default: false },
  },
});

export default function Home() {
  return <Playground meta={meta} />;
}
