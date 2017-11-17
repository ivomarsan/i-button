<p align="center">
  <a href="http://ivomarsan.com/" target="_blank">
    <img width="128" src="http://ivomarsan.com/favicon.png">
  </a>
</p>

<p align="center">i-button</p>

<p align="center">

  <a href="https://www.npmjs.com/package/i-button">
    <img src="https://img.shields.io/npm/dt/i-button.svg" alt="Downloads">
  </a>

  <a href="https://www.npmjs.com/package/i-button">
    <img src="https://img.shields.io/npm/v/i-button.svg" alt="Version">
  </a>

  <a href="https://www.npmjs.com/package/i-button">
    <img src="https://img.shields.io/npm/l/i-button.svg" alt="License">
  </a>
</p>

----------

<a href="https://www.npmjs.com/package/i-button">`i-button`</a> is a simplistic button forked from <a href="https://www.npmjs.com/package/vue-material">`vue-material`</a> inspired in <a href="http://material.google.com" target="_blank">Material Design</a> specs.

## Installation

Install via `npm`
``` bash
npm install i-button --save
```

Import or require in your code:
``` javascript
import Vue from 'vue'
import iButton from 'i-button'

// OR

var Vue = require('vue')
var iButton = require('i-button')
```

## Usage

It's very useful to use `i-button` you only need to register then :smile: seems like with
``` javascript
import iButton from 'i-button'

export default {
  components: {
    'my-awesome-button': iButton,
  }
  // ...
}
```
and...
``` html
<my-awesome-button class="is-background-red">
🗑
</my-awesome-button>
```


## Colors

Actually we have 10 colors, are:
* <img src="https://img.shields.io/badge/green-                    -4cae4c.svg" alt="green">
* <img src="https://img.shields.io/badge/red-                    -d43f3a.svg" alt="red">
* <img src="https://img.shields.io/badge/blue-                    -0488bb.svg" alt="blue">
* <img src="https://img.shields.io/badge/gray-                    -ada8a5.svg" alt="gray">
* <img src="https://img.shields.io/badge/pink-                    -ff067c.svg" alt="pink">
* <img src="https://img.shields.io/badge/orange-                    -ff9e00.svg" alt="orange">
* <img src="https://img.shields.io/badge/purple-                    -9400c8.svg" alt="purple">
* <img src="https://img.shields.io/badge/yellow-                    -ffdf00.svg" alt="yellow">
* <img src="https://img.shields.io/badge/white-                    -ffffff.svg" alt="white">
* <img src="https://img.shields.io/badge/black-                    -000000.svg" alt="black">

## Classes

Classes are formed by `prefix-properties-color`, examples:
* `is-color-green`
* `is-outline-green`
* `is-background-green`

## Example

to-do