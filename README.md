###### Version française [ici](https://github.com/johan-perso/moreshort/blob/main/README.fr.md).

# MoreShort

A library capable of shortening links through a simple function, using multiple services with short domain names.


## Supported domains/services

| [rfrr.fr](https://unshort.johanstick.fr)             | [llui.site](https://unshort.johanstick.fr)      |
|------------------------------------------------------|-------------------------------------------------|
| [is.gd](https://is.gd)                               | [v.gd](https://v.gd)                            |
| [s.oriondev.fr](https://quecto.oriondev.fr)          | [liba.ro](https://liba.ro)                      |
| [s.3vm.cl](https://unshort.johanstick.fr)            | [s.erc.hr](https://unshort.johanstick.fr)       |
| [s.585.eu](https://unshort.johanstick.fr)            | [s.jib.ar](https://unshort.johanstick.fr)       |
| [s.ahpc.fi](https://unshort.johanstick.fr)           | [s.acme.si](https://unshort.johanstick.fr)      |
| [s.coute.au](https://unshort.johanstick.fr)          | [s.fronturi.ro](https://unshort.johanstick.fr)  |
| [shor.vercel.app](https://unshort.johanstick.fr)     |                                                 | 

## Installation

### NodeJS

> No support is guaranteed for old versions of NodeJS.

```bash
# With npm
npm i moreshort

# Or with pnpm
pnpm i moreshort
```

```js
const moreshort = require('moreshort')

console.log(moreshort) // Returns information about the library
console.log(await moreshort.short('https://google.com')) // Returns a shortened link
```

### Browser

```html
<script src="https://cdn.jsdelivr.net/npm/moreshort/dist/browser.js"></script>
```

```js
console.log(moreshort) // Returns information about the library
console.log(await moreshort.short('https://google.com')) // Returns a shortened link
```

> In the browser, you can use the `short` function directly, without needing to use `moreshort.short`.


## Using the main method

The main function has 3 arguments:

* `url` : The URL to shorten *(string)*
* `provider` : Domain name of the service to use *(string)*
* > You can get the list of available services with `moreshort.servicesDomains`
* `options` :
	* `shortcode` : Short code to use *(string)*
	* > Will be present in the shortened URL, after the slash *(e.g. https://is.gd/shortcode)*
	* > Only some services support this feature; `moreshort.servicesInfos` has a boolean property `shortcode` for each service
	* `replaceWhenErrors` : Automatically replace the service used by another if an error occurs *(boolean)*

**Example :**

```js
const moreshort = require('moreshort')

console.log(await moreshort.short('https://google.com')) // Shortened with a random service
console.log(await moreshort.short('https://google.com', 'is.gd')) // Shortened with the is.gd service
console.log(await moreshort.short('https://google.com', 'is.gd', { shortcode: 'google' })) // Shortened with the is.gd service and the short code "google"
```


## License

MIT © [Johan](https://johanstick.fr)