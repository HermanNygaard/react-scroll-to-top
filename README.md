# react-scroll-to-top

A simple button component that scrolls to the top of the page when pressed\
The button is only visible when a certain height has been reached on the page\
Demo coming

## Installation

Run `npm i react-scroll-to-top --save`

## Usage

Import the module and it's stylesheet\
Include `<ScrollToTop />` anywhere in your render/return function:

```js
import ScrollToTop from "react-scroll-to-top";
import "react-scroll-to-top/lib/index.css"

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

| Prop      | Type    | Description                              | Default |
| --------- | ------- | ---------------------------------------- | ------- |
| top       | number  | The height where the button gets visible | 20      |
| color     | string  | The arrow color                          | black   |
| bgColor   | string  | Button background color                  | white   |
| className | string  | Custom classname to add your own styling | ''      |
| style     | Object  | Object to override styling               |         |
| smooth    | boolean | Whether to use smooth scrolling*         | false   |

Smooth scrolling uses a newer `window.scrollTo` implementation.\
[Check out its support in browsers at MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo).

## Types

Written in TypeScript, no need for @types installation
