---
title: Getting Started
description: A guide how to use this module.
---

## Installation

```bash
bun add @enalmada/nextui-admin
```

Add `'./node_modules/@enalmada/nextui-admin/dist/**/*.{js,ts,jsx,tsx}',` to tailwind config file:

```
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@enalmada/nextui-admin/dist/**/*.{js,ts,jsx,tsx}',
  ],
  ...
}
```
