# react-scroll-to-top

A lightweight and customizable button component that scrolls to the top of a page when pressed\
The button is only visible once a certain height has been reached on the page

## Live demo
[A live demo can be found here](https://codesandbox.io/s/friendly-northcutt-rmuvx?file=/src/App.js)

## Installation

Run `npm i react-scroll-to-top`

## Usage

Import the component and the stylesheet\
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

| Prop      | Type    | Description                            | Default |
| --------- | ------- | -------------------------------------- | ------- |
| smooth    | boolean | Whether to use smooth scrolling*       | false   |
| className | string  | Classname to override styling          | ''      |
| color     | string  | The arrow (SVG fill) color             | black   |
| top       | number  | Height after page scroll to be visible | 20      |
| style     | Object  | Object to override styling             |         |

Smooth scrolling uses a newer `window.scrollTo` implementation.\
[Check out its support in browsers at MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo).

## Types

Written in TypeScript, no need for @types installation
