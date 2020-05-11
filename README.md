# react-scroll-to-top

A simple button component that scrolls to the top of the page when pressed\
The button is only visible when a certain height has been reached on the page\
Demo coming

## Installation

Run `npm i react-scroll-to-top`

## Usage

Include `<ScrollToTop />` anywhere in your render/return function:

```js
import ScrollToTop from "react-scroll-to-top";

function CoolPage() {
  return (
    <div>
      <ScrollToTop />
      <h1>Hello, world!</h1>
    </div>
  );
}
```

## Props

| Prop    | Type   | Description                              | Default |
| ------- | ------ | ---------------------------------------- | ------- |
| top     | number | The height where the button gets visible | 20      |
| color   | string | The arrow color                          | white   |
| bgColor | string | Button background color                  | black   |

## Types

Written in TypeScript, no need for @types installation
