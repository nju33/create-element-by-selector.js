# createElementBySelector.js

[![Build Status](https://travis-ci.org/totora0155/create-element-by-selector.js.svg?branch=master)](https://travis-ci.org/totora0155/create-element-by-selector.js)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![npm version](https://badge.fury.io/js/create-element-by-selector.js.svg)](https://badge.fury.io/js/create-element-by-selector.js)

Create element by selector

## Usage

```bash
npm i create-element-by-selector.js
```

in browser

```html
<script src="create-element-by-selector.js"></script>
```

## Browser

IE >= 9, *

## Example

```html
<!DOCTYPE html>
<html>
<body>
  <script src="create-element-by-selector.js"></script>
  <script>
    var s = 'main#id.main.box[contenteditable][data-foo=foo][data-bar=bar]';
    var el = createElementBySelector(s);
    document.body.appendChild(el);

    // el.id === 'id'
    // el.className === 'main box'
    // el.getAttribute('contenteditable') === true
    // el.getAttribute('data-foo') === 'foo'
    // el.getAttribute('data-bar') === 'bar'

  </script>
</body>
</html>

```
