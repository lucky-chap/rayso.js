# Ray.so API / Library 🎉✨

[![logotype](images/ray-banner.png)](https://npmjs.com/package/rayso.js)

This is an unofficial Node API for [ray.so](https://ray.so) that turns your code into beautiful images. Get all the features you need from ray.so without actually going there.

## Navigation

- [Installing](#installing)
- [Usage](#usage)
- [Parameters](#parameters)
- [Examples](#examples)
  - [Default](#default-output)
  - [Custom](#custom-parameters)
  - [No Background](#output-without-background)
- [Themes](#themes)
  - [Candy](#candy)
  - [Crimson](#crimson)
  - [Falcon](#falcon)
  - [Meadow](#meadow)
  - [Midnight](#midnight)
  - [Raindrop](#raindrop)
  - [Sunset](#sunset)
- [Credits](#credits)

## Installing

```bash
$ npm i rayso.js
```

## Usage

```javascript
const RaySo = require('rayso.js');
const raySo = new RaySo({
	// parameters, if you want to customize the output
	// you'll find detailed info about parameters below
});

raySo
	.create(`console.log('Hello, World!');`)
	.then((response) => {
		// response is image buffer
	})
	.catch((err) => {
		console.error(err);
	});
```

👮‍♂️ **Attention!** The API will not work if you don't have any kind of Chrome browser (Chromium). So if your chrome browser is installed in a different directory, make sure to set your full local path to `chrome.exe` in `broswerPath` parameter (or any other execution file of the browser based on Chromium).

```javascript
const RaySo = require('rayso.js');
const raySo = new RaySo({
	// The default path in the API is C:\Program Files\Google\Chrome\Application\chrome.exe
	// If your browser located somewhere else, specify it in browserPath parameter.
	// If it's the same as default one, just don't pass this parameter.
	browserPath: '...your path',
});
```

## Parameters

| Parameter      | Default value                                               | Type             | Description                                                                                                                                    |
| -------------- | ----------------------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `title `       | `"Untitled-1"`                                              | String           | The title that will be displayed on top of the code box.                                                                                       |
| `theme`        | `"breeze"`                                                  | String           | There are several options of how your box will look like. Available themes: breeze, candy, crimson, falcon, meadow, midnight, raindrop, sunset |
| `background`   | `true`                                                      | Boolean          | If disabled, it will create an image of code box only, without background.                                                                     |
| `darkMode`     | `true`                                                      | Boolean          | If disabled, it will change your theme to its light version.                                                                                   |
| `padding`      | `32`                                                        | String or Number | Distance between borders and code box. Available values: 16, 32, 64 and 128.                                                                   |
| `language`     | `"auto"`                                                    | String           | You better leave it auto :/ However, you can try to pass some language name and if it worked, good for you!                                    |
| `localPreview` | `false`                                                     | Boolean          | If enabled, it will create example.png image file of the output in the current directory.                                                      |
| `browserPath`  | `"C:\Program Files\ Google\Chrome\Application \chrome.exe"` | String           | Local path to the browser (Chrome). You can leave it, if it's your home PC and you have Chrome installed.                                      |
| `debug`        | `false `                                                    | Boolean          | If enabled, it will show messages in the console during code execution.                                                                        |

## Examples

### Default output

```javascript
const RaySo = require('rayso.js');
const raySo = new RaySo();
```

[![output](images/ray-default.png)](https://npmjs.com/package/rayso.js)

### Custom parameters

```javascript
const RaySo = require('rayso.js');
const raySo = new RaySo({
	title: 'Torpedo',
	theme: 'candy',
	padding: 32,
	language: 'javascript',
	localPreview: true,
});
```

[![output](images/ray-custom.png)](https://npmjs.com/package/rayso.js)

### Output without background

```javascript
const RaySo = require('rayso.js');
const raySo = new RaySo({ background: false });
```

[![output](images/ray-nobg.png)](https://npmjs.com/package/rayso.js)

## Themes

These are all the available themes, so far. As soon Ray.So has a new theme, it will appear here. Default theme `breeze` is not listed here, you saw it in the first picture of this README.

### Candy

```javascript
const RaySo = require('rayso.js');
const raySo = new RaySo({ theme: 'candy' });
```

[![candy](images/ray-candy.png)](https://npmjs.com/package/rayso.js)

### Crimson

```javascript
const RaySo = require('rayso.js');
const raySo = new RaySo({ theme: 'crimson' });
```

[![crimson](images/ray-crimson.png)](https://npmjs.com/package/rayso.js)

### Falcon

```javascript
const RaySo = require('rayso.js');
const raySo = new RaySo({ theme: 'falcon' });
```

[![falcon](images/ray-falcon.png)](https://npmjs.com/package/rayso.js)

### Meadow

```javascript
const RaySo = require('rayso.js');
const raySo = new RaySo({ theme: 'meadow' });
```

[![meadow](images/ray-meadow.png)](https://npmjs.com/package/rayso.js)

### Midnight

```javascript
const RaySo = require('rayso.js');
const raySo = new RaySo({ theme: 'midnight' });
```

[![midnight](images/ray-midnight.png)](https://npmjs.com/package/rayso.js)

### Raindrop

```javascript
const RaySo = require('rayso.js');
const raySo = new RaySo({ theme: 'raindrop' });
```

[![raindrop](images/ray-raindrop.png](https://npmjs.com/package/rayso.js)

### Sunset

```javascript
const RaySo = require('rayso.js');
const raySo = new RaySo({ theme: 'sunset' });
```

[![sunset](images/ray-sunset.png)](https://npmjs.com/package/rayso.js)

## Credits

- [Ray.so](https://ray.so)
