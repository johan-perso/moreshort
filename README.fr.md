###### English version [here](https://github.com/johan-perso/moreshort/blob/main/README.md).

# MoreShort

Une librairie capable de raccourcir des liens via une simple fonction, en utilisant de multiples services possédant des noms de domaines courts.


## Domaines/services supportés

| [is.gd](https://is.gd)                               | [v.gd](https://v.gd)                           |
|------------------------------------------------------|------------------------------------------------|
| [liba.ro](https://liba.ro)                           | [bitly.ws](https://bitly.ws)                   |
| [xy2.eu](https://xy2.eu)                             | [tinyurl.mobi](https://tinyurl.mobi)           |
| [s.oriondev.fr](https://github.com/oriionn/quecto)   | [s.3vm.cl](https://unshort.johanstick.fr)      |
| [s.ahpc.fi](https://unshort.johanstick.fr)           | [s.acme.si](https://unshort.johanstick.fr)     |
| [s.3play.cl](https://unshort.johanstick.fr)          | [s.fronturi.ro](https://unshort.johanstick.fr) |
| [shor.vercel.app](https://unshort.johanstick.fr)     | [s.jk.al](https://unshort.johanstick.fr)       |
| [s.amq.ro](https://unshort.johanstick.fr)            | [s.orns.net](https://unshort.johanstick.fr)    |
| [s.noble.sx](https://unshort.johanstick.fr)          | [s.18168.gq](https://unshort.johanstick.fr)    |


## Installation

### NodeJS

> Aucun support n'est garanti pour les anciennes versions de NodeJS.

```bash
# Avec npm
npm i moreshort

# Ou avec pnpm
pnpm i moreshort
```

```js
const moreshort = require('moreshort')

console.log(moreshort) // Retourne des informations sur la librairie
console.log(await moreshort.short('https://google.com')) // Retourne un lien raccourci
```

### Navigateur

```html
<script src="https://cdn.jsdelivr.net/npm/moreshort/dist/browser.js"></script>
```

```js
console.log(moreshort) // Retourne des informations sur la librairie
console.log(await moreshort.short('https://google.com')) // Retourne un lien raccourci
```

> Dans le navigateur, vous pouvez utiliser la fonction `short` directement, sans avoir à utiliser `moreshort.short`.


## Utilisation de la méthode principale

La fonction principale dispose de 3 arguments :

* `url` : L'URL à raccourcir *(string)*
* `provider` : Nom de domaine du service à utiliser *(string)*
* > Vous pouvez obtenir la liste des services disponibles avec `moreshort.servicesDomains`
* `shortcode` : Code court à utiliser *(string)*
* > Sera présent dans l'URL raccourci, après le slash *(ex: https://is.gd/shortcode)*
* > Seuls certains services supportent cette fonctionnalité, `moreshort.servicesInfos` dispose d'une propriété booléenne `shortcode` pour chaque service

**Exemple :**

```js
const moreshort = require('moreshort')

console.log(await moreshort.short('https://google.com')) // Raccourci avec un service aléatoire
console.log(await moreshort.short('https://google.com', 'is.gd')) // Raccourci avec le service is.gd
console.log(await moreshort.short('https://google.com', 'is.gd', 'google')) // Raccourci avec le service is.gd et le code court "google"
```


## Licence

MIT © [Johan](https://johanstick.fr)