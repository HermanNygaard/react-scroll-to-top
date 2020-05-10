# react-scroll-to-top

A simple button component that scrolls to the top of the page when pressed\
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

toTop number default 20
color string color of the icon default black
backgroundColor string color of the buttons background default white
position: left, right

## Types

Written in TypeScript, no need for @types installation
