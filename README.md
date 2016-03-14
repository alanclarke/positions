## <img width="350" alt="positions" src="https://cloud.githubusercontent.com/assets/640611/13756080/1928a892-ea16-11e5-9c36-51dafb47fad4.png">

A small dom element positioning lib inspired by jquery-ui/position

## installation
```js
npm install positions
```

## usage
```js
var positions = require('positions')
```

```js
// positions els 'top left' at targets 'top left'
var css = positions(el, 'top left', target, 'top left')
```

<img width="40" alt="top-left-top-left" src="https://cloud.githubusercontent.com/assets/640611/13719721/07895ab2-e7f2-11e5-8bee-6e8c74abcc7e.png">

```js
// positions els 'center center' at targets 'center center'
var css = positions(el, 'center center', target, 'center center')
```

<img width="40" alt="center-center-center-center" src="https://cloud.githubusercontent.com/assets/640611/13719719/0788243a-e7f2-11e5-943c-fcc580dbcd3f.png">

```js
// positions els bottom left at targets top left
var css = positions(el, 'bottom left', target, 'top left')
```

<img width="40" alt="bottom-left-top-left" src="https://cloud.githubusercontent.com/assets/640611/13742253/c7cee7d8-e9d2-11e5-8cab-aa8b22c7eecc.png">

```js
// positions els bottom center at targets bottom center
var css = positions(el, 'bottom center', target, 'bottom center')
```

<img width="40" alt="bottom-center-bottom-center" src="https://cloud.githubusercontent.com/assets/640611/13719722/0789dc9e-e7f2-11e5-9353-6cba4cd5c7ab.png">


...etc.


## run tests
```js
npm test
```
