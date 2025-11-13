This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Overview
This project provides a component playground for React. It lets you render any React component with an interactive control panel for updating its props and observing how each prop change affects the component in real time.

# Playground Component
The Playground React component can render any other component you pass to it. It automatically generates a control panel for managing that component’s props, allowing you to experiment and visualize changes instantly.

# defineMeta Utility
The defineMeta utility function helps you define the meta prop required by the Playground component.
When using defineMeta, you’ll get autocomplete support for propControls once the target component is specified. It also performs type validation, showing an error if:
Required props are missing from the meta definition, or
There’s a type mismatch between the defined controls and the component’s prop types.
