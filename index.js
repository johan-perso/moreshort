// TODO: tester sur le site d'Unshort

// Imports services
const xgd = require("./services/xgd")
const libaro = require("./services/libaro")
const bitlyws = require("./services/bitlyws")
const quecto = require("./services/quecto")
const unshort = require("./services/unshort")

// Running environment
var environment = "node"
if(typeof window != "undefined") environment = "browser"

// List of services caracteristics
var servicesInfos = {
	"is.gd": {
		name: "is.gd",
		website: "https://is.gd",
		id: "is-gd",
		shortcodes: true,
		corsFriendly: true,
		instantRedirect: true,
		providerFile: "xgd"
	},
	"v.gd": {
		name: "v.gd",
		website: "https://v.gd",
		id: "v-gd",
		shortcodes: true,
		corsFriendly: true,
		instantRedirect: false,
		providerFile: "xgd"
	},
	"liba.ro": {
		name: "liba.ro",
		website: "https://liba.ro",
		id: "liba-ro",
		shortcodes: true,
		corsFriendly: true,
		instantRedirect: true,
		providerFile: "libaro"
	},
	"bitly.ws": {
		name: "bitly.ws",
		website: "https://bitly.ws",
		id: "bitly-ws",
		shortcodes: false,
		corsFriendly: false,
		instantRedirect: true,
		providerFile: "bitlyws"
	},
	"xy2.eu": {
		name: "xy2.eu",
		website: "https://xy2.eu",
		id: "xy2-eu",
		shortcodes: false,
		corsFriendly: false,
		instantRedirect: true,
		providerFile: "bitlyws"
	},
	"tinyurl.mobi": {
		name: "tinyurl.mobi",
		website: "https://tinyurl.mobi",
		id: "tinyurl-mobi",
		shortcodes: false,
		corsFriendly: false,
		instantRedirect: true,
		providerFile: "bitlyws"
	},
	"s.oriondev.fr": {
		name: "s.oriondev.fr",
		website: "https://s.oriondev.fr",
		id: "s-oriondev-fr",
		shortcodes: true,
		corsFriendly: false,
		instantRedirect: true,
		providerFile: "quecto"
	},
	"s.3vm.cl": {
		name: "s.3vm.cl",
		website: "https://s.3vm.cl",
		id: "s-3vm-cl",
		shortcodes: true,
		corsFriendly: true,
		instantRedirect: true,
		providerFile: "unshort"
	},
	"s.ahpc.fi": {
		name: "s.ahpc.fi",
		website: "https://s.ahpc.fi",
		id: "s-ahpc-fi",
		shortcodes: true,
		corsFriendly: true,
		instantRedirect: true,
		providerFile: "unshort"
	},
	"s.acme.si": {
		name: "s.acme.si",
		website: "https://s.acme.si",
		id: "s-acme-si",
		shortcodes: true,
		corsFriendly: true,
		instantRedirect: true,
		providerFile: "unshort"
	},
	"s.3play.cl": {
		name: "s.3play.cl",
		website: "https://s.3play.cl",
		id: "s-3play-cl",
		shortcodes: true,
		corsFriendly: true,
		instantRedirect: true,
		providerFile: "unshort"
	},
	"s.fronturi.ro": {
		name: "s.fronturi.ro",
		website: "https://s.fronturi.ro",
		id: "s-fronturi-ro",
		shortcodes: true,
		corsFriendly: true,
		instantRedirect: true,
		providerFile: "unshort"
	},
	"shor.vercel.app": {
		name: "shor.vercel.app",
		website: "https://shor.vercel.app",
		id: "shor-vercel-app",
		shortcodes: true,
		corsFriendly: true,
		instantRedirect: true,
		providerFile: "unshort"
	},
	"s.jk.al": {
		name: "s.jk.al",
		website: "https://s.jk.al",
		id: "s-jk-al",
		shortcodes: true,
		corsFriendly: true,
		instantRedirect: true,
		providerFile: "unshort"
	},
	"s.amq.ro": {
		name: "s.amq.ro",
		website: "https://s.amq.ro",
		id: "s-amq-ro",
		shortcodes: true,
		corsFriendly: true,
		instantRedirect: true,
		providerFile: "unshort"
	},
	"s.orns.net": {
		name: "s.orns.net",
		website: "https://s.orns.net",
		id: "s-orns-net",
		shortcodes: true,
		corsFriendly: true,
		instantRedirect: true,
		providerFile: "unshort"
	},
	"s.noble.sx": {
		name: "s.noble.sx",
		website: "https://s.noble.sx",
		id: "s-noble-sx",
		shortcodes: true,
		corsFriendly: true,
		instantRedirect: true,
		providerFile: "unshort"
	},
	"s.18168.gq": {
		name: "s.18168.gq",
		website: "https://s.18168.gq",
		id: "s-18168-gq",
		shortcodes: true,
		corsFriendly: true,
		instantRedirect: true,
		providerFile: "unshort"
	}
}

// Main function
/**
 * Shorten an URL
 * @param {string} url - URL to shorten
 * @param {string} provider - Provider domain to use
 * @param {string} shortcode - Code used for pathname
 * @returns {string} Shortened URL
 * @throws {string} Error message
*/
async function short(url, provider, shortcode){
	// If no url specified, throw an error
	if(!url || url.length < 2) return new Error("[lib] No URL specified")
	if(!url.startsWith("http://") && !url.startsWith("https://")) url = `https://${url}`

	// If no provider specified, use a random one
	if(!provider) provider = Object.values(servicesInfos).filter(service => environment == "browser" ? service.corsFriendly : true)[Math.floor(Math.random() * Object.values(servicesInfos).filter(service => environment == "browser" ? service.corsFriendly : true).length)]
	else provider = servicesInfos[provider]

	// If still no provider found, throw an error
	if(!provider) return new Error("[lib] No provider found")

	// Shorten the URL
	if(provider.providerFile == "xgd") return xgd(provider.name, url, shortcode)
	else if(provider.providerFile == "libaro") return libaro(url)
	else if(provider.providerFile == "bitlyws") return bitlyws(provider.name, url)
	else if(provider.providerFile == "quecto") return quecto(provider.name, url, shortcode)
	else if(provider.providerFile == "unshort") return unshort(provider.name, url, shortcode)
	else return new Error("[lib] Unknown provider file")
}

// Exports
var exports = {
	// Version
	version: require("./package.json").version,

	// List of services domains
	servicesDomains: ["is.gd", "v.gd", "liba.ro", "bitly.ws", "xy2.eu", "tinyurl.mobi", "s.oriondev.fr", "s.3vm.cl", "s.ahpc.fi", "s.acme.si", "s.3play.cl", "s.fronturi.ro", "shor.vercel.app", "s.jk.al", "s.amq.ro", "s.orns.net", "s.noble.sx", "s.18168.gq"],

	// List of services caracteristics
	servicesInfos,

	// List of services credits
	servicesCredits: [
		{
			name: "is.gd",
			website: "https://is.gd"
		},
		{
			name: "Libaro",
			website: "https://liba.ro"
		},
		{
			name: "Bitly.ws",
			website: "https://bitly.ws"
		},
		{
			name: "Quecto",
			website: "https://s.oriondev.fr"
		},
		{
			name: "FreeDNS",
			website: "https://freedns.afraid.org"
		}
	],

	// Main function
	short
}
if(environment == "browser") window.moreshort = exports, window.short = short
else module.exports = exports