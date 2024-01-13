const fetch = require("node-fetch")

module.exports = async function (provider, url, shortCode) {
	if(!provider) return new Error("[service] No provider specified in the function call")
	if(!url) return new Error("[service] No link specified in the function call")

	const response = await fetch(`https://${provider}/create`, {
		method: "POST",
		body: JSON.stringify({ url, shorturl: shortCode || "" })
	}).then(res => res.json()).catch(err => { return { fetcherror: err } })

	if(response.shorturl && response.domain) return `https://${response.domain}/${response.shorturl}`
	else return new Error(response.fetcherror || response.message || response.error || response)
}