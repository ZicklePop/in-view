# in-view

A web component for checking if an element is in view using Intersection Observer by wrapping a HTML template tag.

## Install

```sh
npm install --save @zicklepop/in-view
```

## Resources

- [Demo](http://zicklepop.github.io/in-view/demo.html)
- [GitHub](https://github.com/zicklepop/in-view)
- [NPM](https://www.npmjs.com/package/@zicklepop/in-view)

## Properties

- **data-rootMargin** _string, optional_: CSS margin syntax to expand the outside area considered in view. ([mdn](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin))
- **data-threshold** _float, optional_: Sensitivity for how much of the element must be in view, written as a decimal representation of a percentage. ([mdn](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/thresholds))

## Basic Usage

To work it only requires a [template element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) around whatever you want to render when in view.

```html
<in-view>
  <template>I show up when I'm in view!</template>
</in-view>
```
