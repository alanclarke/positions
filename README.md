## <img width="320" alt="Positioning" src="https://cloud.githubusercontent.com/assets/640611/13720002/81f3c446-e7f6-11e5-955d-71f3d37c8b70.png">

A small dom element positioning lib inspired by jquery-ui/position

## installation
```js
npm install positioning
```

## usage
```js
var positioning = require('positioning')
```

```js
// puts els 'top left' at targets 'top left'
var css = positioning(el, 'top left', target, 'top left')
```

<img width="40" alt="top-left-top-left" src="https://cloud.githubusercontent.com/assets/640611/13719721/07895ab2-e7f2-11e5-8bee-6e8c74abcc7e.png">

```js
// puts els 'center center' at targets 'center center'
var css = positioning(el, 'center center', target, 'center center')
```

<img width="40" alt="center-center-center-center" src="https://cloud.githubusercontent.com/assets/640611/13719719/0788243a-e7f2-11e5-943c-fcc580dbcd3f.png">

```js
// puts els bottom left at targets top left
var css = positioning(el, 'bottom left', target, 'top left')
```

<img width="40" alt="bottom-left-top-left" src="https://cloud.githubusercontent.com/assets/640611/13742253/c7cee7d8-e9d2-11e5-8cab-aa8b22c7eecc.png">

```js
// puts els bottom center at targets bottom center
var css = positioning(el, 'bottom center', target, 'bottom center')
```

<img width="40" alt="bottom-center-bottom-center" src="https://cloud.githubusercontent.com/assets/640611/13719722/0789dc9e-e7f2-11e5-9353-6cba4cd5c7ab.png">


...etc.


## run tests
```js
npm test
```
