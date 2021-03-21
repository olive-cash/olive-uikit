# 🫒 Olive UIkit

Olive UIkit is a set of React components and hooks used to build pages on Blizzard's apps. It also contains a theme file for dark and light mode.
This project is fork from pancakeswap-uikit

## Install

`yarn add @blzd-dev/uikit`

## Setup

### Theme

Before using Pancake UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@blzd-dev/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@blzd-dev/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.
