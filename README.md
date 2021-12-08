# react-scroll-to-top

A lightweight and customizable button component that scrolls to the top of a page when pressed  
The button is only visible once a certain height has been reached on the page

[![NPM](https://nodei.co/npm/react-scroll-to-top.png)](https://nodei.co/npm/react-scroll-to-top/)

## Live demo

[A live demo can be found here](https://codesandbox.io/s/react-scroll-to-top-demo-rmuvx?file=/src/App.js)

## Installation

Run `npm i react-scroll-to-top`

## Usage

Import and then include `<ScrollToTop />` anywhere in your render/return function:

```js
import ScrollToTop from "react-scroll-to-top";

function CoolPage() {
  return (
    <div>
      <ScrollToTop smooth />
      <h1>Hello, world!</h1>
    </div>
  );
}
```

## Props

| Prop      | Type    | Description                                  | Default       |
| --------- | ------- | -------------------------------------------- | ------------- |
| smooth    | boolean | Whether to use smooth scrolling\*            | false         |
| top       | number  | Height after page scroll to be visible       | 20            |
| color     | string  | The SVG icon fill color                      | "black"       |
| svgPath   | string  | The SVG icon path d attribute                | An arrow path |
| width     | string  | The SVG icon width                           | "28"          |
| height    | string  | The SVG icon height                          | "28"          |
| viewBox   | string  | The SVG icon viewBox attribute               | "0 0 256 256" |
| component | any     | Component to override SVG icon. See examples |               |
| style     | Object  | Object to add/override styling               |               |
| className | string  | Classname to completely override styling     |               |

Smooth scrolling uses a newer `window.scrollTo` implementation.\
[Check out its support in browsers at MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo).

## Examples

[With custom SVG path](https://codesandbox.io/s/react-scroll-to-top-svg-path-y2ztc?file=/src/App.js)  
[With custom SVG component](https://codesandbox.io/s/react-scroll-to-top-custom-svg-or74g?file=/src/App.js)  
[With custom DOM element](https://codesandbox.io/s/react-scroll-to-top-custom-dom-element-y7j0f?file=/src/App.js)

## Types

Written in TypeScript, no need for @types installation
